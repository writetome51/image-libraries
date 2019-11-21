import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserChoicesMapService as choicesMap } from './update-user-choices-map.service';


const routes: Routes = [

	{	// This makes 'email' the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: choicesMap.email.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: choicesMap.email.path,
				// @ts-ignore
				component: choicesMap.email.component
			},

			{
				path: choicesMap.password.path,
				// @ts-ignore
				component: choicesMap.password.component
			},

			{
				path: choicesMap.delete.path,
				// @ts-ignore
				component: choicesMap.delete.component
			},
		]
	},

];


@NgModule({
	imports: [
		RouterModule.forChild(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class UpdateUserRoutingModule {
}
