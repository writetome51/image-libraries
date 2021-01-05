import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { ImageURLData as enteredImageURL } from '@runtime-state-data/image-url.data';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { NewImagesSaverService } from '../../new-images-saver.service';
import { SaveNewImagesResultInterpreterService }
	from '../../save-new-images-result-interpreter/save-new-images-result-interpreter.service';
import { CORSProxyData as corsProxy } from '@read-only-data/cors-proxy.data';


@Injectable({providedIn: 'root'})
export class AddImageURLProcessorService extends FormDataTransportProcessorService {


	constructor(
		private __newImagesSaver: NewImagesSaverService,
		__imageURLInput: ImageURLInputService,
		__saveNewImagesResultInterpreter: SaveNewImagesResultInterpreterService
	) {
		super(__imageURLInput, __saveNewImagesResultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | { error: { message: string } }> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			newImages.data.push(
				getAppImage.go({name: undefined, src: enteredImageURL.data})
			);
			return await this.__newImagesSaver.save(newImages.data);
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
