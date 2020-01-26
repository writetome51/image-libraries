import { AlertData as alert } from '../../data/alert.data';
import { EnteredImageURLData as enteredImageURL } from '../../data/entered-image-url.data';
import { IndirectProcessor } from '../../interfaces/indirect-processor';
import { Injectable } from '@angular/core';
import { LibraryChangesService } from '../library/library-changes.service';


@Injectable({providedIn: 'root'})

export class ImageURLProcessorService implements IndirectProcessor {


	async process(): Promise<void> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			LibraryChangesService.getChange('images').push(
				{name: '', src: enteredImageURL.data, description: ''}
			);
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
