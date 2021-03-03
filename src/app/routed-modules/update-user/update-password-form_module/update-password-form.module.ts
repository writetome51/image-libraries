import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordFormComponent } from './update-password-form.component';
import { UpdatePasswordFormInputsComponent } from './update-password-form-inputs.component';
import { SubmitFormButtonModule } from '@app/shared/modules/submit-form-button_module/submit-form-button.module';
import { ClearFormOnInitModule } from '@app/shared/modules/clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@app/shared/modules/clear-alert-on-destroy_module/clear-alert-on-destroy.module';
import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';
import { RouterModule } from '@angular/router';


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
		AppValidatingFormInputsModule,
		/*
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: UpdatePasswordFormComponent
			}
		])
		 */
	],
	exports: [UpdatePasswordFormComponent]
})
export class UpdatePasswordFormModule {
}
