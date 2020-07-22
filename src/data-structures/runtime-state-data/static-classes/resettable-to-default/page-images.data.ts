import { DBImage } from '../../../../interfaces/db-image';


export class PageImagesData {

	static data: DBImage[];


	static setDefault() {
		this.data = undefined;
	}
}
