import { PageData } from './page.data';


export class BatchData {

	static number: number;

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		if (value < PageData.size) value = PageData.size;
		this.__size = value;
	}


	static setDefault() {
		this.number = 1;
		this.size = PageData.size * 2;
	}

}
