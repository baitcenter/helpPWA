import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonSpinner, IonRouterOutlet, IonLoading,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { getCurrentUser } from './firebaseConfig';

/* Theme variables */
import './theme/variables.css';
import TabRoot from './pages/TabRoot/TabRoot';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

const LoginRoot: React.FC = () => {
  return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/TabRoot" component={TabRoot} exact={true} />
                <Route path="/login" component={Login} exact={true} />
            </IonRouterOutlet>
          </IonReactRouter>
  )};

const App: React.FC = () => {
  const [busy,setBusy] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser().then((user:any) => {
      console.log(user);
      if (user){
        console.log(user.displayName);
        dispatch(setUserState([user.displayName,user.email,user.photoURL]))
        window.history.replaceState({}, '', '/TabRoot')
      } else{
        window.history.replaceState({}, '', '/login')
      }
      setBusy(false);
    })
  }, [])

    return (<IonApp>{busy?  <IonLoading
      isOpen={busy} /> : <LoginRoot />}</IonApp>
    );
    };

export default App;
