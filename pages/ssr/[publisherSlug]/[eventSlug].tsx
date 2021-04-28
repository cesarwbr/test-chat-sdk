import { FC } from "react";
import { GetServerSideProps } from "next";

const SSR: FC<{ html: string }> = ({ html }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style global jsx>{`
        body {
          padding: 0;
          margin: 0;
          font-family: "Austin News Text Roman", Georgia, Times, serif;
          line-height: 25px;
        }

        blockquote {
          background-image: url(https://www.telegraph.co.uk/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/img/borders/comment__news.png);
          line-height: 25px;
          background-position: -1088px 0;
          background-repeat: repeat-y;
          color: #333;
          font-family: "Austin News Text Roman", Georgia, Times, serif;
          margin: 0 0 1.5rem;
          padding: 0 2.5rem 0 2.6rem;
        }

        .summary--container {
          padding-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { publisherSlug, eventSlug } = context.params;

  const data = await fetch(
    `https://sandbox.arena.im/ssr/${publisherSlug}/${eventSlug}`,
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
