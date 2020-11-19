import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { ClearFormOnInitAndAlertOnDestroyModule }
	from '@clear-form-on-init-and-alert-on-destroy/clear-form-on-init-and-alert-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserFormInputsComponent } from './new-user-form/new-user-form-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [
		NewUserComponent,
		NewUserFormComponent,
		NewUserFormInputsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		ClearFormOnInitAndAlertOnDestroyModule,
		SubmitFormButtonModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: NewUserComponent,
				canActivate: [DeAuthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class NewUserModule {
}
