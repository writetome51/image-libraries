import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RunTasksAfterLibraryRouteParamsReceivedService }
	from './run-tasks-after-library-route-params-received.service';


@Injectable({providedIn: 'root'})

export class GetLibraryRouteParamsObserverService implements IDoThis {


	constructor(
		private __runTasksAfterLibraryRouteParamsReceived:
			RunTasksAfterLibraryRouteParamsReceivedService
	) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			processingStatus.waiting = true;
			await this.__runTasksAfterLibraryRouteParamsReceived.go(params);
			processingStatus.waiting = false;
		};

	}


}
