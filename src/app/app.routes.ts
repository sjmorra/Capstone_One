import { Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
{path: '', redirectTo: 'clients', pathMatch: 'full'},
{path: 'clients', component: ClientsComponent},
{path: 'meetings/', component: MeetingsComponent},
{path: 'meetings/:clientName', component: MeetingsComponent},
];
