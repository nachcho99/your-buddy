import {useState} from 'react';
import './Chat.scss';
import type {ChatMessage} from '../types';
import {ApiService} from '../services/api';
import IconSend from "./ui/IconSend.tsx";

export const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;
    setMessages([])

    // setMessages(prev => [...prev, userMessage]);
    setTopic(inputValue);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await ApiService.getSuggestions(inputValue);

      if (response.success && response.data.messages?.length > 0) {
        const suggestionsMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: response.data.messages.map(s => s.content).join('\n\n'),
        };
        setMessages(prev => [...prev, suggestionsMessage]);
      } else {
        setError('There was an error!');
      }
    } catch (err) {
      setError('Something went wrong, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.length === 0 && !isLoading && (
          <div className="welcome-message">
            <h1>What's on mind today?</h1>
          </div>
        )}

        <div
          className="message user"
        >
          <div className="message-content">
            <h2> {topic}</h2>
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className="message"
          >
            <div className="message-content">
              {message.content.split('\n\n').map((text, index) => (
                <p key={index} >{index + 1 }. {text}</p>
              ))}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Do you have a topic on mind? Ask for suggestions..."
            disabled={isLoading}
            className="chat-input"
          />
          <IconSend className="input-tools" size={36} color="white"/>
        </div>
      </form>
    </div>
  );
};
