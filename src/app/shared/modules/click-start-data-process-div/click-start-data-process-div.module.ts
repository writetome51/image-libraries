import { CommonModule } from '@angular/common';
import { ClickExecuteProcessDivComponent } from './click-execute-process-div.component';
import { NgModule } from '@angular/core';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [ClickExecuteProcessDivComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ClickExecuteProcessDivComponent]
})
export class ClickStartDataProcessDivModule {
}
