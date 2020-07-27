import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { RunTasksNeededAfterAllImagesRouteParamsReceivedService }
	from './run-tasks-needed-after-all-images-route-params-received.service';


@Injectable({providedIn: 'root'})

export class GetAllImagesRouteParamsSubscriptionObserverService implements IDoThis {

	constructor(
		private __runTasksNeededAfterAllImagesRouteParamsReceived:
			RunTasksNeededAfterAllImagesRouteParamsReceivedService
	) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			processingStatus.waiting = true;
			await this.__runTasksNeededAfterAllImagesRouteParamsReceived.go(params);
			processingStatus.waiting = false;
		};
	}

}
