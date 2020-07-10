import { PageData as page} from './page.data';


export class LoadData {

	static number: number;

	private static __size;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		if (value < page.size) value = page.size;
		this.__size = value;
	}


	static setDefault() {
		this.number = 1;
		this.size = page.size * 2;
	}

}
