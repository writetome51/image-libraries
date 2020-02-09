import { LibraryData as library } from '../../data/runtime-state-data/library.data';
import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';
import { LibraryImagesData as images } from '../../data/runtime-state-data/library-images.data';


@Injectable({providedIn: 'root'})

export class ImagesToDisplayService {


	get exist(): boolean {
		return this.data.length > 0;
	}


	get data(): AppImage[] {
		return library.data._image_ids.map((id) => images.data[id]);
	}


}
