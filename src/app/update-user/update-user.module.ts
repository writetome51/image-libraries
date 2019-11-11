import { AlertModule } from '../alert/alert.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user/delete-user-form/delete-user-form.component';
import { EmailPasswordFormInputsModule }
	from '../email-password-form-inputs/email-password-form-inputs.module';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailFormInputsComponent }
	from './update-user-email/update-user-email-form/update-user-email-form-inputs.component';
import { UpdateUserEmailFormComponent }
	from './update-user-email/update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password/update-user-password-form/update-user-password-form.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { UpdateUserPasswordFormInputsComponent }
	from './update-user-password/update-user-password-form/update-user-password-form-inputs.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailFormComponent,
		UpdateUserEmailFormInputsComponent,
		UpdateUserPasswordFormComponent,
		UpdateUserPasswordFormInputsComponent,
		DeleteUserFormComponent,
		DeleteUserComponent,
		UpdateUserEmailComponent,
		UpdateUserPasswordComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AlertModule,
		LoadingSpinnerModule,
		ValidatingInputsModule,
		EmailPasswordFormInputsModule,
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

		])
	]
})
export class UpdateUserModule {
}
