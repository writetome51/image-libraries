import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { DBLibrary } from '@interfaces/db-library';
import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LocalLibrariesService } from '@services/local-storage-item/local-libraries.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '@services/perform-data-process-requiring-waiting.service';


@Injectable({providedIn: 'root'})

export class MakeSureLibrariesAreLoadedService implements IDoThis {

	constructor(
		private __getLibrariesProcessor: GetLibrariesProcessorService,
		private __localLibraries: LocalLibrariesService
	) {
	}


	async go() {
		let libs: DBLibrary[] = this.__localLibraries.get();
		if (hasValue(libs)) {
			libraryNames.data = libs.map((library: DBLibrary) => library.name);
		}
		else await performDataProcessRequiringWaiting.go(
			this.__getLibrariesProcessor, processingStatus
		);
	}

}
