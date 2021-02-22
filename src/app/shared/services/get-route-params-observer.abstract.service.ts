import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


export abstract class GetRouteParamsObserverService implements IDoThis {

	constructor(private __runTasksAfterRouteParamsReceived: IDoThis) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			await executeFunctionRequiringWaiting.go(
				() => this.__runTasksAfterRouteParamsReceived.go(params),
				executionStatus
			);
		};
	}

}
