import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { SuccessOrErrorMessageModule } from '../success-or-error-message/success-or-error-message.module';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailComponent,
		UpdateUserPasswordComponent,
		DeleteUserComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		SuccessOrErrorMessageModule,
		RouterModule.forChild([

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

		]),
	]
})
export class UpdateUserModule {
}
