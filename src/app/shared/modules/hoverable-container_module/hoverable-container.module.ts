import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverableContainerComponent } from './hoverable-container.component';


@NgModule({
	declarations: [HoverableContainerComponent],
	imports: [CommonModule],
	exports: [HoverableContainerComponent]
})
export class HoverableContainerModule {
}
