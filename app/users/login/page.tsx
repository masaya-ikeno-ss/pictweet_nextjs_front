'use client'
import { useForm } from "react-hook-form"
import Header from "@/app/_components/Header"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { login } from "@/app/api/users"

interface LoginCredentials {
  email: string
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>()
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  const onSubmit = async (formData: LoginCredentials) => {
    try {
      await login({ email: formData.email, password: formData.password });
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
          <h2>Log in</h2>
          {errorMessages.map((error, index) => (
            <div key={index} className="error-message">{error}</div>
          ))}

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