import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';
import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { EnterImageURLComponent } from './enter-image-url.component';
import { EnterImageURLServicesModule } from './enter-image-url-services.module';
import { ImageURLFormInputComponent } from './image-url-form-input.component';
import { NgModule } from '@angular/core';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';


@NgModule({
	declarations: [
		EnterImageURLComponent,
		ImageURLFormInputComponent
	],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule,
		SubmitFormButtonModule,
		EnterImageURLServicesModule
	],
	exports: [EnterImageURLComponent]
})
export class EnterImageURLModule {}
