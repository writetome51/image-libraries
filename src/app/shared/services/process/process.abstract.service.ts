import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';
import { GetResult } from '@interfaces/get-result.interface';


export abstract class ProcessService implements IDoThis {

	constructor(
		private __getResult: GetResult,
		private __interpretResult: InterpretResultService
	) {}


	async go(...args): Promise<void> {
		let result = await this.__getResult.go(...args);
		await this.__interpretResult.go(result);
	}

}
