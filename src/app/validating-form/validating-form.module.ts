import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatingFormComponent } from './validating-form.component';
import { ValidatingInputComponent } from './validating-input/validating-input.component';
import { FormsModule } from '@angular/forms';
import { ValidatingInputsComponent } from './validating-inputs/validating-inputs.component';


@NgModule({
	declarations: [ValidatingFormComponent, ValidatingInputComponent, ValidatingInputsComponent],
	imports: [CommonModule, FormsModule],
	exports: [ValidatingFormComponent, ValidatingInputComponent]
})
export class ValidatingFormModule {
}
