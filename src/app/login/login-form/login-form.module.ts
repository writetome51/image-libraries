import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { LoginFormInputsComponent } from './login-form-inputs.component';
import { LoginFormInputsService } from './login-form-inputs.service';
import { LoginProcessorService } from './login-processor.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartFunctionExecutionButtonModule }
	from 'execute-function-button/execute-function-button.module';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [LoginFormComponent, LoginFormInputsComponent],
	imports: [
		CommonModule,
		RouterModule,
		AppValidatingFormInputsModule,
		StartFunctionExecutionButtonModule,
		SubmitFormButtonModule
	],
	providers: [LoginFormInputsService, LoginProcessorService],
	exports: [LoginFormComponent]
})
export class LoginFormModule {
}
