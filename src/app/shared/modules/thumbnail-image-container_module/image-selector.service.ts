import { SelectedImagesData as selectedImages } from '@runtime-state-data/selected-images.data';
import { removeByTest } from '@writetome51/array-remove-by-test';


export class ImageSelectorService {

	static toggleSelect(image: { name: string, _id: string, selected?: boolean }) {
		if (image.selected) this.__unSelect(image);
		else this.__select(image);
	}


	private static __select(image) {
		image['selected'] = true;
		selectedImages.data.push({name: image.name, _id: image._id});
	}


	private static __unSelect(image: { _id: string, selected?: boolean }) {
		delete image.selected;
		removeByTest(
			(selectedImg: { _id: string }) => selectedImg._id === image._id,
			selectedImages.data
		);
	}

}
