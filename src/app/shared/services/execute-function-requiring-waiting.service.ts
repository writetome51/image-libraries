import { IDoThis } from '@interfaces/i-do-this.interface';
import { Waiter } from '@interfaces/waiter.interface';


// To help let user know the app is working on their request.
// While `executionStatus.waiting === true`, you can show 'working...' message

export class __ExecuteFunctionRequiringWaitingService {

	static async go<T>(
		func: (...args) => T,
		executionStatus: Waiter,
		funcArgs = []
	): Promise<T> {

		executionStatus.waiting = true;
		let result: T = await func(...funcArgs);
		executionStatus.waiting = false;

		return result;
	}

}

export const ExecuteFunctionRequiringWaitingService: IDoThis
	= __ExecuteFunctionRequiringWaitingService;
