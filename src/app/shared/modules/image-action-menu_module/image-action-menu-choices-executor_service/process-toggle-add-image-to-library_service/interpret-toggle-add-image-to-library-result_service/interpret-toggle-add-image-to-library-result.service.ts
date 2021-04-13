import { Injectable } from '@angular/core';
import { RunTasksAfterToggleAddImageToLibraryService }
	from './run-tasks-after-toggle-add-image-to-library.service';
import { LibrariesInBrowserStorageService }
	from '@browser-storage/libraries-in-browser-storage.service';
import { LibraryDBRecord } from '@interfaces/library-db-record.interface';
import { not } from '@writetome51/not';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';
import { HandleErrorService } from '@process/handle-error/handle-error.service';
import { InterpretResultService } from '@interpret-result/interpret-result.abstract.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class InterpretToggleAddImageToLibraryResultService extends InterpretResultService {

	constructor(
		__handleError: HandleErrorService,
		__runPostSuccessTasks: RunTasksAfterToggleAddImageToLibraryService,
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {
		super(__handleError, __runPostSuccessTasks);
	}


	async go(
		result: { image_id: string, libName: string, checked: boolean }
	): Promise<void> {
		let lib: LibraryDBRecord = this.__librariesInBrowser.get()[result.libName];
		if (not(this.__image_ids_properlyModified(lib._image_ids, result))) {
			// @ts-ignore
			result = {error: {message: 'Library change unsuccessful'}};
		}
		return super.go(result);
	}


	private __image_ids_properlyModified(image_ids, result) {
		if (result.checked) {
			if (not(image_ids.includes(result.image_id))) return true;
		}
		else {
			if (image_ids.includes(result.image_id)) return true;
		}
		return false;
	}

}
