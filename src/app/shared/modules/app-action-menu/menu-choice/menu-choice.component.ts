import { Component, Input } from '@angular/core';
import { Submenu } from '../../../../../interfaces/submenu';
import { isString } from '@writetome51/is-string-not-string';
import { MenuChoiceProcessorService } from './menu-choice-processor.service';
import { StartDataProcessComponent } from '../../../abstract-components/start-data-process.component';


@Component({
	selector: 'menu-choice',
	templateUrl: './menu-choice.component.html',
	styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent extends StartDataProcessComponent {

	@Input() data: string | Submenu;

	clicked = false;
	hovered = false;


	get choices(): Array<string | Submenu> {
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


	handleClick(): void {
		this.clicked = !(this.clicked);
	}


}
