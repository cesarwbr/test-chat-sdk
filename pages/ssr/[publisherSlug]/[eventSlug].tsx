import { FC } from "react";
import { GetServerSideProps } from "next";

const SSR: FC<{ html: string }> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://sandbox.arena.im/ssr/${context.params.publisherSlug}/${context.params.eventSlug}`
  );

  const html = await data.text();

  return { props: { html } };
};

export default SSR;
