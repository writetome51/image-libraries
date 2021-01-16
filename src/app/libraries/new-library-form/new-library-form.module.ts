import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NewLibraryFormComponent } from './new-library-form.component';
import { NewLibraryFormInputComponent } from './new-library-form-input.component';
import { SubmitFormButtonModule } from '@submit-form-button/submit-form-button.module';


@NgModule({
	declarations: [
		NewLibraryFormComponent,
		NewLibraryFormInputComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule
	],
	exports: [NewLibraryFormComponent]
})
export class NewLibraryFormModule {
}
