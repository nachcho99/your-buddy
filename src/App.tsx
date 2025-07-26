import { Chat } from './components/Chat';
import { Sidebar } from './components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
