import { ActionMenuChoicesComponent } from './action-menu-choices.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuChoiceModule } from '@action-menu/action-menu-choices/menu-choice/menu-choice.module';


@NgModule({
	declarations: [ActionMenuChoicesComponent],
	imports: [CommonModule, MenuChoiceModule],
	exports: [ActionMenuChoicesComponent]
})
export class ActionMenuChoicesModule {
}
