import { DBLibrary } from '../../interfaces/db-library';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { LoadedLibrary } from '../../interfaces/loaded-library';


export class CurrentLibrarySetterService {

	static set(newValue: DBLibrary): void {

		newValue['currentImage'] = undefined; // image currently being viewed
		newValue['currentImageIndex'] = -1;

		library.data = <LoadedLibrary> newValue;
	}


	static unset(): void {
		library.data = undefined;
	}

}
