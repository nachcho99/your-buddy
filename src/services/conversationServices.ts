import type { ConversationResponse } from '../interfaces/conversation';
import {httpGet} from "../utils/httpRequest.ts";

export function getConversations(size = 20, page = 1): Promise<ConversationResponse> {
  return httpGet<ConversationResponse>(`conversations?size=${size}&page=${page}`);
}
