import { CommonModule } from '@angular/common';
import { ClickStartDataProcessDivComponent } from './click-start-data-process-div.component';
import { NgModule } from '@angular/core';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [ClickStartDataProcessDivComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ClickStartDataProcessDivComponent]
})
export class ClickStartDataProcessDivModule {
}
