import { ActionMenuContextChoicesExecutorService }
	from '@action-menu_module/action-menu-context-choices-executor.abstract.service';
import { MenuChoicesManager } from '@action-menu_module/menu-choices-manager.interface';


export interface ActionMenuContext {

	choicesExecutor: ActionMenuContextChoicesExecutorService;
	menuChoicesManager: MenuChoicesManager;
	getChoicesArgs: any[];

}
