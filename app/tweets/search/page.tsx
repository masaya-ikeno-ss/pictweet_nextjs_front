"use client"

import Footer from "@/app/_components/Footer"
import Header from "@/app/_components/Header"
import SearchForm from "@/app/_components/SearchForm"
import TweetList from "@/app/_components/TweetList"
import { TweetData } from "@/app/_interfaces/TweetData"
import { deleteTweet } from "@/app/api/tweets"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchPage = () => {
  const router = useRouter()
  const [tweets, setTweets] = useState<TweetData[]>([])

  const handleDeleteTweet = async (tweetId: number) => {
    try {
      await deleteTweet(tweetId)
      router.push("/")
    } catch (error) {
      console.error("ツイートの削除に失敗しました", error)
    }
  }

  const handleSearch = (query: string) => {
    // 検索ボタンを押したときの処理
  }

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} />
      <div className="contents row">
        <TweetList tweets={tweets} onDeleteTweet={handleDeleteTweet} />
      </div>
      <Footer />
    </>
  )
}

export default SearchPage