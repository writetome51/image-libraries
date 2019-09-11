import { Injectable } from '@angular/core';
import { CurrentLibraryService } from './current-library.service';
import { SuccessOrErrorMessageService } from './success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class ImageURLProcessorService {


	constructor(
		private __currentLibrary: CurrentLibraryService,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
	}


	async process(url) {
		let isFound = await this.__resourceFound(url);
		if (isFound) {
			this.__currentLibrary.images.push({name: '', src: url, description: ''});
		}
		else {
			this.__successOrErrorMessage.error =
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
