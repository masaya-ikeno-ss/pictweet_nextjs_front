"use client"
import Link from "next/link"
import { TweetData } from "../_interfaces/TweetData"

interface TweetProps {
  tweet: TweetData
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <div className="content_post" style={{ backgroundImage: `url(${tweet.image})` }}>
      <div className="more">
        <span><img src="/images/arrow_top.png" alt="Arrow Top" /></span>
        <ul className="more_list">
          <li>
          <Link href={`/`}>詳細</Link>
          </li>
          <li>
            <Link href={`/`} className="update_btn">編集</Link>
          </li>
          <li>
            <form action={`/`} method="post">
              <input type="submit" className="delete_btn" value="削除" />
            </form>
          </li>
        </ul>
      </div>

      <p>{tweet.text}</p>
      <span className="name">
        <Link href={`/`}>
          <span>投稿者</span><span>{tweet.user.nickname}</span>
        </Link>
      </span>
    </div>
  )
}

export default Tweet