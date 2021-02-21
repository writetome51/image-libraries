import { AppServicesModule } from '../app-services.module';
import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/user-image-total-in-browser-storage.service';
import { GetUserImageTotalProcessorService } // tslint:disable-next-line:max-line-length
	from '@get-image-total-processor/get-user-image-total-processor/get-user-image-total-processor.service';


@Injectable({providedIn: AppServicesModule})
export class AssureUserImageTotalStoredLocallyService implements IDoThis {

	constructor(
		private __userImageTotalInBrowser: UserImageTotalInBrowserStorageService,
		private __getUserImageTotalProcessor: GetUserImageTotalProcessorService
	) {
	}


	async go() {
		if (this.__userImageTotalStoredLocally()) return;

		else await executeFunctionRequiringWaiting.go(
			() => this.__getUserImageTotalProcessor.process(), executionStatus
		);
	}


	private __userImageTotalStoredLocally(): boolean {
		let total = this.__userImageTotalInBrowser.get();
		return hasValue(total);
	}

}
