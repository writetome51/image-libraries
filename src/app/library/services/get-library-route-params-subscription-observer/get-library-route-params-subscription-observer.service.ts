import { Injectable } from '@angular/core';
import { IDoThis } from '../../../../interfaces/i-do-this';
import { OperationStatusData as operationStatus }
	from '../../../../data-structures/runtime-state-data/operation-status.data';
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
			operationStatus.waiting = true;
			await this.__runTasksNeededAfterLibraryRouteParamsReceived.go(params);
			operationStatus.waiting = false;
		};

	}


}
