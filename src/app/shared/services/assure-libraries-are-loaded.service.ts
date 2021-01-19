import { BackgroundExecutionStatusData as processingStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class AssureLibrariesAreLoadedService implements IDoThis {

	constructor(
		private __getLibrariesProcessor: GetLibrariesProcessorService,
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {
	}


	async go() {
		if (this.__librariesAreStoredLocally()) return;

		else await executeFunctionRequiringWaiting.go(
			() => this.__getLibrariesProcessor.process(), processingStatus
		);
	}


	private __librariesAreStoredLocally(): boolean {
		let libsMap: object = this.__librariesInBrowser.get();
		if (hasValue(libsMap)) {
			libraryNames.data = Object.keys(libsMap);
			return true;
		}
		else return false;
	}

}