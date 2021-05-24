import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { LoggedInNavigatorServicesModule } from '../logged-in-navigator-services.module';
import { ProcessGetLibrariesService }
	from '@process/process-get-libraries_service/process-get-libraries.service';
import { UserLibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class AssureLibrariesStoredLocallyService implements IDoThis {

	constructor(
		private __processGetLibraries: ProcessGetLibrariesService,
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {}


	async go() {
		if (this.__librariesStoredLocally()) return;

		else await executeFunctionRequiringWaiting.go(
			() => this.__processGetLibraries.go(), executionStatus
		);
	}


	private __librariesStoredLocally(): boolean {
		let libsMap: { [libName: string]: LibraryRecord } = this.__librariesInBrowser.get();
		if (hasValue(libsMap)) {
			libraryNames.data = Object.keys(libsMap);
			return true;
		}
		else return false;
	}

}
