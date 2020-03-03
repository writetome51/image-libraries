import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { LoadedLibraryData as loadedLibrary } from '../../data/runtime-state-data/static-classes/loaded-library.data';
import { LoadedImagesData as images } from '../../data/runtime-state-data/static-classes/loaded-images.data';
import { DBImage } from '../../interfaces/db-image';


export class DisplayedImagesService {

	// Have to make this return array of images both when user is viewing a
	// library and when user is viewing all their images.
	static get data(): DBImage[] {
		if (hasValue(images)) return loadedLibrary._image_ids.map((id) => images[id]);
		else return [];
	}


}
