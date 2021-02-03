import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordFormComponent } from './update-password-form.component';
import { UpdatePasswordFormInputsComponent } from './update-password-form-inputs.component';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';
import { ClearFormOnInitModule } from '@clear-form-on-init/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@clear-alert-on-destroy/clear-alert-on-destroy.module';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';


@NgModule({
	declarations: [
		UpdatePasswordFormComponent,
		UpdatePasswordFormInputsComponent,
	],
	imports: [
		CommonModule,
		SubmitFormButtonModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
		AppValidatingFormInputsModule
	],
	exports: [UpdatePasswordFormComponent]
})
export class UpdatePasswordFormModule {
}
