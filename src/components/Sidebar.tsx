import {useEffect, useState} from 'react';
import './Sidebar.scss';
import {ApiService} from "../services/api.ts";
import type {Conversation} from "../types/conversation.ts";


export const Sidebar = () => {

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const loadConversations = async () => {

    try {
      const response = await ApiService.getConversations()
      setConversations(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadConversations()
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="title">
          Your Buddy
        </h3>
      </div>

      <div className="chat-history">
        <h3>Chats</h3>
        <div className="chat-list">
          {conversations.map((conversation) => (
            <button key={conversation.id} className="chat-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {conversation.topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
