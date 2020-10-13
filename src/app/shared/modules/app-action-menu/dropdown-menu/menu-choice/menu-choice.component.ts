import { Component, Input } from '@angular/core';
import { isString } from '@writetome51/is-string-not-string';
import { HoverableContainerComponent } from '@hoverable-container/hoverable-container.component';
import { MenuChoiceData } from '@interfaces/menu-choice-data';
import { MenuChoiceProcessorService } from './menu-choice-processor/menu-choice-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: MenuChoiceData;
	clicked = false;


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


	unHover_and_unClick(container: HoverableContainerComponent): void {
		container.unHover();
		this.clicked = false;
	}

}