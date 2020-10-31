import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoiceProcessParams } from '@interfaces/menu-choice-process-params';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	constructor(
		// the keys are the choices, the values are the process functions.
		private __choiceProcessors: object
	) {
	}


	async process(params: MenuChoiceProcessParams) {
		let {choice, image} = params;

		await this.__choiceProcessors[choice](image);
	}


}
