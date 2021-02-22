import { Processor } from '@interfaces/processor.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { InterpretResultService } from './interpret-result/interpret-result.abstract.service';


export abstract class ProcessorService implements Processor {

	constructor(
		private __getResult: IDoThis,
		private __interpretResult: InterpretResultService
	) {
	}


	async process(...args): Promise<void> {
		let result = await this.__getResult.go(...args);
		await this.__interpretResult.go(result);
	}

}
