import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlueColoredDirective } from "./blue-colored.directive";
import { HeaderComponent } from "./header/header.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { UserService } from "./user-service.service";
import { AuthguardGuard } from "./authguard.guard";

const appRoutes: Routes = [
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "dashboard",
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BlueColoredDirective,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
