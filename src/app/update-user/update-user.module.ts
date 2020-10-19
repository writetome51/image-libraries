import { HTMLImageModule } from '@app/shared/modules/html-image/html-image.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';
import { DeleteUserFormInputsComponent } from './delete-user-form/delete-user-form-inputs.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SaveChangesButtonModule } from '@save-changes-button/save-changes-button.module';
import { UpdateEmailFormComponent }
	from './update-email-form/update-email-form.component';
import { UpdateEmailFormInputsComponent }
	from './update-email-form/update-email-form-inputs.component';
import { UpdateUserComponent } from './update-user.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { UpdateUserPasswordFormInputsComponent }
	from './update-user-password-form/update-user-password-form-inputs.component';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { ClearFormOnInitAndAlertOnDestroyContainerModule } // tslint:disable-next-line:max-line-length
	from '@clear-form-on-init-and-alert-on-destroy-container/clear-form-on-init-and-alert-on-destroy-container.module';


@NgModule({
	declarations: [
		DeleteUserFormComponent,
		DeleteUserFormInputsComponent,
		UpdateUserComponent,
		UpdateEmailFormComponent,
		UpdateEmailFormInputsComponent,
		UpdateUserPasswordFormComponent,
		UpdateUserPasswordFormInputsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ClearFormOnInitAndAlertOnDestroyContainerModule,
		AppValidatingFormInputsModule,
		SaveChangesButtonModule,
		HTMLImageModule,
		UpdateUserRoutingModule
	]
})
export class UpdateUserModule {
}
