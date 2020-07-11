import { Component, Input } from '@angular/core';
import { Submenu } from '../submenu';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent {

	@Input() data: string | Submenu;

	clicked = false;
	hovered = false;


	get choices(): Array<string | Submenu> {
		return this.data['choices'];
	}


	getLabel(): string {
		return (typeof this.data === 'string' ? this.data : this.data['label']);
	}


	isSubmenu(): boolean {
		return (this.data['label'] && this.data['choices']);
	}


}
