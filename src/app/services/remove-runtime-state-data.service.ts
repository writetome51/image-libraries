import { LibraryNamesData as libraryNames } from '../data/runtime-state-data/library-names.data';
import { AllImagesData as allImages } from '../data/runtime-state-data/all-images.data';
import { LoadedLibraryData as library } from '../data/runtime-state-data/loaded-library.data';
import { LoadedImagesData as libraryImages } from '../data/runtime-state-data/loaded-images.data';


export class RemoveRuntimeStateDataService { // implements IDoThis

	static readonly data = [
		libraryNames,
		library,
		libraryImages,
		allImages,
	];


	static go(): void {

		this.data.forEach((obj) => {
			if (obj.data) obj.data = undefined;
			else {
				let keys = Object.keys(obj);
				keys.forEach((key) => obj[key] = undefined);
			}
		});

	}

}
