'use client'
import { useState } from "react"
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import TweetList from '@/app/_components/TweetList'
import { TweetData } from '@/app/_interfaces/TweetData'
import { UserData } from '@/app/_interfaces/UserData'

const UserMyPage = () => {
  const [user, setUser] = useState<UserData>({id: 0, nickname: ""})
  const [tweets, setTweets] = useState<TweetData[]>([])

  const handleDeleteTweet = async (tweetId: number) => {
    // 削除ボタンが押された時の処理
  }

  return (
    <div>
      <Header />
      <div className="contents row">
        <p>{user.nickname}さんの投稿一覧</p>
        <TweetList tweets={tweets} onDeleteTweet={handleDeleteTweet}/>
      </div>
      <Footer />
    </div>
  )
}

export default UserMyPage