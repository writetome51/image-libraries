import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StartDataProcessListItemComponent } from './start-data-process-list-item.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';
import { CheckmarkComponent } from './checkmark.component';


@NgModule({
	declarations: [StartDataProcessListItemComponent, CheckmarkComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [StartDataProcessListItemComponent]
})
export class StartDataProcessListItemModule {
}
