import { AuthProvider } from './context/AuthContext';
import './styles/style.css'

export const metadata = {
  title: 'PicTweet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}