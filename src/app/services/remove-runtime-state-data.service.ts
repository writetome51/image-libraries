import { CurrentUserLibrariesData as libraries } from '../data/current-user-libraries.data';
import { CurrentLibrarySetterService as librarySetter } from './library/current-library-setter.service';


export class RemoveRuntimeStateDataService {

	static go(): void {
		libraries.data = undefined;
		librarySetter.unset();
	}

}
