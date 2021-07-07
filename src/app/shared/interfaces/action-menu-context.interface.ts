import { ActionMenuContextChoicesExecutorService }
	from '@services/action-menu-context-choices-executor.abstract.service';
import { MenuChoicesManager } from '@interfaces/menu-choices-manager.interface';


export interface ActionMenuContext {

	choicesExecutor: ActionMenuContextChoicesExecutorService;

	menuChoicesManager: MenuChoicesManager;

	getChoicesArgs: any[]; // passed to this.menuChoicesManager.getChoices()

}
