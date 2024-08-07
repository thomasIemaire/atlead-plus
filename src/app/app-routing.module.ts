import { AuthguardService } from './services/authguard.service';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './navigation/planning/planning.component';
import { WalletComponent } from './navigation/wallet/wallet.component';
import { CustomersComponent } from './navigation/customers/customers.component';
import { MessagesComponent } from './navigation/messages/messages.component';
import { PlansComponent } from './navigation/plans/plans.component';
import { SettingsComponent } from './navigation/settings/settings.component';
import { AssistantComponent } from './navigation/assistant/assistant.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostsComponent } from './navigation/posts/posts.component';
import { HomeComponent } from './navigation/home/home.component';

const routes: Routes = [
  { path: 'login', component: AuthentificationComponent },

  { path: 'assistant', component: AssistantComponent, canActivate: [AuthguardService] },

  { path: 'customers', component: CustomersComponent, canActivate: [AuthguardService] },

  { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
  
  { path: 'messages', component: MessagesComponent, canActivate: [AuthguardService] },
  { path: 'messages/:id', component: MessagesComponent, canActivate: [AuthguardService] },

  { path: 'planning', component: PlanningComponent, canActivate: [AuthguardService] },
  { path: 'plans', component: PlansComponent, canActivate: [AuthguardService] },
  { path: 'posts', component: PostsComponent, canActivate: [AuthguardService] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthguardService] },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthguardService] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
