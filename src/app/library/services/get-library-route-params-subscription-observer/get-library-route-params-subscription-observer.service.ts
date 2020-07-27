import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { RunTasksNeededAfterLibraryRouteParamsReceivedService }
	from './run-tasks-needed-after-library-route-params-received.service';


@Injectable({providedIn: 'root'})

export class GetLibraryRouteParamsSubscriptionObserverService implements IDoThis {


	constructor(
		private __runTasksNeededAfterLibraryRouteParamsReceived:
			RunTasksNeededAfterLibraryRouteParamsReceivedService
	) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			processingStatus.waiting = true;
			await this.__runTasksNeededAfterLibraryRouteParamsReceived.go(params);
			processingStatus.waiting = false;
		};

	}


}
