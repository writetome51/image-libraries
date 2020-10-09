import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { Injectable } from '@angular/core';
import { LocalLibrariesService } from '@services/local-storage-data/local-libraries.service';
import { noValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '@services/perform-data-process-requiring-waiting.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { DBLibrary } from '@interfaces/db-library';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class MakeSureLibrariesAreLoadedService implements IDoThis {

	constructor(
		private __getLibrariesProcessor: GetLibrariesProcessorService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	async go() {
		if (noValue(this.__localLibraries.get())) {
			await performDataProcessRequiringWaiting.go(this.__getLibrariesProcessor, processingStatus);
		}
		else {
			let libs: DBLibrary[] = (this.__localLibraries.get());
			libraryNames.data = libs.map((library: DBLibrary) => library.name);
		}
	}

}
