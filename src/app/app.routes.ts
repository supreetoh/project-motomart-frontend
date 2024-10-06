import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

import { AboutComponent } from './pages/general/about/about.component';
import { ExperienceComponent } from './pages/general/about/experience/experience.component';
import { SkillComponent } from './pages/general/about/skill/skill.component';

import { ContactComponent } from './pages/general/contact/contact.component';
import { MailingComponent } from './pages/general/contact/mailing/mailing.component';
import { MappingComponent } from './pages/general/contact/mapping/mapping.component';
import { WebsiteComponent } from './pages/general/contact/website/website.component';
import { TutorialsListComponent } from './frontend-for-tutorial/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './frontend-for-tutorial/tutorials-details/tutorials-details.component';
import { AddTutorialComponent } from './frontend-for-tutorial/add-tutorial/add-tutorial.component';
import { EmployeeListComponent } from './frontend-for-emp/employee-list/employee-list.component';
import { ShowDetailsComponent } from './frontend-for-emp/show-details/show-details.component';
import { AddEmployeeComponent } from './frontend-for-emp/add-employee/add-employee.component';
import { RunEmpProjectComponent } from './frontend-for-emp/run-emp-project/run-emp-project.component';
import { UpdateEmployeeComponent } from './frontend-for-emp/update-employee/update-employee.component';
import { HomeComponent } from './frontend-for-emp/home/home.component';
import { AdminComponent } from './frontend-for-emp/admin/admin.component';
import { RegisterComponent } from './frontend-for-emp/register/register.component';
import { ForgotPasswordComponent } from './frontend-for-emp/forgot-password/forgot-password.component';
import { EcommerceHomeComponent } from './ecommerce-home/ecommerce-home.component';
import { EcommerceReviewComponent } from './ecommerce-review/ecommerce-review.component';
import { AdminPageComponent } from './admin-page/admin-page.component'; // Ensure this exists
import { AdminProductsComponent } from './admin-products/admin-products.component'; // Make sure this component exists
import { AdminOrdersComponent } from './admin-orders/admin-orders.component'; // Make sure this component exists
import { AdminUsersComponent } from './admin-users/admin-users.component'; // Make sure this component exists

export const routes: Routes = [

  { path: 'admin-page', component: AdminPageComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-orders', component: AdminOrdersComponent },
  { path: 'admin-users', component: AdminUsersComponent },
  { path: '', redirectTo: '/admin-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin-page' }















    // {path: '', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
    // {
    //     path: 'about', component: AboutComponent,
    //     children: [
    //         {path: '', component: ExperienceComponent},
    //         {path: 'experience', component: ExperienceComponent},
    //         {path: 'skill', component: SkillComponent},
    //     ],
    // },
    // {
    //     path: 'contact', component: ContactComponent,
    //     children: [
    //         {path: '', component: MailingComponent},
    //         {path: 'mailing', component: MailingComponent},
    //         {path: 'mapping', component: MappingComponent},
    //         {path: 'website', component: WebsiteComponent},
    //     ],
    // },
  // { path: '', redirectTo: 'ecommerce-review', pathMatch: 'full' },
  // { path: 'ecommerce-review', component: EcommerceReviewComponent },
  // { path: 'ecommerce-home', component: EcommerceHomeComponent },
  //   {path: 'home', component: HomeComponent},
  //   {path: 'login', component: AdminComponent},
  //   {path: 'register', component: RegisterComponent},
  //   {path: 'forgot-password', component: ForgotPasswordComponent},
  //   {path: 'run-emp-project', component: RunEmpProjectComponent},
  //   {path: 'add-employees', component: AddEmployeeComponent},
  //   {path: 'show-all-employees', component: EmployeeListComponent},
  //   {path: 'details-of-employee/:id', component: ShowDetailsComponent},
  //   {path: 'updating-by-id/:id', component: UpdateEmployeeComponent},
  //   {path: '**', component: NotFoundComponent}
    // {path: 'tutorials', component: TutorialsListComponent},
    // {path: 'tutorials/:id', component: TutorialsDetailsComponent},
    // {path: 'add', component: AddTutorialComponent}
];


