import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SubmitFormButtonModule } from '@app/shared/modules/submit-form-button_module/submit-form-button.module';
import { SearchFormInputComponent } from '@search/search-form-input.component';
import { AppValidatingFormInputsModule }
	from '@app/shared/modules/app-validating-form-inputs_module/app-validating-form-inputs.module';


@NgModule({
	declarations: [SearchComponent, SearchFormInputComponent],
	imports: [
		CommonModule,
		AppValidatingFormInputsModule,
		SubmitFormButtonModule
	],
	exports: [SearchComponent]
})
export class SearchModule {
}
