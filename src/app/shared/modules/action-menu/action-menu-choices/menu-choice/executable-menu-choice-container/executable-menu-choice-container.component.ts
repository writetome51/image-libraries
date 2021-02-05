import { CheckableMenuChoice } from './checkable-menu-choice.interface';
import { Component, Input } from '@angular/core';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { MenuChoiceExecutorService } from '../../../menu-choice-executor.service';
import { ClickExecuteFunctionContainerComponent }
	from '@abstract-components/click-execute-function-container.component';


@Component({
	selector: 'executable-menu-choice-container',
	template: `
		<executable-menu-choice [container]="this" [data]="choice"></executable-menu-choice>
	`
})
export class ExecutableMenuChoiceContainerComponent extends ClickExecuteFunctionContainerComponent {

	@Input() choice: MenuChoice | CheckableMenuChoice;


	constructor(private __menuChoiceExecutor: MenuChoiceExecutorService) {
		super();
	}


	protected async _func(choice: MenuChoice) {
		await this.__menuChoiceExecutor.execute(choice);
	}

}
