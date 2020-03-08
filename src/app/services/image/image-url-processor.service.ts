import { AlertService as alert } from '../alert.service';
import { ImageURLData as enteredImageURL }
	from '../../data-structures/runtime-state-data/image-url.data';
import { IndirectProcessor } from '../../interfaces/indirect-processor';
import { Injectable } from '@angular/core';
import { GetAppImageService as getAppImage } from './get-app-image.service';
import { NewImagesData as newImages } from '../../data-structures/runtime-state-data/static-classes/new-images.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../perform-data-process-requiring-waiting.service';
import { SaveNewImagesProcessorService }
	from '../data-transport-processor/save-new-images-processor.service';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { CORSProxyData as corsProxy } from '../../data-structures/read-only-data/cors-proxy.data';


@Injectable({providedIn: 'root'})

export class ImageURLProcessorService implements IndirectProcessor {

	constructor(private __saveNewImagesProcessor: SaveNewImagesProcessorService) {
	}


	async process(): Promise<void> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			newImages.data.push(
				getAppImage.go({name: undefined, src: enteredImageURL.data})
			);
			await performDataProcessRequiringWaiting.go(
				this.__saveNewImagesProcessor, operationStatus
			);
		}
		else {
			alert.error =
				'The URL you entered is either not connected to a resource, or access is denied.';
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
