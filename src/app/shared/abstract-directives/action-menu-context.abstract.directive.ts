import { ActionMenuContext } from '@interfaces/action-menu-context.interface';
import { ActionMenuContextChoicesExecutorService }
	from '@services/action-menu-context-choices-executor.abstract.service';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager.interface';
import { MenuChoice } from '@interfaces/menu-choice.interface';


export abstract class ActionMenuContextDirective implements ActionMenuContext {

	getChoicesArgs = [];


	constructor(
		public menuChoicesManager: MenuChoicesManager,
		public choicesExecutor: ActionMenuContextChoicesExecutorService,
	) {}


	getChoices(): MenuChoice[] {
		return this.menuChoicesManager.getChoices(...this.getChoicesArgs);
	}

}
