import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPasswordFormInputsComponent } from './email-password-form-inputs.component';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';


@NgModule({
	declarations: [EmailPasswordFormInputsComponent],
	imports: [
		CommonModule,
		ValidatingInputsModule
	],
	exports: [EmailPasswordFormInputsComponent]
})
export class EmailPasswordFormInputsModule {
}
