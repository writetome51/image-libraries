import * as resettableClasses from '@runtime-state-data/static-classes/auto-resettable.data';
import { append } from '@writetome51/array-append-prepend';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService }
	from './loaded-images-state_service/loaded-images-state.service';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


@Injectable({providedIn: 'root'})
export class ResetRuntimeStateDataToDefaultSettingsService implements IDoThis {

	constructor(private __loadedImageState: LoadedImagesStateService) {}


	go(): void {
		let resettables: ResettableToDefault[] = Object.values(resettableClasses);
		append(this.__loadedImageState, resettables);

		for (let i = 0, length = resettables.length; i < length; ++i) {
			resettables[i].setDefault();
		}
	}

}
