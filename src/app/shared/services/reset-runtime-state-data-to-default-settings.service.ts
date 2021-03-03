// import { IDoThis } from '@interfaces/i-do-this.interface';
import * as data from '@runtime-state-data/static-classes/auto-resettable.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


export class ResetRuntimeStateDataToDefaultSettingsService { // implements IDoThis

	static go(): void {
		let resettables: ResettableToDefault[] = Object.values(data);

		for (let i = 0, length = resettables.length; i < length; ++i) {
			resettables[i].setDefault();
		}
	}

}
