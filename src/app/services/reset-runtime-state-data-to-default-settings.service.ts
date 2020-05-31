import { LibraryNamesData as libraryNames }
	from '../../data-structures/runtime-state-data/static-classes/library-names.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { BatchSizeData as batchSize}
	from '../../data-structures/runtime-state-data/static-classes/batch-size.data';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings}
	from '../../data-structures/runtime-state-data/static-classes/thumbnail-display-settings.data';
import { NewImagesData as newImages}
	from '../../data-structures/runtime-state-data/static-classes/new-images.data';
import { ImageTotalData as imageTotal }
	from '../../data-structures/runtime-state-data/static-classes/image-total.data';
import { PageData as page} from '../../data-structures/runtime-state-data/static-classes/page.data';
import { AllImagesStatusData as allImagesStatus }
	from '../../data-structures/runtime-state-data/static-classes/all-images-status.data';
import { BatchNumberData as batchNumber}
	from '../../data-structures/runtime-state-data/static-classes/batch-number.data';


export class ResetRuntimeStateDataToDefaultSettingsService { // implements IDoThis

	private static readonly __data: RuntimeStateDataThatMustBeReset[] = [
		libraryNames,
		loadedLibrary,
		loadedImages,
		page, // must be listed before batch!
		batchNumber,
		batchSize,
		thumbnailDisplaySettings,
		newImages,
		imageTotal,
		allImagesStatus
	];


	static go(): void {
		this.__data.forEach((obj) => obj.setDefault());
	}

}


interface RuntimeStateDataThatMustBeReset {
	setDefault: () => void;
}
