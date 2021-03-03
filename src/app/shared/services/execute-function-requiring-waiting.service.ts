// import { IDoThis } from '@interfaces/i-do-this.interface';
import { Waiter } from '@interfaces/waiter.interface';


// To help let user know the app is working on their request.
// While `executionStatus.waiting` === true, you can show 'loading...' message

export class ExecuteFunctionRequiringWaitingService { // implements IDoThis

	static async go(
		func: (...args) => any,
		executionStatus: Waiter,
		funcArgs = []
	): Promise<any> {

		executionStatus.waiting = true;
		let result: any = await func(...funcArgs);
		executionStatus.waiting = false;

		return result;
	}

}
