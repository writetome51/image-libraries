// import { ActionMenuComponent } from '@action-menu_module/action-menu.component';
import { ActionMenuContextChoicesExecutorService }
	from './action-menu-context-choices-executor.abstract.service';
import { Injectable } from '@angular/core';
import { MenuChoice } from './menu-choice.interface';
import { MenuChoiceLabelHierarchyService as labelHierarchy }
	from './menu-choice-label-hierarchy.service';
import { Settable } from '@interfaces/settable.interface';


@Injectable() // listed in 'providers' of ActionMenuComponent
export class ActionMenuChoicesExecutorService
	implements Settable<ActionMenuContextChoicesExecutorService> {

	private __menuContextChoicesExecutor: ActionMenuContextChoicesExecutorService;


	async execute({label, data}: MenuChoice): Promise<void> {
		if (labelHierarchy.hasParent(label)) label = labelHierarchy.getParent(label);

		await this.__menuContextChoicesExecutor.execute(label, data);
	}


	set(specificExecutor: ActionMenuContextChoicesExecutorService) {
		this.__menuContextChoicesExecutor = specificExecutor;
	}

}
