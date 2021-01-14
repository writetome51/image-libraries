import { SpecificChoicesExecutorService } from './specific-choices-executor.service';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class MenuChoiceExecutorService {

	private __specificExecutor: SpecificChoicesExecutorService;


	async execute(choice: MenuChoice): Promise<void> {
		await this.__specificExecutor.execute(choice);
	}


	set(specificExecutor: SpecificChoicesExecutorService) {
		this.__specificExecutor = specificExecutor;
	}

}
