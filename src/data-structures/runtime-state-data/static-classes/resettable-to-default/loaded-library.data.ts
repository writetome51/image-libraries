import { DBLibrary } from '../../../../interfaces/db-library';


export class LoadedLibraryData {

	static data: DBLibrary;


	static setDefault() {
		this.data = undefined;
	}


	static get _id() {
		return this.data._id;
	}


	// Can't call this property 'name' because it conflicts with built-in constructor

	static get libName() {
		return this.data.name;
	}


	static get _image_ids() {
		return this.data._image_ids;
	}


	static get _user_id() {
		return this.data._user_id;
	}

}
