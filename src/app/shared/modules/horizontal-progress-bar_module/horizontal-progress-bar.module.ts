import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalProgressBarComponent } from './horizontal-progress-bar.component';


@NgModule({
	declarations: [HorizontalProgressBarComponent],
	imports: [CommonModule],
	exports: [HorizontalProgressBarComponent]
})
export class HorizontalProgressBarModule {}
