export class LoadedImagesStatusData {

	static data: 'all' | 'library' | 'none';


	static setDefault() {
		this.data = 'none';
	}

}
