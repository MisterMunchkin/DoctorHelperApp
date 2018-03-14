import { AddPatientComponent } from "./tabs/home/addpatient/addpatient.component";
import { HomeComponent } from "./tabs/home/home.component";

export const appRoutes: any = [
    {path: "", component: HomeComponent},
    {path: "addpatient", component: AddPatientComponent}
];

export const appComponents: any = [
    HomeComponent,
    AddPatientComponent
];