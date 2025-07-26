import {useEffect, useState} from 'react';
import './Sidebar.scss';
import type {Conversation} from "../interfaces/conversation.ts";
import {IconChat} from "./ui/icons/IconChat.tsx";
import {getConversations} from "../services/conversationServices.ts";


export const Sidebar = () => {

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const loadConversations = async () => {

    try {
      const response = await getConversations()
      setConversations(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    loadConversations();

    // TODO: Replace this with context API or similar
    window.addEventListener('conversationUpdated', loadConversations);

    return () => {
      window.removeEventListener('conversationUpdated', loadConversations);
    };
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
              <IconChat/>
              {conversation.topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
