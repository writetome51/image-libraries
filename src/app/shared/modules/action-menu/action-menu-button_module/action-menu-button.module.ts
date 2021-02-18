import { CommonModule } from '@angular/common';
import { ActionMenuButtonComponent } from './action-menu-button.component';
import { NgModule } from '@angular/core';
import { SprocketWheelComponent } from './sprocket-wheel.component';
import { HTMLImageModule } from '@html-image/html-image.module';


@NgModule({
	declarations: [ActionMenuButtonComponent, SprocketWheelComponent],
	imports: [CommonModule, HTMLImageModule],
	exports: [ActionMenuButtonComponent]
})
export class ActionMenuButtonModule {
}
