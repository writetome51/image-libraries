import { ActionMenuChoicesData as menuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { MenuChoice } from '@interfaces/menu-choice.interface';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { getByTest } from '@writetome51/array-get-by-test';
import { Gettable } from '@interfaces/gettable.interface';


export class __GlobalActionMenuChoicesService {

	static get(): MenuChoice[] {
		return menuChoices.global;
	}


	static addChoice(choice: MenuChoice) {
		if (this.__choicesIncludes(choice.label)) return;
		prepend(choice, menuChoices.global);
	}


	static removeChoices(choiceLabels: string[]) {
		removeByTest(
			(choice: MenuChoice) => (choiceLabels.includes(choice.label)),
			menuChoices.global
		);
	}


	private static __choicesIncludes(label: string): boolean {
		return getByTest(
			(choice: MenuChoice) => choice.label === label,
			menuChoices.global
		).length > 0;
	}

}

export const GlobalActionMenuChoicesService:
	Gettable<MenuChoice[]> & __GlobalActionMenuChoicesService =
	__GlobalActionMenuChoicesService;
