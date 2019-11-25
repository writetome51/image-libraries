import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { DeleteUserFormInputsComponent }
	from './delete-user-form/delete-user-form-inputs.component';


@NgModule({
	declarations: [
		UpdateUserComponent,
		UpdateUserEmailFormComponent,
		UpdateUserEmailFormInputsComponent,
		UpdateUserPasswordFormComponent,
		UpdateUserPasswordFormInputsComponent,
		DeleteUserFormComponent,
		DeleteUserFormInputsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ValidatingInputsModule,
		UpdateUserRoutingModule
	]
})
export class UpdateUserModule {
}
