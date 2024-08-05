import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridstackModule, GridstackComponent  } from 'gridstack/dist/angular';
import { NgApexchartsModule } from 'ng-apexcharts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlanningComponent } from './navigation/planning/planning.component';
import { WalletComponent } from './navigation/wallet/wallet.component';
import { PlansComponent } from './navigation/plans/plans.component';
import { CustomersComponent } from './navigation/customers/customers.component';
import { MessagesComponent } from './navigation/messages/messages.component';
import { SettingsComponent } from './navigation/settings/settings.component';
import { AssistantComponent } from './navigation/assistant/assistant.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { BannerComponent } from './common/banner/banner.component';
import { PostsComponent } from './navigation/posts/posts.component';
import { SimpleCardComponent } from './common/widgets/simple-card/simple-card.component';
import { SimpleChartComponent } from './common/widgets/simple-chart/simple-chart.component';
import { GridstackWidgetsComponent } from './common/gridstack-widgets/gridstack-widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PlanningComponent,
    WalletComponent,
    PlansComponent,
    CustomersComponent,
    MessagesComponent,
    SettingsComponent,
    AssistantComponent,
    AuthentificationComponent,
    BannerComponent,
    PostsComponent,
    SimpleCardComponent,
    SimpleChartComponent,
    GridstackWidgetsComponent
  ],
  imports: [
    BrowserModule,
    GridstackModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    GridstackComponent.addComponentToSelectorType([]);
  }

}
