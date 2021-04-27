import { getRoundedDown } from '@writetome51/get-rounded-up-down';
// import { IDoThis } from '@interfaces/i-do-this.interface';


// To help implement an animated progress bar

export class ExecuteLoopRequiringProgressUpdateService { // implements IDoThis

	static async go<T>(
		arr: T[],
		forEach: (value: T, index?: number, arr?: T[]) => void,
		progress: { percentageComplete: number },
	): Promise<void> {

		for (let i = 0, length = arr.length; i < length; ++i) {
			await forEach(arr[i], i, arr);
			progress.percentageComplete = getRoundedDown(((i + 1) / length) * 100);
		}
	};
}
