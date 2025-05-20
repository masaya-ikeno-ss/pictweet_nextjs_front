'use client'
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <header className="header">
        <h1><Link href="/">PicTweet</Link></h1>
      </header>
      <div className="contents">
        <p>ツイートを表示する場所です</p>
      </div>
    </div>
  );
}

export default IndexPage;