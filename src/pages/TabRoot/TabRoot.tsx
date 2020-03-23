// FILE: TabRoot.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, settingsOutline, personOutline, mapOutline, help, helpOutline, happyOutline } from 'ionicons/icons';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';
interface IAppProps {}

const TabRoot: React.FC<IAppProps> = props => {
  return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                <Route path="/tab1" component={Tab1} exact={true} />
                <Route path="/tab2" component={Tab2} exact={true} />
                <Route path="/tab3" component={Tab3} />
                <Redirect to="/tab2" />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon icon={happyOutline} />
                    <IonLabel>Volunteer</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon icon={personOutline} />
                    <IonLabel>Request</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon icon={settingsOutline} />
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
                </IonTabBar>
            </IonTabs>
            </IonReactRouter>
  );
};

export default TabRoot;