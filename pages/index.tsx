import type { NextPage } from 'next';
import Head from 'next/head';
import PostBox from '../components/PostBox';
import Header from './../components/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PostBox */}
      <PostBox />

      <div>{/* Feed */}</div>
    </div>
  );
};

export default Home;
