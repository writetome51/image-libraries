import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';
import { LoginFormComponent } from './login-form_component/login-form.component';
import { LoginFormInputsComponent } from './login-form-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [LoginFormComponent, LoginFormInputsComponent],
	imports: [
		CommonModule,
		RouterModule,
		AppValidatingFormInputsModule,
		ExecuteFunctionButtonModule,
		SubmitFormButtonModule
	],
	exports: [LoginFormComponent]
})
export class LoginFormModule {
}
