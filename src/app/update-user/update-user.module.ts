import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { DeleteUserButtonComponent }
	from './delete-user-form/delete-user-button/delete-user-button.component';
import { DeleteUserFormInputsComponent } from './delete-user-form/delete-user-form-inputs.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserEmailFormInputsComponent }
	from './update-user-email-form/update-user-email-form-inputs.component';
import { UpdateUserEmailFormComponent }
	from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { UpdateUserPasswordFormInputsComponent }
	from './update-user-password-form/update-user-password-form-inputs.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateEmailSaveButtonComponent }
	from './update-user-email-form/update-email-save-button/update-email-save-button.component';
import { UpdatePasswordSaveButtonComponent }
	from './update-user-password-form/update-password-save-button/update-password-save-button.component';


@NgModule({
	declarations: [
		DeleteUserFormComponent,
		DeleteUserFormInputsComponent,
		DeleteUserButtonComponent,
		UpdateUserComponent,
		UpdateUserEmailFormComponent,
		UpdateUserEmailFormInputsComponent,
		UpdateEmailSaveButtonComponent,
		UpdateUserPasswordFormComponent,
		UpdateUserPasswordFormInputsComponent,
		UpdatePasswordSaveButtonComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
		UpdateUserRoutingModule
	]
})
export class UpdateUserModule {
}
