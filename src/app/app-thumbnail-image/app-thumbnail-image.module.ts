import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppThumbnailImageComponent } from './app-thumbnail-image.component';
import { DeleteItemButtonComponent } from './delete-item-button/delete-item-button.component';


@NgModule({
	declarations: [AppThumbnailImageComponent, DeleteItemButtonComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [AppThumbnailImageComponent]
})
export class AppThumbnailImageModule {
}
