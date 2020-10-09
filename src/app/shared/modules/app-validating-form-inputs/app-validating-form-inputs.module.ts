import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppValidatingFormInputsComponent } from './app-validating-form-inputs.component';
import { AppValidatingFormInputComponent } from './app-validating-form-input.component';


@NgModule({
	declarations: [AppValidatingFormInputsComponent, AppValidatingFormInputComponent],
	imports: [CommonModule, FormsModule],
	exports: [AppValidatingFormInputsComponent, AppValidatingFormInputComponent]
})
export class AppValidatingFormInputsModule {
}
