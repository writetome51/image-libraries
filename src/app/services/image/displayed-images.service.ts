import { LibraryData as library } from '../../data/runtime-state-data/library.data';
import { Injectable } from '@angular/core';
import { LibraryImagesData as images } from '../../data/runtime-state-data/library-images.data';
import { noValue } from '@writetome51/has-value-no-value';
import { DBImage } from '../../interfaces/db-image';


@Injectable({providedIn: 'root'})

export class DisplayedImagesService {

	private __data: DBImage[];


	get exist(): boolean {
		return this.data.length > 0;
	}


	get data(): DBImage[] {
		if (noValue(this.__data)) {
			this.__data = library.data._image_ids.map((id) => images.data[id]);
		}
		return this.__data;
	}


}
