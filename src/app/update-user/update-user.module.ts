import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { DeleteUserFormModule } from '@app/update-user/delete-user-form/delete-user-form.module';
import { UpdateEmailFormModule } from './update-email-form/update-email-form.module';
import { UpdatePasswordFormModule }
	from './update-password-form/update-password-form.module';
import { UpdateUserChoicesComponent } from './update-user-choices.component';


@NgModule({
	declarations: [UpdateUserComponent, UpdateUserChoicesComponent],
	imports: [
		CommonModule,
		FormsModule,
		DeleteUserFormModule,
		UpdateEmailFormModule,
		UpdatePasswordFormModule,
		UpdateUserRoutingModule
	]
})
export class UpdateUserModule {
}
