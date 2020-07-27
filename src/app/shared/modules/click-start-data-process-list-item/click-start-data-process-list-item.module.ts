import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickStartDataProcessListItemComponent }
	from './click-start-data-process-list-item.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [ClickStartDataProcessListItemComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [ClickStartDataProcessListItemComponent]
})
export class ClickStartDataProcessListItemModule {
}
