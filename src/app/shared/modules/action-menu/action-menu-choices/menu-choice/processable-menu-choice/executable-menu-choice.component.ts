import { CheckableMenuChoice } from './checkable-menu-choice.interface';
import { Component, Input } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceExecutorService } from '../../../menu-choice-executor.service';
import { RemoveParentLabelsForDisplayService as removeParentLabelsForDisplay }
	from '../remove-parent-labels-for-display.service';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';


@Component({
	selector: 'executable-menu-choice',
	templateUrl: './executable-menu-choice.component.html',
	styles: [`checkmark {position: relative; top: 5px; left: 5px;}`]
})
export class ExecutableMenuChoiceComponent extends ClickExecuteFunctionContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;


	get label(): string {
		return removeParentLabelsForDisplay.go(this.data.label);
	}


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data['checked'])) {
			return this.data.data['checked'];
		}
		else return false;
	}


	constructor(protected _menuChoiceExecutor: MenuChoiceExecutorService) {
		super();
	}


	protected async _func(choice: MenuChoice) {
		await this._menuChoiceExecutor.execute(choice);
	}

}
