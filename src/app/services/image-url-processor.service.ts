import { ImageStoreService } from './image-store.service';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class ImageURLProcessorService {


	constructor(
		private __imageStore: ImageStoreService
	) {
	}


	process(url) {
		this.__imageStore.images.push({name: '', src: url, description: ''});
	}


}
