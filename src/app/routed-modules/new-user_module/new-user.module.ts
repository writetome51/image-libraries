import { ClearAlertsOnDestroyModule }
	from '@clear-alerts-on-destroy_module/clear-alerts-on-destroy.module';
import { CommonModule } from '@angular/common';
import { DeAuthenticatedGuard } from '@guards/de-authenticated.guard';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewUserFormModule } from './new-user-form_module/new-user-form.module';


@NgModule({
	declarations: [NewUserComponent],
	imports: [
		CommonModule,
		FormsModule,
		NewUserFormModule,
		ClearAlertsOnDestroyModule,
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
