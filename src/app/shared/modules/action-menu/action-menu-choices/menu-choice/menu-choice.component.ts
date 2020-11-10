import { Component, Input } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoice } from '@interfaces/menu-choice';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { ChoicesProcessorService } from '../../choices-processor.service';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;
	@Input() choicesProcessor: ChoicesProcessorService;

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
