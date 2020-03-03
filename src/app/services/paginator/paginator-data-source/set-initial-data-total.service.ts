import { IDoThis } from '../../../interfaces/i-do-this';
import { TotalFetchingProcessorService }
	from '../../data-transport-processor/image-fetching-processor/total-fetching-processor.service';


export abstract class SetInitialDataTotalService implements IDoThis {

	constructor(private __totalFetchingProcessor: TotalFetchingProcessorService) {
	}

	async go() {
		await this.__totalFetchingProcessor.process();
	}

}
