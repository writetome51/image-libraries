import { LibraryNamesData as libraryNames } from '../data/runtime-state-data/library-names.data';
import { AllImagesData as allImages } from '../data/runtime-state-data/all-images.data';
import { LibraryData as library } from '../data/runtime-state-data/library.data';
import { LibraryImagesData as libraryImages } from '../data/runtime-state-data/library-images.data';


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
