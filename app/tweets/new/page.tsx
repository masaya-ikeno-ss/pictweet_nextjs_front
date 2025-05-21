'use client'
import { useState } from 'react'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import TweetForm from '@/app/_components/TweetForm'
import { useRouter } from 'next/navigation'
import { createTweet } from '@/app/api/tweets'

interface TweetFormData {
  text: string
  image: string
}

const CreateTweetPage = () => {
  const formData: TweetFormData = { text: '', image: '' }
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  const router = useRouter()

  const handleSubmit = async (formData: TweetFormData) => {
    try {
      await createTweet(formData);
      router.push('/');
    } catch (error) {
      setErrorMessages([error instanceof Error ? error.message : 'エラーが発生しました']);
    }
  }

  return (
    <>
      <Header />
      <div className="contents row">
        <div className="container">
          <h3>投稿する</h3>
          <TweetForm
            initialData={formData}
            errorMessages={errorMessages}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateTweetPage