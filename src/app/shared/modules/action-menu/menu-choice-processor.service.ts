import { ChoicesProcessorService } from './choices-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	private __choicesProcessor: ChoicesProcessorService;


	constructor() {
		console.log('instance!');
	}


	async process(choice: MenuChoice): Promise<void> {
		console.log(this.__choicesProcessor);

		await this.__choicesProcessor.process(choice);
	}


	set(choicesProcessor: ChoicesProcessorService) {
		this.__choicesProcessor = choicesProcessor;
	}

}
