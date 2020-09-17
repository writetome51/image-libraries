import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserChoiceData as choice } from './update-user-choice.data';
import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [

	{	// This makes 'email' the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: choice.email.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: choice.email.path,
				component: choice.email.component
			},

			{
				path: choice.password.path,
				component: choice.password.component
			},

			{
				path: choice.delete.path,
				component: choice.delete.component
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
