"use client"

import AuthGuard from "@/app/_components/AuthGuard"
import Footer from "@/app/_components/Footer"
import Header from "@/app/_components/Header"
import TweetForm from "@/app/_components/TweetForm"
import { TweetData } from "@/app/_interfaces/TweetData"
import { findTweetById } from "@/app/api/tweets"
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface TweetFormData {
  text: string
  image: string
}

const EditTweetPage = () => {
  const [tweet, setTweet] = useState<TweetData | null>(null)
  const [formData, setFormData] = useState<TweetFormData>({ text: "", image: "" })
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const params = useParams()
  const tweetId = params.tweetId

  useEffect(() => {
    const fetchTweet = async () => {
      setLoading(true)
      if (tweetId) {
        try {
          const response = await findTweetById(Number(tweetId))
          setTweet(response)
          const { text, image } = response
          setFormData({ text: text, image: image || "" })
        } catch (error) {
          console.error("ツイートの取得に失敗しました", error)
        }
      }
      setLoading(false)
    }
    fetchTweet()
  }, [tweetId])

  const handleSubmit = async () => {
    // 編集ボタンを押したときの処理
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!tweet) {
    return notFound()
  }

  return (
    <AuthGuard>
      <Header />
      <div className="contents row">
        <div className="container">
          <h3>編集する</h3>
          <TweetForm
             initialData={formData}
             errorMessages={errorMessages}
             onSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </AuthGuard>
  )
}

export default EditTweetPage