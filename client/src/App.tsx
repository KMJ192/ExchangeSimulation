import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { screenResize } from './redux-module/screen_size';
import { throttle } from 'lodash';

import NotFound from './components/view/NotFound';
import Auth from './auth/Auth';

import { coin_page, login_page, user_patch_page, user_register_page } from './path/PagePath';
import { paceCaseUserPatch, pageCaseLogined } from './auth/PageCase';

import './global_style/button.scss';
import './global_style/inputbox.scss';
import './global_style/line.scss';
import './global_style/sort.scss';
import LoginContainer from './container/login/LoginContainer';
import DefaultContainer from './container/default/DefaultContainer';
import UserPatchContainer from './container/user_patch/UserPatchContainer';
import UserRegisterContainer from './container/user_register/UserRegisterContainer';
import CoinContainer from './container/coin/CoinContainer';


function App() {
  const winSizeDispatch = useDispatch();

  const resizeHandler = throttle(() => {
    winSizeDispatch(screenResize(window.innerWidth, window.innerHeight));
  }, 800);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [resizeHandler]);


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Auth(DefaultContainer, false)} />
          <Route path={login_page} exact component={Auth(LoginContainer, true, pageCaseLogined)}/>
          <Route path={user_register_page} exact component={Auth(UserRegisterContainer, true, pageCaseLogined)}/>
          <Route path={user_patch_page} exact component={Auth(UserPatchContainer, true, paceCaseUserPatch)}/>
          <Route path={coin_page} exact component={CoinContainer}/>
          <Route exact component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;