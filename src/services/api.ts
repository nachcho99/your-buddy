import type {SuggestionResponse} from "../types/suggestion";
import type {ConversationResponse} from "../types/conversation.ts";

const API_BASE_URL = 'http://localhost:8000/api';

export class ApiService {
  static async getSuggestions(topic: string): Promise<SuggestionResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      throw error;
    }
  }

  static async getConversations(size: number = 20, page: number = 1): Promise<ConversationResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/conversations?size=${size}&page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      throw error;
    }
  }
}
