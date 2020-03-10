import { PageData } from './page.data';


export class BatchSizeData {

	private static __data;


	static get data(): number {
		return this.__data;
	}


	static set data(value) {
		if (value < PageData.size) value = PageData.size;
		this.__data = value;
	}


	static setDefault() {
		this.data = PageData.size * 2;
	}

}
