import { Injectable } from '@angular/core';
import { MenuChoice } from './menu-choice.interface';
import { SpecificChoicesExecutorService } from './specific-choices-executor.abstract.service';


@Injectable()
export class ActionMenuChoiceExecutorService {

	private __specificExecutor: SpecificChoicesExecutorService;


	async execute(choice: MenuChoice): Promise<void> {
		await this.__specificExecutor.execute(choice);
	}


	set(specificExecutor: SpecificChoicesExecutorService) {
		this.__specificExecutor = specificExecutor;
	}

}
