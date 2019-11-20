import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { UpdateUserEmailFormComponent }
	from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';


const routes: Routes = [

	{	// This makes 'email' the default route when this module loads.
		path: '',
		pathMatch: 'full',
		redirectTo: 'email'
	},

	{
		path: '',
		component: UpdateUserComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: UpdateUserEmailFormComponent.path,
				component: UpdateUserEmailFormComponent
			},

			{
				path: UpdateUserPasswordFormComponent.path,
				component: UpdateUserPasswordFormComponent
			},

			{
				path: DeleteUserFormComponent.path,
				component: DeleteUserFormComponent
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
