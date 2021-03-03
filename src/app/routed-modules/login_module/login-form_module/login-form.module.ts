import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';
import { LoginFormComponent } from './login-form.component';
import { LoginFormInputsComponent } from './login-form-inputs.component';
import { LoginFormServicesModule } from './login-form-services.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';


@NgModule({
	declarations: [LoginFormComponent, LoginFormInputsComponent],
	imports: [
		CommonModule,
		RouterModule,
		LoginFormServicesModule,
		AppValidatingFormInputsModule,
		ExecuteFunctionButtonModule,
		SubmitFormButtonModule
	],
	exports: [LoginFormComponent]
})
export class LoginFormModule {
}
