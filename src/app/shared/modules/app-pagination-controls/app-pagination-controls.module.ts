import { AppPaginationControlsComponent }
	from './app-pagination-controls_component/app-pagination-controls.component';
import { AppValidatingFormInputsModule }
	from '@app-validating-form-inputs/app-validating-form-inputs.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JumpToPageComponent } from './jump-to-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


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
