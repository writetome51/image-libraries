import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';
import { Processor } from '@interfaces/processor';


export abstract class ChoicesProcessorService implements DirectProcessor {

	private __processors: Processor[];
	private __functions = {};


	constructor(...processors: Processor[]) {
		this.__processors = processors;
	}


	async process(choice: MenuChoice): Promise<void> {
		let {label, data} = choice;

		await this.__functions[label](data);
	}


	// Number of `labels` must match number of processors injected in constructor.
	// They must be listed in same order as processors they're matched with.

	protected _setupFunctions(labels) {
		labels.forEach((label, i) => {
			this.__functions[label] = this.__processors[i].process;
		});
	}

}
