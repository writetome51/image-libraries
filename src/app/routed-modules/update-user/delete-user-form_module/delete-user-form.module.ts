import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearFormOnInitModule } from '@app/shared/modules/clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@app/shared/modules/clear-alert-on-destroy_module/clear-alert-on-destroy.module';
import { DeleteUserFormComponent } from './delete-user-form.component';
import { DeleteUserFormInputsComponent } from './delete-user-form-inputs.component';
import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';
import { HTMLImageModule } from '@app/shared/modules/html-image_module/html-image.module';
import { SubmitFormButtonModule } from '@app/shared/modules/submit-form-button_module/submit-form-button.module';


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
		ClearAlertOnDestroyModule
	],
	exports: [DeleteUserFormComponent]
})
export class DeleteUserFormModule {}
