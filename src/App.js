import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Signup from "./components/Signup";
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const projectID = 'dd6c218e-6ab3-4955-8c41-0355387aff46';

const App = (props) => {

// if (!localStorage.getItem('username')) return <LoginForm />;
if (!localStorage.getItem('username' && 'password')) return(
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={ LoginForm }/>
  <Route path="/signup" component={ Signup }/>
  </Switch>
  </BrowserRouter>
) ;

return (<div><ChatEngine
  height="100vh"
  projectID={projectID}
  userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
  <div>
  
    <button className="signup__login1"
    onClick={() => {
      localStorage.removeItem('username' && "password");
      <Redirect to='/' />
      window.location.reload()
    }}>Log Out</button>
    </div>
  </div>

);

}


// // infinite scroll, logout, more customizations...

export default App;
