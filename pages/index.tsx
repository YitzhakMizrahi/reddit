import type { NextPage } from 'next';
import Head from 'next/head';
import PostBox from '../components/PostBox';
import Feed from './../components/Feed';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto my-7 max-w-5xl">
        <PostBox />
        <div className="flex flex-1">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Home;
