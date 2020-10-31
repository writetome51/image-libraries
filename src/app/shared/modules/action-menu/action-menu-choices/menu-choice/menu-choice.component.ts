import { ActionMenuChoiceData } from '@interfaces/action-menu-choice-data';
import { Component, Input } from '@angular/core';
import { MenuChoiceProcessorService } from './menu-choice-processor/menu-choice-processor.service';
import { isString } from '@writetome51/is-string-not-string';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: ActionMenuChoiceData;
	clicked = false;
	processed = false;


	constructor(private __menuChoiceProcessor: MenuChoiceProcessorService) {
		super(__menuChoiceProcessor);
	}


	getLabel(): string {
		return (isString(this.data.choice) ? this.data.choice : this.data.choice['label']);
	}


	hasSubmenu(): boolean {
		return (this.data.choice['label'] && this.data.choice['choices']);
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
