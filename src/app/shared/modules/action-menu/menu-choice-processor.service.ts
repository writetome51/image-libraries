import { MenuChoicesProcessorService } from './menu-choices-processor.service';
import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	private __choicesProcessor: MenuChoicesProcessorService;


	async process(choice: MenuChoice): Promise<void> {
		await this.__choicesProcessor.process(choice);
	}


	set(choicesProcessor: MenuChoicesProcessorService) {
		this.__choicesProcessor = choicesProcessor;
	}

}
