import { FC } from "react";
import { GetServerSideProps } from "next";

const SSR: FC<{ html: string }> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

interface Cache {
  [key: string]: {
    html: string;
    timestamp: number;
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { publisherSlug, eventSlug } = context.params;

  const data = await fetch(
    `https://sandbox.arena.im/ssr/${context.params.publisherSlug}/${context.params.eventSlug}`,
    {
      headers: {
        "user-agent": context.req.headers["user-agent"],
      },
    }
  );

  const html = await data.text();

  return { props: { html } };
};

export default SSR;
