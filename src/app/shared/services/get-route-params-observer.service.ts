import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { IDoThis } from '@interfaces/i-do-this';


export abstract class GetRouteParamsObserverService implements IDoThis {

	constructor(private __runTasksAfterRouteParamsReceived: IDoThis) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			processingStatus.waiting = true;
			await this.__runTasksAfterRouteParamsReceived.go(params);
			processingStatus.waiting = false;
		};
	}

}
