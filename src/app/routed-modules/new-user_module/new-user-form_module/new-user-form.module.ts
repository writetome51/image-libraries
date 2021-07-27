import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form.component';
import { NewUserFormInputsComponent }
	from './new-user-form-inputs.component';
import { NewUserFormServicesModule } from './new-user-form-services.module';
import { NgModule } from '@angular/core';
import { ResetToDefaultOnInitModule }
	from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { SubmitNewUserFormButtonComponent }
	from './submit-new-user-form-button_component/submit-new-user-form-button.component';


@NgModule({
	declarations: [
		NewUserFormComponent,
		NewUserFormInputsComponent,
		SubmitNewUserFormButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		ResetToDefaultOnInitModule,
		SubmitFormButtonModule,
		NewUserFormServicesModule,
	],
	exports: [NewUserFormComponent]
})
export class NewUserFormModule {}
