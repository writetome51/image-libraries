import { IDoThis } from '../../../../interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { OperationStatusData as operationStatus }
	from '../../../../data-structures/runtime-state-data/operation-status.data';
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
			operationStatus.waiting = true;
			await this.__runTasksNeededAfterAllImagesRouteParamsReceived.go(params);
			operationStatus.waiting = false;
		};
	}

}
