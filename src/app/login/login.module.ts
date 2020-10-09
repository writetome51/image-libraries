import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginButtonComponent } from './login-form/login-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormInputsComponent } from './login-form/login-form-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [
		LoginComponent,
		LoginButtonComponent,
		LoginFormComponent,
		LoginFormInputsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		StartDataProcessButtonModule,
		RouterModule.forChild([
			{
				path: '', // the logged-out homepage
				pathMatch: 'full',
				component: LoginComponent,
				canActivate: [DeAuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class LoginModule {
}
