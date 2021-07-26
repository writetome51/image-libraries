import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewLibraryBeingCreatedData as newLibraryBeingCreated }
	from '@runtime-state-data/new-library-being-created.data';
import { NewLibraryFormServicesModule } from '../../new-library-form-services.module';
import { ProcessGetLibrariesService }
	from '@process/process-get-libraries_service/process-get-libraries.service';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class RunTasksAfterCreatingNewLibraryService implements IDoThis {

	constructor(private __processGetLibraries: ProcessGetLibrariesService) {}


	async go() {
		alerts.setSuccess('Library created');
		newLibraryBeingCreated.true = false;

		await this.__refreshLoadedLibraryNames();
	}


	private async __refreshLoadedLibraryNames() {
		await this.__processGetLibraries.go();
	}

}
