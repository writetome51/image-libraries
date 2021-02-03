import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmailFormComponent } from './update-email-form.component';
import { UpdateEmailFormInputsComponent } from './update-email-form-inputs.component';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { AppValidatingFormInputsModule } from '@app-validating-form-inputs/app-validating-form-inputs.module';


@NgModule({
	declarations: [
		UpdateEmailFormComponent,
		UpdateEmailFormInputsComponent,
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule
	],
	exports: [UpdateEmailFormComponent]
})
export class UpdateEmailFormModule {}
