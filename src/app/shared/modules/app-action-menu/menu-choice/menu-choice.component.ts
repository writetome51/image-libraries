import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { Component, Input } from '@angular/core';
import { isString } from '@writetome51/is-string-not-string';
import { MenuChoiceData } from '@interfaces/menu-choice-data';
import { MenuChoiceProcessorService } from './menu-choice-processor.service';
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
	hovered = false;


	get choices(): AppActionMenuChoice[] {
		return this.data.choice['choices'];
	}


	constructor(private __menuChoiceProcessor: MenuChoiceProcessorService) {
		super(__menuChoiceProcessor);
	}


	getLabel(): string {
		return (isString(this.data.choice) ? this.data.choice : this.data.choice['label']);
	}


	isSubmenu(): boolean {
		return (this.data.choice['label'] && this.data.choice['choices']);
	}


	toggleClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = !(this.clicked);
	}


	hover(): void {
		this.hovered = true;
	}


	unHover_and_unClick(): void {
		this.hovered = false;
		this.clicked = false;
	}


}
