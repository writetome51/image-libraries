// import { IDoThis } from '@interfaces/i-do-this';


export class ExecuteFunctionRequiringWaitingService { // implements IDoThis

	static async go(
		func: (...args) => any,
		executionStatus: { waiting: boolean },
		funcArgs = []
	): Promise<any> {

		executionStatus.waiting = true;
		let result: any = await func(...funcArgs);
		executionStatus.waiting = false;

		return result;
	}

}
