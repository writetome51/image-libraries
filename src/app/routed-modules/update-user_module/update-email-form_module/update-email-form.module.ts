import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { UpdateEmailFormComponent } from './update-email-form.component';
import { UpdateEmailFormInputsComponent } from './update-email-form-inputs.component';


@NgModule({
	declarations: [
		UpdateEmailFormComponent,
		UpdateEmailFormInputsComponent,
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule,
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule
	],
	exports: [UpdateEmailFormComponent]
})
export class UpdateEmailFormModule {}
