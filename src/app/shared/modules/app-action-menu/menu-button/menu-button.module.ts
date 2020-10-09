import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { NgModule } from '@angular/core';
import { SprocketWheelComponent } from './sprocket-wheel.component';


@NgModule({
	declarations: [MenuButtonComponent, SprocketWheelComponent],
	imports: [CommonModule],
	exports: [MenuButtonComponent]
})
export class MenuButtonModule {
}
