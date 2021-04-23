import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResult } from '@interfaces/interpret-result.interface';
import { HandleErrorService } from '../handle-error/handle-error.service';
import { HasError } from '@interfaces/has-error.interface';


export abstract class InterpretResultService implements InterpretResult {

	constructor(
		private __handleError: HandleErrorService,
		private __runPostSuccessTasks: IDoThis
	) {}


	async go(result: any | HasError | undefined): Promise<void> {
		if (result === undefined) return; // use this to stop process early.

		if (result.error) await this.__handleError.go(result.error);

		else await this.__runPostSuccessTasks.go(result);
	}

}
