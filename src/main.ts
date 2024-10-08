/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsComponent } from './app/forms/forms.component';
import { DynamicFormArrayComponent } from './app/forms/dynamic-form-array/dynamic-form-array.component';
import { FormArraysComponent } from './app/forms/form-arrays/form-arrays.component';
import { FormControlsComponent } from './app/forms/form-controls/form-controls.component';
import { RunRoutingComponent } from './app/routing/run-routing/run-routing.component';
import { HttpClientComponent } from './app/http-client/http-client.component';
import { LifecycleHooksComponent } from './app/lifecycle-hooks/lifecycle-hooks.component';
import { RunLfhComponentComponent } from './app/run-lfh-component/run-lfh-component.component';
import { TutorialsListComponent } from './app/frontend-for-tutorial/tutorials-list/tutorials-list.component';
import { RunProjectComponent } from './app/frontend-for-tutorial/run-project/run-project.component';
import { EmployeeListComponent } from './app/frontend-for-emp/employee-list/employee-list.component';
import { AddEmployeeComponent } from './app/frontend-for-emp/add-employee/add-employee.component';
import { RunEmpProjectComponent } from './app/frontend-for-emp/run-emp-project/run-emp-project.component';
import { AdminComponent } from './app/frontend-for-emp/admin/admin.component';
import { HomeComponent } from './app/frontend-for-emp/home/home.component';
import { TestFormComponent } from './app/test-form/test-form.component';
import { EcommerceHomeComponent } from './app/ecommerce-home/ecommerce-home.component';
import { EcommerceReviewComponent } from './app/ecommerce-review/ecommerce-review.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { AdminPageComponent } from './app/admin-page/admin-page.component';
import { AdminProductsComponent } from './app/admin-products/admin-products.component';
import { AdminOrdersComponent } from './app/admin-orders/admin-orders.component';
import { AdminUsersComponent } from './app/admin-users/admin-users.component';
import { FindBikesComponent } from './app/find-bikes/find-bikes.component';
import { ViewBikeComponent } from './app/view-bike/view-bike.component';

bootstrapApplication(FindBikesComponent, appConfig)
  .catch((err) => console.error(err));
