import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword="{keyword}" />
      <meta contents="{contents}" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "So's blog",
  keyword: "Blog powered by Next.js",
  contest: "practice next js",
};

export default HeadInfo;
