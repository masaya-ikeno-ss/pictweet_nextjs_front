'use client'
import { useForm } from "react-hook-form"
import Header from "@/app/_components/Header"

interface LoginCredentials {
  email: string
  password: string
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>()

  const onSubmit = (FormData: LoginCredentials) => {
    // Log inをクリックしたときの処理
  }

  return (
    <>
      <Header />
      <div className="contents row">
        <div className="container">
          <h2>Log in</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="new_user">
            <div className="field">
              <label className="column-title">Email</label><br />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
              <input 
                type="email" 
                {...register("email", { 
                  required: "メールアドレスは必須です", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "無効なメールアドレスです"}
                })}
              />
            </div>

            <div className="field">
              <label className="password">Password</label><br />
              {errors.password && <span className="error-message">{errors.password.message}</span>}
              <input 
                type="password" 
                {...register("password", {
                  required: "パスワードは必須です",
                  minLength: { value: 6, message: "パスワードは6文字以上で入力してください" }
                })}
              />
            </div>

            <div className="actions">
              <input type="submit" value="Log in" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage