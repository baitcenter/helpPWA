import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonRow, IonGrid } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useSelector } from 'react-redux';

const Tab2: React.FC = () => {
  const username = useSelector((state:any) => state.user.username);
  const [showModal, setShowModal] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Help.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Request</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonModal isOpen={showModal}>
        <p>This is modal content</p>
        <IonButton color="danger" onClick={() => setShowModal(false)}>Cancel</IonButton>
        <IonButton onClick={() => setShowModal(false)}>Submit</IonButton>
      </IonModal>
      <IonButton id="newButton" color="secondary" expand="block" onClick={() => setShowModal(true)}>New Request</IonButton>
      <IonList>
      <IonItemSliding>
        <IonItem>
        <IonGrid>
          <IonRow>
          <IonLabel>Date here</IonLabel>
            </IonRow>
            <IonRow>
            <IonLabel>Summary of items</IonLabel>
            </IonRow>
            <IonRow>
            <IonLabel>Status</IonLabel>
            </IonRow>
            </IonGrid>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
