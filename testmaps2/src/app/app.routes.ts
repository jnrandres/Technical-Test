import { RouterModule, Routes } from "@angular/router";
import { CreateRecordComponent } from './create-record/create-record.component';
import { AllRecordsComponent } from './all-records/all-records.component';

const app_routes: Routes = [
    {path: 'createdRecord', component: CreateRecordComponent},
    {path: 'allRecords', component: AllRecordsComponent},
    {path: '**', pathMatch: 'full', redirectTo:'allRecords'},
]

export const app_routing = RouterModule.forRoot(app_routes);