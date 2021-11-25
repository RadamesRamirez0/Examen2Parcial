import React, { useEffect } from 'react'
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import splash from './components/splash';
import trivia1 from './components/trivia1';
import trivia2 from './components/trivia2';
import trivia3 from './components/trivia3';
import login from './components/login';
import result from './components/result';

const App = () => {

  useEffect(() => {
    setTimeout(() =>{ Actions.login()},3000);
        }, [] )
  return (
    <Router>
      <Stack key="root">
        <Scene initial={true} hideNavBar={true} key="splash" component={splash}/>
        <Scene key="login" hideNavBar={true} component={login}/>
        <Scene key="trivia1" hideNavBar={true} component={trivia1}/>
        <Scene key="trivia2" hideNavBar={true} component={trivia2}/>
        <Scene key="trivia3" hideNavBar={true} component={trivia3}/>
        <Scene key="result" hideNavBar={true} component={result}/>
      </Stack>
    </Router>


  )
}

export default App;
