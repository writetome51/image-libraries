import { AppImage } from '@interfaces/app-image.interface';
import { GetAppImageService as getAppImage } from '../../get-app-image.service';
import { getDataURL } from '@writetome51/get-data-url';
import { Injectable } from '@angular/core';
import { NewImagesData as newImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ProcessSaveNewImagesService } from './process-save-new-images.service';
import { AddImagesServicesModule } from '../../add-images-services.module';
import { Process } from '@interfaces/process.interface';


@Injectable({providedIn: AddImagesServicesModule})
export class ProcessUploadImagesService implements Process {


	constructor(private __processSaveNewImages: ProcessSaveNewImagesService) {
	}


	async go(files: FileList | File[]): Promise<void> {

		for (let i = 0, length = files.length; i < length; ++i) {
			newImages.data[i] = await this.__getAppImage(files[i]);
		}
		await this.__processSaveNewImages.go(newImages.data);

		newImages.data = [];
	}


	private async __getAppImage(file): Promise<AppImage> {

		return getAppImage.go({
			name: getFormattedName(file.name),
			src: await getDataURL(file),
			date: new Date(file.lastModified),
			location: file.location
		});


		function getFormattedName(name: string) {
			return name.split(' ').join('-');
		}
	}


}
