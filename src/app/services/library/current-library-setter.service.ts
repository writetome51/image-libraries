import { DBLibrary } from '../../interfaces/db-library';
import { modifyObject } from '@writetome51/modify-object';
import { CurrentLibraryService as library } from './current-library.service';
import { LoadedLibrary } from '../../interfaces/loaded-library';


export class CurrentLibrarySetterService {

	static set(newValue: DBLibrary): void {
		modifyObject(newValue, {
			currentImage: undefined, // image currently being viewed
			currentImageIndex: -1
		});

		library.data = <LoadedLibrary> newValue;
	}

}
