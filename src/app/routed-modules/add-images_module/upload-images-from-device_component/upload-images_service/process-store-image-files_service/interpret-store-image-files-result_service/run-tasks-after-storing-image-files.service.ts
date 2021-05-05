import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { TemporaryImageURLsData as temporaryImageURLs }
	from '@runtime-state-data/temporary-image-urls.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterStoringImageFilesService implements IDoThis {

	async go(imageURLs: string[]) {
		temporaryImageURLs.data = imageURLs;
	}

}
