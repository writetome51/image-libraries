import { Component, Input } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoiceProcessorService } from './menu-choice-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { MenuChoice } from '@interfaces/menu-choice';
import { DirectProcessor } from '@interfaces/direct-processor';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;
	@Input() choicesProcessor: DirectProcessor;

	clicked = false;


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data['checked'])) {
			return this.data.data['checked'];
		}
		else return false;
	}


	get hasSubmenu(): boolean {
		return hasValue(this.data['submenu']);
	}


	constructor(_menuChoiceProcessor: MenuChoiceProcessorService) {
		super(_menuChoiceProcessor);
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
