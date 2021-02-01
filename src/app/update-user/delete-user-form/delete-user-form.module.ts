import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form.component';
import { DeleteUserFormInputsComponent } from './delete-user-form-inputs.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { HTMLImageModule } from '@html-image/html-image.module';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';


@NgModule({
	declarations: [
		DeleteUserFormComponent,
		DeleteUserFormInputsComponent,
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		HTMLImageModule,
		SubmitFormButtonModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
	],
	exports: [DeleteUserFormComponent]
})
export class DeleteUserFormModule {}
