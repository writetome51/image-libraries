import { Component, Input } from '@angular/core';
import { StartDataProcessContainerComponent }
	from '@abstract-components/start-data-process-container.component';
import { MenuChoiceProcessorService } from '../../menu-choice-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoice } from '@interfaces/menu-choice';
import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice';
import { ChoicesProcessorService } from '@action-menu/choices-processor.service';


@Component({
	selector: 'processable-menu-choice',
	templateUrl: './processable-menu-choice.component.html',
	styles: [`checkmark {position: absolute; right: 8px; bottom: 10px;}`]
})
export class ProcessableMenuChoiceComponent extends StartDataProcessContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;
	@Input() choicesProcessor: ChoicesProcessorService;


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
