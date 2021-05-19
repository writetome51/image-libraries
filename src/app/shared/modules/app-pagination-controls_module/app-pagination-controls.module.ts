import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs_module/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JumpToPageControlsComponent } from './jump-to-page-controls.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreviousAndNextPageLinksComponent } from './previous-and-next-page-links.component';


@NgModule({
	declarations: [
		AppPaginationControlsComponent,
		JumpToPageControlsComponent,
		PreviousAndNextPageLinksComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AppValidatingFormInputsModule,
		RouterModule
	],
	exports: [AppPaginationControlsComponent]
})
export class AppPaginationControlsModule {}
