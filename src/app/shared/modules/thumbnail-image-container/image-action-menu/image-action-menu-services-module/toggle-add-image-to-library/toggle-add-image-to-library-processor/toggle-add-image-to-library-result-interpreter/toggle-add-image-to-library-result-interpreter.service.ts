import { Injectable } from '@angular/core';
import { ProcessResultInterpreterService }
	from '@processor/process-result-interpreter.service';
import { RunTasksAfterToggleAddImageToLibraryService }
	from './run-tasks-after-toggle-add-image-to-library.service';
import { LibrariesInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/libraries-in-browser-storage.service';
import { DBLibrary } from '@interfaces/db-library.interface';
import { not } from '@writetome51/not';
import { HandleProcessErrorService } from '@processor/handle-process-error.service';
import { ImageActionMenuServicesModule } from '@thumbnail-image-container/image-action-menu/image-action-menu-services-module/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryResultInterpreterService
	extends ProcessResultInterpreterService {

	constructor(
		__handleError: HandleProcessErrorService,
		__runPostSuccessTasks: RunTasksAfterToggleAddImageToLibraryService,
		private __librariesInBrowser: LibrariesInBrowserStorageService
	) {
		super(__handleError, __runPostSuccessTasks);
	}


	async interpret(
		result: { image_id: string, libName: string, checked: boolean }
	): Promise<void> {
		let lib: DBLibrary = this.__librariesInBrowser.get()[result.libName];
		if (not(this.__image_ids_properlyModified(lib._image_ids, result))) {
			// @ts-ignore
			result = {error: {message: 'Library change unsuccessful'}};
		}
		return super.interpret(result);
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
