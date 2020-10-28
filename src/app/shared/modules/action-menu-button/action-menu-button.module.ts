import { CommonModule } from '@angular/common';
import { ActionMenuButtonComponent } from './action-menu-button.component';
import { NgModule } from '@angular/core';
import { SprocketWheelComponent } from './sprocket-wheel.component';


@NgModule({
	declarations: [ActionMenuButtonComponent, SprocketWheelComponent],
	imports: [CommonModule],
	exports: [ActionMenuButtonComponent]
})
export class ActionMenuButtonModule {
}
