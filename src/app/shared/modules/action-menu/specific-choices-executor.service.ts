import { MenuChoice } from '@action-menu/menu-choice.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { removeTail } from '@writetome51/array-remove-head-tail';


export abstract class SpecificChoicesExecutorService {

	private readonly __executors: IDoThis[];
	private __executorMap: { [propName: string]: IDoThis } = {};


	constructor(...executors: IDoThis[]) {
		this.__executors = executors;
	}


	async execute({label, data}: MenuChoice): Promise<void> {
		if (this.__hasParent(label)) label = this.__getParent(label);

		let iDoThis = this.__executorMap[label];
		await iDoThis.go(data);
	}


	// `labels` length must match number of executors injected in constructor.
	// They must be listed in same order as executors they're matched with.

	protected _assignLabelsToExecutors(labels: string[]) {
		for (let i = 0, length = labels.length; i < length; ++i) {
			let label = labels[i];
			this.__executorMap[label] = this.__executors[i];
		}
	}


	private __hasParent(label) {
		return (label.includes('.'));
	}


	private __getParent(label) {
		let parts = label.split('.');
		removeTail(1, parts);
		return parts.join('.');
	}

}