import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserButtonComponent } from './new-user-form/create-user-button.component';
import { FormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserFormInputsComponent } from './new-user-form/new-user-form-inputs.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { RouterModule } from '@angular/router';
import { DeAuthenticatedGuard } from '../guards/de-authenticated.guard';
import { ProcessingButtonModule } from '../processing-button/processing-button.module';


@NgModule({
	declarations: [
		CreateUserButtonComponent,
		NewUserComponent,
		NewUserFormComponent,
		NewUserFormInputsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ValidatingInputsModule,
		ProcessingButtonModule,
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
