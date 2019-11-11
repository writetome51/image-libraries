import { AlertModule } from '../alert/alert.module';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user/delete-user-form/delete-user-form.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EmailPasswordFormInputsModule }
	from '../email-password-form-inputs/email-password-form-inputs.module';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { NgModule } from '@angular/core';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailFormInputsComponent }
	from './update-user-email/update-user-email-form/update-user-email-form-inputs.component';
import { UpdateUserEmailFormComponent }
	from './update-user-email/update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password/update-user-password-form/update-user-password-form.component';
import { UpdateUserPasswordFormInputsComponent }
	from './update-user-password/update-user-password-form/update-user-password-form-inputs.component';
import { UpdateUserEmailComponent } from './update-user-email/update-user-email.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailComponent,
		UpdateUserEmailFormComponent,
		UpdateUserEmailFormInputsComponent,
		UpdateUserPasswordComponent,
		UpdateUserPasswordFormComponent,
		UpdateUserPasswordFormInputsComponent,
		DeleteUserComponent,
		DeleteUserFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AlertModule,
		LoadingSpinnerModule,
		ValidatingInputsModule,
		EmailPasswordFormInputsModule,
		UpdateUserRoutingModule
	]
})
export class UpdateUserModule {
}
