import { AlertModule } from '../alert/alert.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { EmailPasswordFormInputsModule }
	from '../email-password-form-inputs/email-password-form-inputs.module';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailFormInputsComponent }
	from './update-user-email-form/update-user-email-form-inputs.component';
import { UpdateUserEmailFormComponent } from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailFormComponent,
		UpdateUserEmailFormInputsComponent,
		UpdateUserPasswordComponent,
		DeleteUserFormComponent
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
						component: UpdateUserEmailFormComponent
					},

					{
						path: 'password',
						component: UpdateUserPasswordComponent
					},

					{
						path: 'delete-account',
						component: DeleteUserFormComponent
					},
				]
			},

		])
	]
})
export class UpdateUserModule {
}
