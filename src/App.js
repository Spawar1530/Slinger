import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'dd6c218e-6ab3-4955-8c41-0355387aff46';

const App = () => {

if (!localStorage.getItem('username')) return <LoginForm />;

return (<ChatEngine
  height="100vh"
  projectID={projectID}
  userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
  // { <div>
  // <Link to="/login">
  // <button className="button">Log Out</button>
  // <Link />
  // </div> }


);

}


// // infinite scroll, logout, more customizations...

export default App;
