import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import { loginUser } from '../firebaseConfig';
import { logoGoogle, heart, logoApple } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';
const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [busy,setBusy] = useState(false);

  async function login() {
      setBusy(true)
      const res: any = await loginUser()
      if (res) {
          dispatch(setUserState([res.user.displayName,res.user.email,res.user.photoURL]))
          history.replace('/tab1')
      }
      setBusy(false)
  }
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonLoading
        isOpen={busy}
      />
        <IonGrid id="LoginCenter">
        <IonRow>
        <IonTitle id="name" size="large">Help.</IonTitle>
        </IonRow>
        <IonRow>
          <IonCol col-xl-6 ><IonIcon id="HelpLogo" icon={heart}></IonIcon></IonCol>
        </IonRow>
      </IonGrid>
        <div className="container">
        <IonButton id="buttonG" onClick={loginUser} color="medium" expand="block" fill="outline">
                <IonIcon slot="start" id="LoginIcon" icon={logoGoogle} />
                Continue with Google
        </IonButton>
        </div>
        <div className="container">
        <IonButton id="button2" onClick={loginUser} color="medium" expand="block" fill="outline">
                <IonIcon slot="start" id="LoginIcon" icon={logoApple} />
                Continue with Apple
        </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;