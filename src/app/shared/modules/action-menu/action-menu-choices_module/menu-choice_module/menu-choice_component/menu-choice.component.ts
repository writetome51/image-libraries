import { Component } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { AbstractMenuChoiceComponent } from '@action-menu/action-menu-choices_module/menu-choice_module/abstract-menu-choice.component';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends AbstractMenuChoiceComponent {

	clicked = false;


	get hasSubmenu(): boolean {
		return hasValue(this.data['submenu']);
	}


	toggleClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = !(this.clicked);
	}


	unclick(): void {
		this.clicked = false;
	}

}
