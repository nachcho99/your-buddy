import { Chat } from './components/Chat';
import { Sidebar } from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
