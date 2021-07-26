import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeleteUserFormComponent } from './delete-user-form.component';
import { DeleteUserFormInputsComponent } from './delete-user-form-inputs.component';
import { HTMLImageModule } from '@html-image_module/html-image.module';
import { NgModule } from '@angular/core';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { DeleteUserFormInstructionsComponent } from './delete-user-form-instructions.component';


@NgModule({
	declarations: [
		DeleteUserFormComponent,
		DeleteUserFormInstructionsComponent,
		DeleteUserFormInputsComponent,
	],
	imports: [
		AppValidatingFormInputsModule,
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule,
		CommonModule,
		HTMLImageModule,
		SubmitFormButtonModule
	],
	exports: [DeleteUserFormComponent]
})
export class DeleteUserFormModule {}
