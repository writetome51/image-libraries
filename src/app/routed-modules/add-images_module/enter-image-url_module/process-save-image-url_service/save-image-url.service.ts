import { CORSProxyData as corsProxy } from '@read-only-data/cors-proxy.data';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { ImageURLData as enteredImageURL } from '@runtime-state-data/image-url.data';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';
import { ProcessSaveNewImageRecordsService } from '@app/routed-modules/add-images_module/process-save-new-image-records_service/process-save-new-image-records.service';


@Injectable({providedIn: EnterImageURLServicesModule})
export class SaveImageURLService implements IDoThis {

	constructor(private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService) {}


	async go(): Promise<{ success: true } | HasError> {
		if (await this.__resourceFound(enteredImageURL.data)) {
			newImages.data.push(
				getAppImage.go({name: undefined, src: enteredImageURL.data})
			);
			await this.__processSaveNewImageRecords.go(newImages.data);
		}
		else return {error: {message: 'The URL you entered is either not connected to a' +
			' resource, or access is denied.'
		}};
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
