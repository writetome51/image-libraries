import { ActionMenuContextChoicesExecutorService }
	from '@services/action-menu-context-choices-executor.abstract.service';
import { MenuChoice } from '@interfaces/menu-choice.interface';


export interface ActionMenuContext {

	choicesExecutor: ActionMenuContextChoicesExecutorService;

	getChoices: (...args) => MenuChoice[];

}
