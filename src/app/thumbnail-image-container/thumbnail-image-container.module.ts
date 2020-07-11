import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThumbnailImageContainerComponent } from './thumbnail-image-container.component';
import { DeleteItemButtonComponent } from './delete-item-button/delete-item-button.component';


@NgModule({
	declarations: [ThumbnailImageContainerComponent, DeleteItemButtonComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [ThumbnailImageContainerComponent]
})
export class ThumbnailImageContainerModule {
}
