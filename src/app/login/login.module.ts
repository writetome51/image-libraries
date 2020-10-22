import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { LoginComponent } from './login.component';
import { LoginFormModule } from '@app/login/login-form/login-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteExplanationComponent } from './site-explanation.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';
import { ClearFormOnInitAndAlertOnDestroyModule }
	from '@clear-form-on-init-and-alert-on-destroy/clear-form-on-init-and-alert-on-destroy.module';


@NgModule({
	declarations: [LoginComponent, SiteExplanationComponent],
	imports: [
		CommonModule,
		FormsModule,
		LoginFormModule,
		AppValidatingFormInputsModule,
		ClearFormOnInitAndAlertOnDestroyModule,
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
