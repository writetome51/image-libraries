import { DirectProcessor } from '@interfaces/direct-processor';
import { Injectable } from '@angular/core';
import { MenuChoice } from '@interfaces/menu-choice';
import { ChoicesProcessorService } from '../../../choices-processor.service';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	async process(
		params: { choice: MenuChoice, choicesProcessor: ChoicesProcessorService }
	) {
		let {choicesProcessor, choice} = params;

		await choicesProcessor.process(choice);
	}

}
