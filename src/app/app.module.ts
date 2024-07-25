import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlanningComponent } from './navigation/planning/planning.component';
import { WalletComponent } from './navigation/wallet/wallet.component';
import { StatisticsComponent } from './navigation/statistics/statistics.component';
import { PlansComponent } from './navigation/plans/plans.component';
import { CustomersComponent } from './navigation/customers/customers.component';
import { MessagesComponent } from './navigation/messages/messages.component';
import { SettingsComponent } from './navigation/settings/settings.component';
import { AssistantComponent } from './navigation/assistant/assistant.component';
import { AssistantCardComponent } from './navigation/assistant/assistant-card/assistant-card.component';
import { AssistantCommunicateComponent } from './navigation/assistant/assistant-communicate/assistant-communicate.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PlanningComponent,
    WalletComponent,
    StatisticsComponent,
    PlansComponent,
    CustomersComponent,
    MessagesComponent,
    SettingsComponent,
    AssistantComponent,
    AssistantCardComponent,
    AssistantCommunicateComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
