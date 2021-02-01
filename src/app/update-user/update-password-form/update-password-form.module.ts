import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordFormComponent } from './update-password-form.component';
import { UpdatePasswordFormInputsComponent } from './update-password-form-inputs.component';


@NgModule({
	declarations: [
		UpdatePasswordFormComponent,
		UpdatePasswordFormInputsComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [UpdatePasswordFormComponent]
})
export class UpdatePasswordFormModule {
}
