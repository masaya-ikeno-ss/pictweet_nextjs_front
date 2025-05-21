'use client'
import Header from './_components/Header';
import Footer from './_components/Footer';
import { TweetData } from './_interfaces/TweetData';
import TweetList from './_components/TweetList';
import { useEffect, useState } from 'react';
import { findAllTweets } from './api/tweets';

const IndexPage = () => {
  const [tweets, setTweets] = useState<TweetData[]>([])
  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await findAllTweets()
        setTweets(response)
      } catch (error) {
        console.error("ツイートの取得に失敗しました", error)
      }
    }
    getTweets()
  }, [])

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