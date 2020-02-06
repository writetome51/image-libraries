import { LibraryNamesData as libraryNames } from '../runtime-state-data/LibraryNamesData';
import { CurrentLibrarySetterService as librarySetter }
	from './library/current-library-setter.service';


export class RemoveRuntimeStateDataService { // implements IDoThis

	static go(): void {
		libraryNames.data = undefined;
		librarySetter.unset();
	}

}
