import { LibraryNamesData as libraryNames }
	from '../../data-structures/runtime-state-data/static-classes/library-names.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings}
	from '../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';
import { NewImagesData as newImages}
	from '../../data-structures/runtime-state-data/static-classes/new-images.data';
import { ImageTotalData as imageTotal }
	from '../../data-structures/runtime-state-data/static-classes/image-total.data';
import { PageData as page} from '../../data-structures/runtime-state-data/static-classes/page.data';
import { ImagesLoadedFromData as imagesLoadedFrom }
	from '../../data-structures/runtime-state-data/static-classes/images-loaded-from.data';
import { LoadData as batch }
	from '../../data-structures/runtime-state-data/static-classes/load.data';
import { PageImagesData as pageImages }
	from '../../data-structures/runtime-state-data/static-classes/page-images.data';


export class ResetRuntimeStateDataToDefaultSettingsService { // implements IDoThis

	private static readonly __data: RuntimeStateDataThatMustBeReset[] = [
		libraryNames,
		loadedLibrary,
		loadedImages,
		page, // must be listed before batch!
		pageImages,
		batch,
		thumbnailDisplaySettings,
		newImages,
		imageTotal,
		imagesLoadedFrom
	];


	static go(): void {
		this.__data.forEach((obj) => obj.setDefault());
	}

}


interface RuntimeStateDataThatMustBeReset {
	setDefault: () => void;
}
