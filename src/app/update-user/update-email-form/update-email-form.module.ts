import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateEmailFormComponent } from './update-email-form.component';
import { UpdateEmailFormInputsComponent } from './update-email-form-inputs.component';


@NgModule({
	declarations: [
		UpdateEmailFormComponent,
		UpdateEmailFormInputsComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [UpdateEmailFormComponent]
})
export class UpdateEmailFormModule {}
