import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagesLoaderComponent } from './images-loader.component';
import { BigLoadingSpinnerModule } from '@big-loading-spinner_module/big-loading-spinner.module';
import { ClearExecutionStatusOnDestroyModule } from '@modules/clear-execution-status-on-destroy_module/clear-execution-status-on-destroy.module';


@NgModule({
	declarations: [ImagesLoaderComponent],
	imports: [CommonModule, BigLoadingSpinnerModule, ClearExecutionStatusOnDestroyModule],
	exports: [ImagesLoaderComponent]
})
export class ImagesLoaderModule {}
