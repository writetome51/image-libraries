import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserChoicesData as choice } from './update-user-choices.data';
import { UpdateUserComponent } from './update-user.component';


const routes: Routes = [

	{	// This makes 'email' the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: choice.email.link.path
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: choice.email.link.path,
				component: choice.email.link.component
			},

			{
				path: choice.password.link.path,
				component: choice.password.link.component
			},

			{
				path: choice.delete.link.path,
				component: choice.delete.link.component
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
