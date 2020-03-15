import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginationControlsComponent } from './app-pagination-controls.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidatingInputsModule } from '../validating-inputs/validating-inputs.module';
import { JumpToPageInputComponent }
	from './jump-to-page-input.component';


@NgModule({
	declarations: [AppPaginationControlsComponent, JumpToPageInputComponent],
	imports: [
		CommonModule,
		FormsModule,
		ValidatingInputsModule,
		RouterModule
	],
	exports: [AppPaginationControlsComponent]
})
export class AppPaginationControlsModule {
}
