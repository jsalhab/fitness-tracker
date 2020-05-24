import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { AuthGurd } from "./auth/auth.gurd";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {
    path: "training",
    loadChildren: () =>
      import("./training/training.module").then(m => m.TrainingModule),
    canLoad: [AuthGurd]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGurd]
})
export class AppRoutingModule {}
