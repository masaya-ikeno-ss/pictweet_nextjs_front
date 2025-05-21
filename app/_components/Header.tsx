'use client'
import Link from 'next/link'

const Header = () => {
  const handleLogout = () => {
    // ログアウトボタンが押された時の処理
  }

  return (
    <header className="header">
      <div className="header__bar row">
        <h1 className="grid-6"><Link href="/">PicTweet</Link></h1>
        <div className="user_nav grid-6">
          <span>
            <Link href={`/`}>{"ユーザー名"}</Link>
            <ul className="user__info">
              <li>
                <Link href={`/`}>マイページ</Link>
                <form onSubmit={handleLogout}>
                  <input className="logout-btn" type="submit" value="ログアウト" />
                </form>
              </li>
            </ul>
          </span>
          <Link href="/" className="post">投稿する</Link>
        </div>
        <div className="grid-6">
          <Link href="/users/sign_up" className="post">新規登録</Link>
          <Link href="/users/login" className="post">ログイン</Link>
        </div>
      </div>
   </header>
  )
}

export default Header