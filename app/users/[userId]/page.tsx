'use client'
import { useEffect, useState } from "react"
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import TweetList from '@/app/_components/TweetList'
import { TweetData } from '@/app/_interfaces/TweetData'
import { UserData } from '@/app/_interfaces/UserData'
import { notFound, useParams, useRouter } from "next/navigation"
import { findUserTweets } from "@/app/api/users"
import { deleteTweet } from "@/app/api/tweets"

const UserMyPage = () => {
  const [user, setUser] = useState<UserData | null>(null)
  const [tweets, setTweets] = useState<TweetData[]>([])
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const userId = params.userId
  const router = useRouter()

  useEffect(() => {
    const getTweets = async () => {
      setLoading(true)
      if (userId) {
        try {
          const response = await findUserTweets(Number(userId))
          setUser({ id: Number(response.id), nickname: String(response.nickname) })
          setTweets(response.tweets)
        } catch (error) {
          setUser(null)
          setTweets([])
          console.error("ユーザー情報の取得に失敗しました", error)
        } 
      }
      setLoading(false)
    }
    getTweets()
  }, [userId])

  const handleDeleteTweet = async (tweetId: number) => {
    try {
      await deleteTweet(tweetId)
      router.push("/")
    } catch (error) {
      console.log("ツイートの削除に失敗しました", error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return notFound()
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