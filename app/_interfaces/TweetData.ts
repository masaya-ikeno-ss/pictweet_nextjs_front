import { CommentData } from "./CommentData"
import { UserData } from "./UserData"

export interface TweetData {
  id: number
  text: string
  image: string | null
  user: UserData
  comments: CommentData[]
}