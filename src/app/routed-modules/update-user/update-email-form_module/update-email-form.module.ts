import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmailFormComponent } from './update-email-form.component';
import { UpdateEmailFormInputsComponent } from './update-email-form-inputs.component';
import { SubmitFormButtonModule } from '@app/shared/modules/submit-form-button_module/submit-form-button.module';
import { ClearFormOnInitModule } from '@app/shared/modules/clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@app/shared/modules/clear-alert-on-destroy_module/clear-alert-on-destroy.module';
import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';


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
