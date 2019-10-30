import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidatingInputsComponent } from './validating-inputs.component';


@NgModule({
	declarations: [ValidatingInputsComponent],
	imports: [CommonModule, FormsModule],
	exports: [ValidatingInputsComponent]
})
export class ValidatingInputsModule {
}
