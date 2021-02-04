import { CheckableMenuChoice } from './checkable-menu-choice.interface';
import { Component, Input } from '@angular/core';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceExecutorService } from '../../../menu-choice-executor.service';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';


@Component({
	selector: 'executable-menu-choice-container',
	template: `
		<executable-menu-choice [container]="this" [data]="data"></executable-menu-choice>
	`,
	styles: [`checkmark {position: relative;  top: 5px;  left: 5px;}`]
})
export class ExecutableMenuChoiceContainerComponent extends ClickExecuteFunctionContainerComponent {

	@Input() data: MenuChoice | CheckableMenuChoice;


	constructor(protected _menuChoiceExecutor: MenuChoiceExecutorService) {
		super();
	}


	protected async _func(choice: MenuChoice) {
		await this._menuChoiceExecutor.execute(choice);
	}

}
