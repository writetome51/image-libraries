import { CORSProxyData as corsProxy } from '@read-only-data/cors-proxy.data';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { ImageURLData as enteredImageURL } from '@runtime-state-data/image-url.data';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { SaveNewImagesService } from '../../save-new-images.service';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class AddImageURLService implements IDoThis {

	constructor(private __saveNewImages: SaveNewImagesService) {
	}


	async go(): Promise<{ success: true } | HasError> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			newImages.data.push(
				getAppImage.go({name: undefined, src: enteredImageURL.data})
			);
			return await this.__saveNewImages.go(newImages.data);
		}
		else {
			return { error: { message: 'The URL you entered is either not connected to a' +
						' resource, or access is denied.'
			}};
		}
	}


	private async __resourceFound(url): Promise<boolean> {
		url = corsProxy.data + url;

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
