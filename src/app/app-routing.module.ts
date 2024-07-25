import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './navigation/planning/planning.component';
import { WalletComponent } from './navigation/wallet/wallet.component';
import { StatisticsComponent } from './navigation/statistics/statistics.component';
import { CustomersComponent } from './navigation/customers/customers.component';
import { MessagesComponent } from './navigation/messages/messages.component';
import { PlansComponent } from './navigation/plans/plans.component';
import { SettingsComponent } from './navigation/settings/settings.component';
import { AssistantComponent } from './navigation/assistant/assistant.component';
import { AssistantCommunicateComponent } from './navigation/assistant/assistant-communicate/assistant-communicate.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  { path: 'login', component: AuthentificationComponent },

  { path: 'assistant', component: AssistantComponent },
  { path: 'assistant/communicate', component: AssistantCommunicateComponent },

  { path: 'customers', component: CustomersComponent },
  
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:id', component: MessagesComponent },

  { path: 'planning', component: PlanningComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'wallet', component: WalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
