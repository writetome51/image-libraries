import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { Injectable } from '@angular/core';
import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class RunTasksAfterCreatingNewLibraryService implements IDoThis {

	constructor(private __getLibrariesProcessor: GetLibrariesProcessorService) {
	}


	async go() {
		alert.success = 'Library created';
		newLibrary.beingCreated = false;

		await this.__refreshLoadedLibraryNames();
	}


	private async __refreshLoadedLibraryNames() {
		await this.__getLibrariesProcessor.process();
	}

}
