import { ClearFormOnInitAndAlertOnDestroyModule }
	from 'clear-form-on-init/clear-form-on-init-and-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@app/shared/guards/de-authenticated.guard';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { LoginComponent } from './login.component';
import { LoginFormModule } from '@app/login/login-form/login-form.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteExplanationComponent } from './site-explanation.component';


@NgModule({
	declarations: [LoginComponent, SiteExplanationComponent],
	imports: [
		CommonModule,
		ClearFormOnInitAndAlertOnDestroyModule,
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
