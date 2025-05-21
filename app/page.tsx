'use client'
import Header from './_components/Header';
import Footer from './_components/Footer';
import { TweetData } from './_interfaces/TweetData';
import TweetList from './_components/TweetList';

const IndexPage = () => {
  const tweets: TweetData[] = []
  return (
    <div>
      <Header />
      <div className="contents">
        <TweetList tweets={tweets} />
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;