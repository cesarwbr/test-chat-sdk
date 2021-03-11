import { BaseChannel, BaseLiveChat } from "@arena-im/chat-types";
import ArenaChat from "@arena-im/chat-sdk";
import history from "../resources/history.json";
import { ChangeEvent, useEffect, useRef, useState } from "react";

console.clear();

export default function App() {
  const arenaChat = useRef<ArenaChat | null>(null);
  const liveChat = useRef<BaseLiveChat | null>(null);
  const channel = useRef<BaseChannel | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState<
    number | null
  >(null);
  const [maxTime, setMaxTime] = useState<number | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    async function intializeChat() {
      arenaChat.current = new ArenaChat("test-chat");
      liveChat.current = await arenaChat.current.getLiveChat("ospi");
      if (liveChat.current !== null) {
        channel.current = await liveChat.current.getMainChannel();
      }
    }

    intializeChat();
  }, []);

  async function sendMessage(message: any) {
    if (channel.current === null || arenaChat.current === null) {
      return;
    }

    await arenaChat.current.setUser({
      image: message.sender.photoURL,
      name: message.sender.displayName,
      id: message.sender.displayName,
      email: `${message.sender.uid}@example.com`
    });

    if (channel.current !== null) {
      const newMessage: {
        text?: string;
        replyTo?: string;
        mediaURL?: string;
        tempId?: string;
        slowMode?: boolean;
      } = {};

      if (message.message.media?.url) {
        newMessage.mediaURL = message.message.media.url;
      }

      if (message.message.text) {
        newMessage.text = message.message.text;
      }

      newMessage.slowMode = true

      channel.current.sendMessage(newMessage);
    }
  }

  function wait(miliseconds: number) {
    return new Promise((resolve) => {
      if (timeoutId.current !== null) {
        window.clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }

      timeoutId.current = window.setTimeout(resolve, miliseconds);
    });
  }

  useEffect(() => {
    async function callNextMessage(message: any, index: number) {
      sendMessage(message);

      const nextMessage = history[index + 1];
      if (nextMessage) {
        let timeWait = nextMessage.createdAt - message.createdAt;

        if (maxTime !== null && timeWait > maxTime) {
          timeWait = maxTime;
        }

        await wait(timeWait);

        setCurrentMessageIndex(index + 1);
      }
    }

    if (currentMessageIndex !== null && history[currentMessageIndex]) {
      const message = history[currentMessageIndex];
      callNextMessage(message, currentMessageIndex);
    }
  }, [currentMessageIndex, maxTime]);

  function handleStartChat() {
    if (timeoutId.current !== null) {
      window.clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }

    if (currentMessageIndex === null) {
      setCurrentMessageIndex(0);
    } else {
      setCurrentMessageIndex(null);
    }
  }

  function handlePauseChat() {
    if (timeoutId.current !== null) {
      window.clearTimeout(timeoutId.current);
      timeoutId.current = null;
    } else {
      setCurrentMessageIndex((index) => (index === null ? 0 : index + 1));
    }
  }

  function handleMaxTime(event: ChangeEvent<HTMLSelectElement>) {
    event.stopPropagation();

    const value = event.target.value;

    if (value === "") {
      return setMaxTime(null);
    }

    setMaxTime(parseInt(value));
  }

  return (
    <div className="App">
      <h1>Arena Chat Replay</h1>
      <button onClick={handleStartChat}>
        {currentMessageIndex === null ? "START CHAT!" : "STOP CHAT"}
      </button>
      &nbsp;
      {currentMessageIndex !== null && (
        <button onClick={handlePauseChat}>pause chat</button>
      )}
      <h3>Max time between messages:</h3>
      <select onChange={handleMaxTime}>
        <option value="">Normal</option>
        <option value="300">300 milliseconds</option>
        <option value="500">500 milliseconds</option>
        <option value="800">800 milliseconds</option>
        <option value="1000">1 second</option>
        <option value="10000">10 seconds</option>
        <option value="30000">30 seconds</option>
        <option value="60000">60 seconds</option>
      </select>
      <h3>Total messages sent:</h3>
      {currentMessageIndex === null ? 0 : currentMessageIndex + 1}
    </div>
  );
}
