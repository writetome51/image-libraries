import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


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
				path: 'email',
				component: UpdateUserEmailComponent
			},

			{
				path: 'password',
				component: UpdateUserPasswordComponent
			},

			{
				path: 'delete-account',
				component: DeleteUserComponent
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
