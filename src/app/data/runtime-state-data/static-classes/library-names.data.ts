// Stores names of all libraries belonging to currently logged-in user

export class LibraryNamesData {

	static data: string[];


	static setDefault() {
		this.data = undefined;
	}

}
