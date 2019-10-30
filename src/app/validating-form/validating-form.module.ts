import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatingFormComponent } from './validating-form.component';
import { ValidatingInputComponent } from './validating-input/validating-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [ValidatingFormComponent, ValidatingInputComponent],
	imports: [CommonModule, FormsModule],
	exports: [ValidatingFormComponent, ValidatingInputComponent]
})
export class ValidatingFormModule {
}
