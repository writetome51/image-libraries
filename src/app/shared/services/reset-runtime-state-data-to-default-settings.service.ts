// import { IDoThis } from '@interfaces/i-do-this.interface';
import * as data from '@runtime-state-data/static-classes/auto-resettable.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default';


export class ResetRuntimeStateDataToDefaultSettingsService { // implements IDoThis

	static go(): void {
		Object.values(data).forEach((obj: ResettableToDefault) => obj.setDefault());
	}

}
