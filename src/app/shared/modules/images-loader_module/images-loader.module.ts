import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagesLoaderComponent } from './images-loader.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';


@NgModule({
	declarations: [ImagesLoaderComponent],
	imports: [CommonModule, BigLoadingSpinnerModule],
	exports: [ImagesLoaderComponent]
})
export class ImagesLoaderModule {}
