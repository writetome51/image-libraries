import { Injectable } from '@angular/core';
import { AlertService as alert } from '../../../alert.service';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultProcessorService implements DirectProcessor {

	constructor() {
	}


	async process(result) {

		alert.success = 'Library deleted';
	}

}
