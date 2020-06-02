import { Injectable } from '@angular/core';
import { LogoutResultProcessorService } from './logout-result-processor.service';
import { AlertService as alert } from '../../../alert.service';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultProcessorService implements DirectProcessor {

	constructor(
		private __logoutResultProcessor: LogoutResultProcessorService
	) {
	}


	async process(result) {

		alert.success = 'Library deleted';
	}

}
