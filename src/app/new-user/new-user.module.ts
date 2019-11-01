import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { NewUserComponent } from './new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserFormInputsComponent } from './new-user-form/new-user-form-inputs.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { RouterModule } from '@angular/router';
import { DeauthenticatedGuard } from '../guards/deauthenticated.guard';


@NgModule({
	declarations: [
		NewUserComponent,
		NewUserFormComponent,
		NewUserFormInputsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		AlertModule,
		LoadingSpinnerModule,
		ValidatingInputsModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: NewUserComponent,
				canActivate: [DeauthenticatedGuard]
			},

			{path: '**', redirectTo: ''}
		])
	]
})
export class NewUserModule {
}
