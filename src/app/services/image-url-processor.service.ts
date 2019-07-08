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


	async process(url) {
		// Before adding it to image store, check if `url`, when requested, gets 404 error.
		let isFound = await this.__resourceFound(url, 'GET');
		if (isFound) {
			this.__imageStore.images.push({name: '', src: url, description: ''});
		}
		else alert('The URL you entered is either not real, or access is denied.');

	}


	private async __resourceFound(url, requestMethod): Promise<boolean> {

		return new Promise((returnData) => {
			let request = new XMLHttpRequest();
			request.onreadystatechange = function() {
				if (this.readyState === 4) {
					returnData(this.status === 200);
				}
			};
			request.open(requestMethod, url, true);
			request.send();
		});

	}


}
