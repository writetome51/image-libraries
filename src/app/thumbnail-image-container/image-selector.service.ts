import { SelectedImageNamesData as selectedImageNames }
	from '../../data-structures/runtime-state-data/selected-image-names.data';
import { removeFirstOf } from '@writetome51/array-remove-all-of-first-of';


export class ImageSelectorService {


	static toggleSelect(image: { name: string }) {
		if (image['selected']) this.__unSelect(image);
		else this.__select(image);
	}


	private static __select(image) {
		image['selected'] = true;
		selectedImageNames.data.push(image.name);
	}


	private static __unSelect(image) {
		delete image['selected'];
		removeFirstOf(image.name, selectedImageNames.data);
	}


}
