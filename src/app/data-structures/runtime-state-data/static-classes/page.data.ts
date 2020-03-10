export class PageData {

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		this.__size = value;
	}


	static setDefault() {
		this.size = 20;
	}

}
