import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessOrErrorMessageComponent } from './success-or-error-message.component';


@NgModule({
	declarations: [SuccessOrErrorMessageComponent],
	imports: [CommonModule],
	exports: [SuccessOrErrorMessageComponent]
})
export class SuccessOrErrorMessageModule {
}
