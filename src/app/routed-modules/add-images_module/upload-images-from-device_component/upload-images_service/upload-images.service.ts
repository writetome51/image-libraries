import { AddImagesServicesModule } from '../../add-images-services.module';
import { AppImage } from '@interfaces/app-image.interface';
import { BackgroundExecutionStatusData as backgroundExecutionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { IDoThis } from '@interfaces/i-do-this.interface';
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
export class UploadImagesService implements IDoThis {

	constructor(
		private __processSaveNewImageRecords: ProcessSaveNewImageRecordsService,
		private __processStoreImageFiles: ProcessStoreImageFilesService
	) {}


	async go(files: FileList | File[]): Promise<void> {
		await executeFunctionRequiringWaiting.go(
			async () => {
				await this.__processStoreImageFiles.go(files);
				newImages.data = this.__getNewAppImages(files, temporaryImageURLs.data);
				await this.__processSaveNewImageRecords.go(newImages.data);
			},
			backgroundExecutionStatus
		);
	}


	private __getNewAppImages(files, urls: string[]): AppImage[] {
		return getArrFilled(files.length, (i) => this.__getAppImage(files[i], urls[i]));
	}


	private __getAppImage(file: File, url): AppImage {

		return getAppImage.go({
			name: file.name,
			src: url,
			size: file.size,
			date: new Date(file.lastModified)
		});
	}

}
