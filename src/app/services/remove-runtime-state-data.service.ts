import { LibraryNamesData as libraryNames } from '../data/runtime-state-data/LibraryNamesData';
import { CurrentLibrarySetterService as librarySetter }
	from './library/current-library-setter.service';


export class RemoveRuntimeStateDataService { // implements IDoThis

	static readonly data = [
		libraryNames,
		
	];

	static go(): void {
		libraryNames.data = undefined;
		librarySetter.unset();

		/*****************
		// Eventually switch to this:

		this.data.forEach((obj)=>{
			if (obj.data) obj.data = undefined;
			else {
				let keys = Object.keys(obj);
				keys.forEach((key) => obj[key] = undefined);
			}
		});

		****************/
	}

}
