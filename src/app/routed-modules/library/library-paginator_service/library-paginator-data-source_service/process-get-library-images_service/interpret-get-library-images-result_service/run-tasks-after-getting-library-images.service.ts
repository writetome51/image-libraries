import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LibrariesInBrowserStorageService }
	from '@services/browser-storage-related/libraries-in-browser-storage.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';
import { RunTasksAfterGettingImagesService } from '@services/process/interpret-result/interpret-get-images-result/run-tasks-after-getting-images.service';


@Injectable({providedIn: LibraryServicesModule})
export class RunTasksAfterGettingLibraryImagesService extends RunTasksAfterGettingImagesService {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
		super();
	}


	async go(result: ImageBatch) {
		loadedLibrary.data = this.__librariesInBrowser.get()[requestedLibrary.name];
		await super.go(result);
	}

}
