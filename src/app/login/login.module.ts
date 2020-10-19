import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { ClearFormOnInitAndAlertOnDestroyContainerModule } // tslint:disable-next-line:max-line-length
	from '@clear-form-on-init-and-alert-on-destroy-container/clear-form-on-init-and-alert-on-destroy-container.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
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
		ClearFormOnInitAndAlertOnDestroyContainerModule,
		HoverableContainerModule,
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
