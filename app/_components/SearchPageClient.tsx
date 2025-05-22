"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { TweetData } from "../_interfaces/TweetData"
import Footer from "./Footer"
import Header from "./Header"
import SearchForm from "./SearchForm"
import TweetList from "./TweetList"
import { useEffect, useState } from "react"
import { deleteTweet, searchTweets } from "../api/tweets"

const SearchPageClient = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ""

  const [tweets, setTweets] = useState<TweetData[]>([])

  useEffect(() => {
    const fetchTweets = async () => {
      if (query) {
        try {
          const response = await searchTweets(query)
          setTweets(response)
        } catch (error) {
          console.error('ツイートの検索に失敗しました:', error)
        }
      }
    }
    fetchTweets()
  }, [query])

  const handleDeleteTweet = async (tweetId: number) => {
    try {
      await deleteTweet(tweetId)
      router.push('/')
    } catch (error) {
      console.error('ツイートの削除に失敗しました:', error)
    }
  }

  const handleSearch = (query: string) => {
    router.push(`/tweets/search?query=${encodeURIComponent(query)}`)
  }

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} initialQuery={query}/>
      <div className="contents row">
        <TweetList tweets={tweets} onDeleteTweet={handleDeleteTweet} />
      </div>
      <Footer />
    </>
  )
}

export default SearchPageClient