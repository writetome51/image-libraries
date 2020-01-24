import { CurrentUserLibrariesService as libraries } from './library/current-user-libraries.service';
import { CurrentLibraryService as library } from './library/current-library.service';


export class RemoveRuntimeStateDataService {

	static go(): void {
		libraries.data = undefined;
		library.data = undefined;
	}

}
