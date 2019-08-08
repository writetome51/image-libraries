import { Injectable } from '@angular/core';
import { LibraryService } from './library.service';


@Injectable({
	providedIn: 'root'
})
export class ImageURLProcessorService {


	constructor(
		private __library: LibraryService
	) {
	}


	async process(url) {
		// Before adding it to image store, check if `url`, when requested, doesn't return 200 ok.
		let isFound = await this.__resourceFound(url, 'GET');
		if (isFound) {
			this.__library.images.push({name: '', src: url, description: ''});
		}
		else alert('The URL you entered is either not connected to a resource, or access is denied.');

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
