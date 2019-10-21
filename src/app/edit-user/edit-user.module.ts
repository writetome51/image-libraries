import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user.component';
import { EditUserEmailComponent } from './edit-user-email/edit-user-email.component';
import { EditUserPasswordComponent } from './edit-user-password/edit-user-password.component';
import { AlertModule } from '../alert/alert.module';


@NgModule({
	declarations: [
		EditUserComponent,
		EditUserEmailComponent,
		EditUserPasswordComponent,
		DeleteUserComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AlertModule,
		RouterModule.forChild([

			{	// This makes 'email' the default route when this module loads.
				path: '',
				pathMatch: 'full',
				redirectTo: 'email'
			},

			{
				path: '',
				component: EditUserComponent,
				canActivate: [AuthenticatedGuard],
				children: [
					{
						path: 'email',
						component: EditUserEmailComponent
					},

					{
						path: 'password',
						component: EditUserPasswordComponent
					},

					{
						path: 'delete-account',
						component: DeleteUserComponent
					},
				]
			},

		])
	]
})
export class EditUserModule {
}
