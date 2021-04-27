import { getRoundedDown } from '@writetome51/get-rounded-up-down';
// import { IDoThis } from '@interfaces/i-do-this.interface';


export class ExecuteLoopRequiringProgressUpdateService { // implements IDoThis

	static async go<T>(
		arr: T[],
		func: (value, index?, arr?: T[]) => void,
		progress: { percentageComplete: number },
	): Promise<void> {
		for (let i = 0, length = arr.length; i < length; ++i) {
			await func(arr[i], i, arr);
			progress.percentageComplete = getRoundedDown(((i + 1) / length) * 100);
		}
	};
}
