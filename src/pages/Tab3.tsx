import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonRow, IonGrid, IonAvatar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useSelector } from 'react-redux';

const Tab3: React.FC = () => {
  const username = useSelector((state:any) => state.user.username);
  const email = useSelector((state:any) => state.user.email);
  const photoUrl = useSelector((state:any) => state.user.photoUrl);
  const [checked, setChecked] = useState(false);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>

      <IonItem>
        <IonGrid>
          <IonRow>
          <IonLabel>{username}</IonLabel>
          </IonRow>
       <IonRow>
       <IonLabel>{email}</IonLabel>
       </IonRow>
        </IonGrid>
    <IonAvatar>
      <img src={photoUrl} />
    </IonAvatar>
      </IonItem>

      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} slot="end"></IonToggle>
      </IonItem>

      <IonItem>
        <IonLabel>Dark Mode</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>

      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>

    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
