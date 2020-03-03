import { LibraryNamesData as libraryNames }
	from '../data/runtime-state-data/static classes/library-names.data';
import { LoadedLibraryData as loadedLibrary }
	from '../data/runtime-state-data/static classes/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../data/runtime-state-data/static classes/loaded-images.data';


export class RemoveRuntimeStateDataService { // implements IDoThis

	private static readonly __data: StaticRuntimeStateData[] = [
		libraryNames,
		loadedLibrary,
		loadedImages,
	];


	static go(): void {
		this.__data.forEach((obj) => obj.setDefault());
	}

}


interface StaticRuntimeStateData {
	setDefault: () => void;
}
