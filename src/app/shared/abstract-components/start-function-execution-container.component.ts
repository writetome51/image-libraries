import { ClickStartedExecutionStatusData as executionStatus }
	from '@runtime-state-data/click-started-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';


export abstract class StartFunctionExecutionContainerComponent {

	async start(funcArgs = []) {
		await executeFunctionRequiringWaiting.go(
			this._func,
			executionStatus,
			funcArgs
		);
	}


	protected abstract _func(...args): any;

}
