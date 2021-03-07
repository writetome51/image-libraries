import { IDoThis } from '@interfaces/i-do-this.interface';
import * as resettableClasses from '@runtime-state-data/static-classes/auto-resettable.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { Injectable } from '@angular/core';
import { LoadedImageStateService }
	from './loaded-image-state_service/loaded-image-state.service';
import { append } from '@writetome51/array-append-prepend';


@Injectable({providedIn: 'root'})
export class ResetRuntimeStateDataToDefaultSettingsService implements IDoThis {

	constructor(private __loadedImageState: LoadedImageStateService) {}


	go(): void {
		let resettables: ResettableToDefault[] = Object.values(resettableClasses);
		append(this.__loadedImageState, resettables);

		for (let i = 0, length = resettables.length; i < length; ++i) {
			resettables[i].setDefault();
		}
	}

}
