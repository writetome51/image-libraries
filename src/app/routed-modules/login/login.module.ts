import { ClearFormOnInitModule } from '@app/shared/modules/clear-form-on-init_module/clear-form-on-init.module';
import { ClearAlertOnDestroyModule } from '@app/shared/modules/clear-alert-on-destroy_module/clear-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { HoverableContainerModule } from '@app/shared/modules/hoverable-container_module/hoverable-container.module';
import { LoginComponent } from './login.component';
import { LoginFormModule } from '@app/routed-modules/login/login-form_module/login-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteExplanationComponent } from './site-explanation.component';


@NgModule({
	declarations: [LoginComponent, SiteExplanationComponent],
	imports: [
		CommonModule,
		ClearFormOnInitModule,
		ClearAlertOnDestroyModule,
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
export class LoginModule {
}
