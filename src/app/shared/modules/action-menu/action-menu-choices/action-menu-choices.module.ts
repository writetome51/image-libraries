import { ActionMenuChoicesComponent } from './action-menu-choices.component';
import { CommonModule } from '@angular/common';
import { MenuChoiceModule } from './menu-choice/menu-choice.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [ActionMenuChoicesComponent],
	imports: [CommonModule, MenuChoiceModule],
	exports: [ActionMenuChoicesComponent]
})
export class ActionMenuChoicesModule {
}
