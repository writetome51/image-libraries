import { IDoThis } from '../../../../interfaces/i-do-this';
import { DataTransportProcessorService }
	from '../../data-transport-processor/data-transport-processor.service';


export abstract class SetInitialDataTotalService implements IDoThis {

	constructor(private __totalFetchingProcessor: DataTransportProcessorService) {
	}

	async go() {
		await this.__totalFetchingProcessor.process();
	}

}
