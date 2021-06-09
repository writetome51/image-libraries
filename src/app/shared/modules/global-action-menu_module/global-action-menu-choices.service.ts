import { ActionMenuChoicesData as menuChoices }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@action-menu_module/menu-choice.interface';
import { prepend } from '@writetome51/array-append-prepend';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { getByTest } from '@writetome51/array-get-by-test';
import { Gettable } from '@interfaces/gettable.interface';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class GlobalActionMenuChoicesService implements Gettable<MenuChoice[]>{

	constructor() { if (!(menuChoices.global)) menuChoices.global = []; }


	get(): MenuChoice[] {
		return menuChoices.global;
	}


	addChoice(choice: MenuChoice) {
		if (this.__choicesIncludes(choice.label)) return;
		prepend(choice, menuChoices.global);
	}


	removeChoices(choiceLabels: string[]) {
		removeByTest(
			(choice: MenuChoice) => (choiceLabels.includes(choice.label)),
			menuChoices.global
		);
	}


	private __choicesIncludes(label: string): boolean {
		return getByTest(
			(choice: MenuChoice) => choice.label === label,
			menuChoices.global
		).length > 0;
	}

}
