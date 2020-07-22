import { AppImage } from '../../../../interfaces/app-image';


// Stores images not yet saved to db.

export class NewImagesData {

	static data: AppImage[];


	static setDefault() {
		this.data = [];
	}

}
