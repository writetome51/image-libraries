import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { ResetToDefaultOnInitModule } from '@app/shared/modules/reset-to-default-on-init_module/reset-to-default-on-init.module';
import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';
import { NewUserFormComponent } from './new-user-form_component/new-user-form.component';
import { NewUserFormInputsComponent }
	from './new-user-form_component/new-user-form-inputs.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitFormButtonModule } from '@submit-form-button_module/submit-form-button.module';
import { NewUserServicesModule } from './new-user-services.module';


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
		ResetToDefaultOnInitModule,
		ClearAlertsOnDestroyModule,
		SubmitFormButtonModule,
		NewUserServicesModule,
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
export class NewUserModule {}
