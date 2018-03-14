import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AddPatientComponent } from "./home/addpatient/addpatient.component";
import { TabsComponent } from "./tabs.component";

const routes: Routes = [
    { path: "", component: TabsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
