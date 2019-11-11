import { Injectable } from '@angular/core';
import { CurrentLibraryService } from '../library/current-library.service';
import { AlertService as alert } from '../alert.service';
import { Processor } from '../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class ImageURLProcessorService implements Processor {


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	async process(url) {
		let isFound = await this.__resourceFound(url);
		if (isFound) {
			this.__currentLibrary.images.push({name: '', src: url, description: ''});
		}
		else {
			alert.error =
				'The URL you entered is either not connected to a resource, or access is denied.';
		}
	}


	private async __resourceFound(url): Promise<boolean> {

		return new Promise((returnData) => {
			let request = new XMLHttpRequest();

			request.onreadystatechange = function() {
				if (this.readyState === 4) {
					returnData(this.status === 200);
				}
			};
			request.open('GET', url, true);
			request.send();
		});

	}


}
