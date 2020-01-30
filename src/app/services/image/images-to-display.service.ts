import { AppImage } from '../../interfaces/app-image';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { getCopy } from '@writetome51/array-get-copy';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {

	private __data: AppImage[];


	get exist(): boolean {
		return this.data.length > 0;
	}


	get data(): AppImage[] {
		if (noValue(this.__data)) this.__data = getCopy(library.data.images);

		return this.__data;
	}


}
