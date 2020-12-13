import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';
import { Processor } from '@interfaces/processor';


export abstract class MenuChoicesProcessorService implements DirectProcessor {

	private readonly __processors: Processor[];
	private __processorMap = {};


	constructor(...processors: Processor[]) {
		this.__processors = processors;
	}


	async process(choice: MenuChoice): Promise<void> {
		let {label, data} = choice;

		if (label.includes('.')) {
			let parts = label.split('.'), length = parts.length;
			if (length > 1) parts.length = length - 1;
			label = parts.join('.');
			console.log(label);
		}

		await this.__processorMap[label].process(data);
	}


	// `labels` length must match number of processors injected in constructor.
	// They must be listed in same order as processors they're matched with.

	protected _assignLabelsToProcessors(labels: string[]) {
		for (let i = 0, length = labels.length; i < length; ++i) {
			let label = labels[i];
			this.__processorMap[label] = this.__processors[i];
		}
	}

}
