import { CheckableMenuChoice } from '@interfaces/checkable-menu-choice.interface';
import { Component, Input } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { ActionMenuChoicesExecutorService } from '../../../action-menu-choices-executor.service';
import { ClickExecuteFunctionContextDirective }
	from '@abstract-directives/click-execute-function-context.abstract.directive';


@Component({
	selector: 'executable-menu-choice-context',
	template: `<executable-menu-choice [context]="this" [data]="choice"></executable-menu-choice>`
})
export class ExecutableMenuChoiceContextComponent extends ClickExecuteFunctionContextDirective {

	@Input() choice: MenuChoice | CheckableMenuChoice;


	constructor(private __menuChoiceExecutor: ActionMenuChoicesExecutorService) {
		super();
	}


	protected async _func(choice: MenuChoice) {
		await this.__menuChoiceExecutor.execute(choice);
	}

}
