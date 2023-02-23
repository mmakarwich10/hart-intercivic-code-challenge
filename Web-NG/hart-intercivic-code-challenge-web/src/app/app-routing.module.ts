import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimerPageComponent } from "./views/timer-page.component";

const routes: Routes = [
    { path: '', component: TimerPageComponent },
    { path: 'timer', component: TimerPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }