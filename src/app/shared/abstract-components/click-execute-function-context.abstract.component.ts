import { ClickStartedExecutionStatusData as executionStatus }
	from '@runtime-state-data/click-started-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';


export abstract class ClickExecuteFunctionContextComponent {

	async execute(funcArgs = []) {
		await executeFunctionRequiringWaiting.go(
			async () => await this._func(...funcArgs),
			executionStatus
		);
	}


	protected abstract _func(...args): any;

}
