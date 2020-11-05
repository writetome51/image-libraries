import { DirectProcessor } from '@interfaces/direct-processor';
import { MenuChoice } from '@interfaces/menu-choice';
import { Processor } from '@interfaces/processor';


export abstract class ChoicesProcessorService implements DirectProcessor {

	protected _functions = {};

	// Number of _functionLabels must match number of injected processors.
	// They must be listed in same order as processors they're matched with.

	protected _functionLabels: string[] = [];


	constructor(...processors: Processor[]) {
		this._functionLabels.forEach((label, i) => this._functions[label] = processors[i].process);
	}


	async process(choice: MenuChoice): Promise<void> {
		let {label, data} = choice;

		await this._functions[label](data);
	}

}
