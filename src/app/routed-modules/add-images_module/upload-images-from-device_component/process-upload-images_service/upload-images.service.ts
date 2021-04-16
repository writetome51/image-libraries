import { AppImage } from '@interfaces/app-image.interface';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ProcessSaveNewImageRecordsService } from './process-save-new-image-records.service';
import { AddImagesServicesModule } from '../../add-images-services.module';
import { ProcessStoreImageFilesService }
	from '../process-store-image-files_service/process-store-image-files.service';


@Injectable({providedIn: AddImagesServicesModule})
export class UploadImagesService {

	constructor(
		private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService,
		private __processStoreImageFiles: ProcessStoreImageFilesService
	) {}


	async go(files: FileList | File[]): Promise<void> {
		await this.__processStoreImageFiles.go(files);


		/**************
		for (let i = 0, length = files.length; i < length; ++i) {
			newImages.data[i] = await this.__getAppImage(files[i], savedURLs[i]);
		}
		await this.__processSaveNewImageRecords.go(newImages.data);
		****************/
	}


	private __getAppImage(file, url): AppImage {

		return getAppImage.go({
			name: file.name,
			src: url,
			date: new Date(file.lastModified),
			location: file.location
		});
	}

}
