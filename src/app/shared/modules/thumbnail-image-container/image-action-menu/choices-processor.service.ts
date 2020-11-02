import { Injectable } from '@angular/core';
import { DirectProcessor } from '@interfaces/direct-processor';


@Injectable()
export class ChoicesProcessorService implements DirectProcessor {

	private __data = {};


	constructor(
		// Have each choice processor be injected here

	) {
	}


	process() {
	}

}
