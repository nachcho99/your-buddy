export interface SuggestionResponse {
  success: boolean
  data: Suggestion
}

export interface Suggestion {
  updated_at: string
  created_at: string
  id: number
  messages: Message[]
}

export interface Message {
  id: number
  conversation_id: number
  content: string
  created_at: string
  updated_at: string
}
