import { ActionMenuChoicesData as actionMenuChoices }
	from '@runtime-state-data/static-classes/resettable-to-default/action-menu-choices.data';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/resettable-to-default/library-names.data';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/resettable-to-default/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/resettable-to-default/loaded-images.data';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings}
	from '@runtime-state-data/static-classes/resettable-to-default/thumbnail-display-settings.data';
import { NewImagesData as newImages}
	from '@runtime-state-data/static-classes/resettable-to-default/new-images.data';
import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/resettable-to-default/image-total.data';
import { PageData as page} from '@runtime-state-data/static-classes/resettable-to-default/page.data';
import { ImagesLoadedFromData as imagesLoadedFrom }
	from '@runtime-state-data/static-classes/resettable-to-default/images-loaded-from.data';
import { LoadData as batch }
	from '@runtime-state-data/static-classes/resettable-to-default/load.data';
import { PageImagesData as pageImages }
	from '@runtime-state-data/static-classes/resettable-to-default/page-images.data';


export class ResetRuntimeStateDataToDefaultSettingsService { // implements IDoThis

	private static readonly __data: ResettableToDefault[] = [
		actionMenuChoices,
		libraryNames,
		loadedLibrary,
		loadedImages,
		page, // must be listed before batch!
		pageImages,
		batch,
		thumbnailDisplaySettings,
		newImages,
		imageTotal,
		imagesLoadedFrom,
	];


	static go(): void {
		this.__data.forEach((obj) => obj.setDefault());
	}

}


interface ResettableToDefault {
	setDefault: () => void;
}
