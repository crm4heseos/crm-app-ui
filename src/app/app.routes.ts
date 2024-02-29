import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactPartnerRegisterComponent } from './contact-partner-register/contact-partner-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ChannelPartnerComponent } from './channel-partner/channel-partner.component';
import { AssignLeadsComponent } from './assign-leads/assign-leads.component';
import { AddNewLeadsComponent } from './add-new-leads/add-new-leads.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: ContactPartnerRegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'viewChannelPartner', component: ChannelPartnerComponent},
    {path: 'assignLeads', component: AssignLeadsComponent},
    {path: 'addNewLeads', component: AddNewLeadsComponent},
    {path: 'addNewCustomer', component: AddNewCustomerComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutesModule{ }
