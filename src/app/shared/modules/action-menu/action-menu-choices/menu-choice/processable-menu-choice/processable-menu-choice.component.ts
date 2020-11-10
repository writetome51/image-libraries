import { Component, Input } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { MenuChoiceProcessorService } from './menu-choice-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoice } from '@interfaces/menu-choice';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { DirectProcessor } from '@interfaces/direct-processor';


@Component({
	selector: 'processable-menu-choice',
	templateUrl: './processable-menu-choice.component.html'
})
export class ProcessableMenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;
	@Input() choicesProcessor: DirectProcessor;


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data['checked'])) {
			return this.data.data['checked'];
		}
		else return false;
	}


	constructor(_menuChoiceProcessor: MenuChoiceProcessorService) {
		super(_menuChoiceProcessor);
	}


}
