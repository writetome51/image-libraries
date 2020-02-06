import { DBImage } from '../../interfaces/db-image';
import { LibraryData as library } from '../../runtime-state-data/library.data';
import { getCopy } from '@writetome51/array-get-copy';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {

	private __data: DBImage[];


	get exist(): boolean {
		return this.data.length > 0;
	}


	get data(): DBImage[] {
		if (noValue(this.__data)) this.__data = getCopy(library.data.images);

		return this.__data;
	}


}
