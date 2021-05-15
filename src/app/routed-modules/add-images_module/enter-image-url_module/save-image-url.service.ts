import { GetAppImageService as getAppImage } from '../get-app-image.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { EnterImageURLServicesModule } from './enter-image-url-services.module';
import { ProcessSaveNewImageRecordsService }
	from '../process-save-new-image-records_service/process-save-new-image-records.service';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: EnterImageURLServicesModule})
export class SaveImageURLService implements IDoThis {

	constructor(private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService) {}


	async go(imageURL: string): Promise<void> {
		newImages.data = [
			getAppImage.go({name: undefined, src: imageURL, size: 0})
		];
		await this.__processSaveNewImageRecords.go(newImages.data);
	}

}
