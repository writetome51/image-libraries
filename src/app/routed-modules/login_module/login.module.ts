import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { HoverableContainerModule } from '@hoverable-container_module/hoverable-container.module';
import { LoginComponent } from './login.component';
import { LoginFormModule } from './login-form_module/login-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteExplanationComponent } from './site-explanation.component';


@NgModule({
	declarations: [LoginComponent, SiteExplanationComponent],
	imports: [
		CommonModule,
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule,
		HoverableContainerModule,
		LoginFormModule,
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
export class LoginModule {}
