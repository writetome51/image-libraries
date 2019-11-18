import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ValidatingInputsComponent } from './validating-inputs.component';
import { ValidatingInputComponent } from './validating-input.component';


@NgModule({
	declarations: [ValidatingInputsComponent, ValidatingInputComponent],
	imports: [CommonModule, FormsModule],
	exports: [ValidatingInputsComponent, ValidatingInputComponent]
})
export class ValidatingInputsModule {
}
