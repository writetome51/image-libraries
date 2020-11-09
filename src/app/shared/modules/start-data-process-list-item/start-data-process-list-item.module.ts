import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StartDataProcessListItemComponent } from './start-data-process-list-item.component';
import { TinyLoadingSpinnerModule } from '@tiny-loading-spinner/tiny-loading-spinner.module';


@NgModule({
	declarations: [StartDataProcessListItemComponent],
	imports: [CommonModule, TinyLoadingSpinnerModule],
	exports: [StartDataProcessListItemComponent]
})
export class StartDataProcessListItemModule {
}
