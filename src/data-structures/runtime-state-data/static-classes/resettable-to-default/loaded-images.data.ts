import { DBImage } from '../../../../interfaces/db-image';


export class LoadedImagesData {

	static data: DBImage[];


	static setDefault() {
		this.data = undefined;
	}
}
