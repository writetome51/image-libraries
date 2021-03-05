import { AlertService as alert } from '@services/alert.service';
import { Injectable } from '@angular/core';
import { ProcessGetLibrariesService }
	from '@process/process-get-libraries_service/process-get-libraries.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class RunTasksAfterCreatingNewLibraryService implements IDoThis {

	constructor(private __getLibrariesProcessor: ProcessGetLibrariesService) {
	}


	async go() {
		alert.setSuccess('Library created');
		newLibrary.beingCreated = false;

		await this.__refreshLoadedLibraryNames();
	}


	private async __refreshLoadedLibraryNames() {
		await this.__getLibrariesProcessor.go();
	}

}
