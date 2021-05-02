import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { ImageURLData as enteredImageURL } from '@runtime-state-data/image-url.data';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { HasError } from '@interfaces/has-error.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';
import { ProcessSaveNewImageRecordsService }
	from '../../process-save-new-image-records_service/process-save-new-image-records.service';


@Injectable({providedIn: EnterImageURLServicesModule})
export class SaveImageURLService implements IDoThis {

	constructor(private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService) {}


	async go(): Promise<{ success: true } | HasError> {
		newImages.data.push(
			getAppImage.go({name: undefined, src: enteredImageURL.data})
		);
		try {
			await this.__processSaveNewImageRecords.go(newImages.data);
			return {success: true};
		}
		catch (error) {
			return {error};
		}
	}

}
