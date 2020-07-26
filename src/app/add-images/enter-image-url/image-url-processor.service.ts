import { CORSProxyData as corsProxy } from '../../shared/data/read-only/cors-proxy.data';
import { FormDataTransportProcessorService }
	from '../../shared/services/data-transport-processor/form-data-transport-processor.service';
import { GetAppImageService as getAppImage } from '../get-app-image.service';
import { ImageURLData as enteredImageURL }
	from '../../shared/data/runtime-state/image-url.data';
import { ImageURLInputService } from './image-url-input.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages } // tslint:disable-next-line:max-line-length
	from '../../shared/data/runtime-state/static-classes/resettable-to-default/new-images.data';
import { NewImagesSaverService } from '../save-new-images-processor/new-images-saver.service';
import { SaveNewImagesResultInterpreterService } // tslint:disable-next-line:max-line-length
	from '../save-new-images-processor/save-new-images-result-interpreter/save-new-images-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class ImageURLProcessorService extends FormDataTransportProcessorService {


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
			return await this.__newImagesSaver.save();
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
