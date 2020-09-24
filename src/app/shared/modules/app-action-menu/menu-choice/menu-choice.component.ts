import { AlertData } from '@runtime-state-data/static-classes/alert.data';
import { AppActionMenuChoice } from '@interfaces/app-action-menu-choice';
import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { isString } from '@writetome51/is-string-not-string';
import { MenuChoiceProcessorService } from './menu-choice-processor.service';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: AppActionMenuChoice;

	clicked = false;
	hovered = false;
	alert = AlertData;
	triangle = {
		src: environment.assets + 'right-pointing-triangle.png',
		width: 7,
		height: 8,
		alt: 'sub-menu'
	};


	get choices(): AppActionMenuChoice[] {
		return this.data['choices'];
	}


	constructor(private __menuChoiceProcessor: MenuChoiceProcessorService) {
		super(__menuChoiceProcessor);
	}


	getLabel(): string {
		return (isString(this.data) ? this.data : this.data['label']);
	}


	isSubmenu(): boolean {
		return (this.data['label'] && this.data['choices']);
	}


	toggleClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = !(this.clicked);
	}


	hover(): void {
		this.hovered = true;
	}


	unHover(): void {
		this.hovered = false;
		this.clicked = false;
	}


}
