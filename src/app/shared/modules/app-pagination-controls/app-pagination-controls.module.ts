import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppValidatingFormInputsModule } from '../app-validating-form-inputs/app-validating-form-inputs.module';
import { JumpToPageComponent }
	from './jump-to-page.component';


@NgModule({
	declarations: [AppPaginationControlsComponent, JumpToPageComponent],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		RouterModule
	],
	exports: [AppPaginationControlsComponent]
})
export class AppPaginationControlsModule {
}
