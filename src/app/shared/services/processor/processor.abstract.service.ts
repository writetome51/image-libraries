import { Processor } from '@interfaces/processor.interface';
import { InterpretResultService } from './interpret-result.abstract.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


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
