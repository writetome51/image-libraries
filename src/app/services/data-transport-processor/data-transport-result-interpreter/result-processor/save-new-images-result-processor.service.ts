import { Injectable } from '@angular/core';
import { DirectProcessor } from '../../../../interfaces/direct-processor';
import { AlertService as alert } from '../../../alert.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultProcessorService implements DirectProcessor {

	async process(result) {
		if (result.success) alert.success = 'New images saved';
		else alert.error = 'Unexpected error occurred.  Result: ' + JSON.stringify(result);
	}

}
