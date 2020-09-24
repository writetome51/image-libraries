import { Injectable } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';


@Injectable()
export class MenuChoiceProcessorService implements DirectProcessor {

	process(choice) {
		console.log(choice);
	}


	constructor() {
	}

}
