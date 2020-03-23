import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useSelector } from 'react-redux';

const Tab1: React.FC = () => {
  const username = useSelector((state:any) => state.user.username);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        <p>{username}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
