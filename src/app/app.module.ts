// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { routes } from './app.routes';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ContactPartnerRegisterComponent } from "./contact-partner-register/contact-partner-register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutesModule } from "./app.routes";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import { ChannelPartnerComponent } from "./channel-partner/channel-partner.component";
import { AssignLeadsComponent } from "./assign-leads/assign-leads.component";
import { AddNewCustomerComponent } from "./add-new-customer/add-new-customer.component";
import { AddNewLeadsComponent } from "./add-new-leads/add-new-leads.component";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAssign } from "./entry-components/assign-dialog-component";
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from "@angular/material/sort";
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes),
//     provideAnimations()]
// };


@NgModule({
  declarations: [
    LoginComponent,
    ContactPartnerRegisterComponent,
    DashboardComponent,
    AppComponent,
    ChannelPartnerComponent,
    AssignLeadsComponent,
    AddNewCustomerComponent,
    AddNewLeadsComponent,
    DialogAssign
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutesModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}