import { AlertService as alert } from '../alert.service';
import { LoadedLibraryService as currentLibrary } from '../library/loaded-library.service';
import { EnteredImageURLService as enteredImageURL } from '../entered-image-url.service';
import { IndirectProcessor } from '../../interfaces/indirect-processor';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class ImageURLProcessorService implements IndirectProcessor {


	async process(): Promise<void> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			currentLibrary.images.push({name: '', src: enteredImageURL.data, description: ''});
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
