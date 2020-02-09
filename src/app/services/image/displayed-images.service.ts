import { LibraryData as library } from '../../data/runtime-state-data/library.data';
import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';
import { LibraryImagesData as images } from '../../data/runtime-state-data/library-images.data';
import { noValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class DisplayedImagesService {

	private __data: AppImage[];


	get exist(): boolean {
		return this.data.length > 0;
	}


	get data(): AppImage[] {
		if (noValue(this.__data)) {
			this.__data = library.data._image_ids.map((id) => images.data[id]);
		}
		return this.__data;
	}


}
