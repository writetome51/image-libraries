import { AddImagesServicesModule } from '../../add-images-services.module';
import { AppImage } from '@interfaces/app-image.interface';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ProcessSaveNewImageRecordsService }
	from '../../process-save-new-image-records_service/process-save-new-image-records.service';
import { ProcessStoreImageFilesService }
	from './process-store-image-files_service/process-store-image-files.service';
import { TemporaryImageURLsData as temporaryImageURLs }
	from '@runtime-state-data/temporary-image-urls.data';


@Injectable({providedIn: AddImagesServicesModule})
export class UploadImagesService {

	constructor(
		private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService,
		private __processStoreImageFiles: ProcessStoreImageFilesService
	) {}


	async go(files: FileList | File[]): Promise<void> {
		await this.__processStoreImageFiles.go(files);

		newImages.data = getArrFilled(
			files.length,
			(i) => this.__getAppImage(files[i], temporaryImageURLs.data[i])
		);
		await this.__processSaveNewImageRecords.go(newImages.data);
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
