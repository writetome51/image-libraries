import { CurrentUserLibrariesService as libraries } from './library/current-user-libraries.service';
import { CurrentLibrarySetterService as librarySetter } from './library/current-library-setter.service';


export class RemoveRuntimeStateDataService {

	static go(): void {
		libraries.data = undefined;
		librarySetter.unset();
	}

}
