import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button.component';
import { LoginFormComponent } from './login-form.component';
import { LoginFormInputsComponent } from './login-form-inputs.component';
import { LoginFormInputsService } from './login-form-inputs.service';
import { LoginProcessorService } from './login-processor.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [LoginFormComponent, LoginFormInputsComponent, LoginButtonComponent],
	imports: [
		CommonModule,
		RouterModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule
	],
	providers: [LoginFormInputsService, LoginProcessorService],
	exports: [LoginFormComponent]
})
export class LoginFormModule {
}
