import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from './interpret-result/interpret-result.abstract.service';
import { Process } from '@interfaces/process.interface';


export abstract class ProcessService implements Process {

	constructor(
		private __getResult: IDoThis,
		private __interpretResult: InterpretResultService
	) {
	}


	async go(...args): Promise<void> {
		let result = await this.__getResult.go(...args);
		await this.__interpretResult.go(result);
	}

}
