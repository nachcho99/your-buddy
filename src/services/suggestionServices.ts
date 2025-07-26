import { httpPost } from "../utils/httpRequest.ts";
import type {SuggestionResponse} from "../interfaces/suggestion.ts";

export function getSuggestions(topic: string): Promise<SuggestionResponse> {
  return httpPost<SuggestionResponse>('suggestions', { topic });
}
