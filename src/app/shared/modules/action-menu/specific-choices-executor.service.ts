import { ExecutorConfiguration } from './executor-configuration.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { MenuChoice } from '@action-menu/menu-choice.interface';
import { removeTail } from '@writetome51/array-remove-head-tail';


export abstract class SpecificChoicesExecutorService {

	private __executorMap: { [propName: string]: IDoThis } = {};


	constructor(executorConfigs: ExecutorConfiguration[]) {
		this.__set__executorMap(executorConfigs);
	}


	async execute({label, data}: MenuChoice): Promise<void> {
		if (this.__hasParent(label)) label = this.__getParent(label);

		let iDoThis = this.__executorMap[label];
		await iDoThis.go(data);
	}


	private __set__executorMap(executorConfigs: ExecutorConfiguration[]) {

		for (let i = 0, length = executorConfigs.length; i < length; ++i) {
			let {label, executor} = executorConfigs[i];
			this.__executorMap[label] = executor;
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
