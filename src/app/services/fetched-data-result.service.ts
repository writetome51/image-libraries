import { Injectable } from '@angular/core';
import { getObjectFromJSON } from 'get-object-from-json';


@Injectable({
	providedIn: 'root'
})
export class FetchedDataResultService {

	constructor() {
	}


	interpret(result) {
		if (typeof result === 'string') {
			result = getObjectFromJSON(result);
		}
		if (result.error || result.$undefined) {

		}
	}
}
