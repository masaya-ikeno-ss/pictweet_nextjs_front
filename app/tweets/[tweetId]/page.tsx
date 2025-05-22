'use client'
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import { useAuthContext } from '@/app/context/AuthContext'
import { TweetData } from '@/app/_interfaces/TweetData'
import Link from 'next/link'

const ShowTweetDetailPage = () => {
  const { user } = useAuthContext()

  const tweet: TweetData = {
    id: 1,
    text: "テキスト",
    image: "https://tech-master.s3.amazonaws.com/uploads/curriculums/images/Rails1-4/sample.jpg",
    user: {
      id: 1,
      nickname: "テストユーザー"
    }
  }

  return (
    <>
      <Header />
      <div className="contents row">
        <div className="content_post" style={{ backgroundImage: `url(${tweet.image})` }}>
          { user?.isAuthenticated && user.id == tweet.user.id ? (
            <div className="more">
              <span><img src="/images/arrow_top.png" alt="Arrow Top" /></span>
              <ul className="more_list">
                <li>
                  <Link href={`/`} className="update-btn">編集</Link>
                </li>
                <li>
                  <form action={`/`} method="post">
                    <input type="submit" className="delete-btn" value="削除" />
                  </form>
                </li>
              </ul>
            </div>
          ) : null}
          <p>{tweet.text}</p>
          <span className="name">
            <Link href={`/`}>
              <span>投稿者</span><span>{tweet.user.nickname}</span>
            </Link>
          </span>
        </div>
        <p>コメントを表示する場所です</p>
      </div>
      <Footer />
    </>
  )
}

export default ShowTweetDetailPage