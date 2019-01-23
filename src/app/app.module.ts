import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlueColoredDirective } from "./blue-colored.directive";

import { UserService } from "./user-service.service";
import { AuthguardGuard } from "./authguard.guard";
import { ChildComponent } from './child/child.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent, BlueColoredDirective, ChildComponent],
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
