import { AlertModule } from '../alert/alert.module';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user.component';
import { EditUserEmailComponent } from './edit-user-email/edit-user-email.component';
import { EditUserPasswordComponent } from './edit-user-password/edit-user-password.component';
import { EmailPasswordFormInputsModule }
	from '../email-password-form-inputs/email-password-form-inputs.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		EditUserComponent,
		EditUserEmailComponent,
		EditUserPasswordComponent,
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
						component: DeleteUserFormComponent
					},
				]
			},

		])
	]
})
export class EditUserModule {
}
