import { LibraryNamesData as libraryNames } from '../data/runtime-state-data/library-names.data';
import { LoadedLibraryData as loadedLibrary } from '../data/runtime-state-data/loaded-library.data';
import { LoadedImagesData as loadedImages } from '../data/runtime-state-data/loaded-images.data';


export class RemoveRuntimeStateDataService { // implements IDoThis

	static readonly data = [
		libraryNames,
		loadedLibrary,
		loadedImages,
	];


	static go(): void {

		this.data.forEach((obj) => {
			// @ts-ignore
			if (obj.data) obj.data = undefined;
			else {
				let keys = Object.keys(obj);
				keys.forEach((key) => obj[key] = undefined);
			}
		});

	}

}
