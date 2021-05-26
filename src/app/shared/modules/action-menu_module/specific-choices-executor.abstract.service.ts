import { ExecutorConfiguration } from './executor-configuration.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { MenuChoice } from './menu-choice.interface';
import { MenuChoiceLabelHierarchyService as labelHierarchy }
	from './menu-choice-label-hierarchy.service';


export abstract class SpecificChoicesExecutorService {

	private __executorMap: { [label: string]: IDoThis } = {};


	constructor(executorConfigs: ExecutorConfiguration[]) {
		this.__set__executorMap(executorConfigs);
	}


	async execute({label, data}: MenuChoice): Promise<void> {
		if (labelHierarchy.hasParent(label)) label = labelHierarchy.getParent(label);

		let iDoThis = this.__executorMap[label];
		await iDoThis.go(data);
	}


	private __set__executorMap(executorConfigs: ExecutorConfiguration[]) {

		for (let i = 0, length = executorConfigs.length; i < length; ++i) {
			const {label, executor} = executorConfigs[i];
			this.__executorMap[label] = executor;
		}
	}

}
