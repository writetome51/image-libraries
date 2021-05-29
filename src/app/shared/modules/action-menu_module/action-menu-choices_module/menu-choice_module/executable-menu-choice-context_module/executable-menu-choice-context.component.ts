import { CheckableMenuChoice } from '../../../checkable-menu-choice.interface';
import { Component, Input } from '@angular/core';
import { MenuChoice } from '../../../menu-choice.interface';
import { ActionMenuChoiceExecutorService } from '../../../action-menu-choice-executor.service';
import { ClickExecuteFunctionContextDirective }
	from '@app/shared/abstract-directives/click-execute-function-context.abstract.directive';


@Component({
	selector: 'executable-menu-choice-context',
	template: `<executable-menu-choice [context]="this" [data]="choice"></executable-menu-choice>`
})
export class ExecutableMenuChoiceContextComponent extends ClickExecuteFunctionContextDirective {

	@Input() choice: MenuChoice | CheckableMenuChoice;


	constructor(private __menuChoiceExecutor: ActionMenuChoiceExecutorService) {
		super();
	}


	protected async _func(choice: MenuChoice) {
		await this.__menuChoiceExecutor.execute(choice);
	}

}
