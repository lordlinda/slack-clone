import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import { useStateValue } from './Stateprovider';
function App() {
  const [{ user }] = useStateValue()
  return (
    <div>
      <Router>
        {
          !user ?
            (
              <Login />
            ) : (
              <>
                {/**Header */}
                <Header />
                {/**Sidebar */}
                <div className="app">
                  <Sidebar />
                  <Switch>
                    <Route path='/room/:roomId'>
                      <Chat />
                    </Route>
                  </Switch>
                </div>

              </>
            )
        }

        {/**React->Chat screen */}
      </Router>
    </div>
  );
}

export default App;
