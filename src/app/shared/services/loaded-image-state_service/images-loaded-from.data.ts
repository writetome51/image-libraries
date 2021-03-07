// import {ResettableToDefault} from '@interfaces/resettable-to-default';


export class ImagesLoadedFromData { // implements ResettableToDefault

	static __data: 'all' | 'library' | 'nowhere';
	static __library: boolean;
	static __nowhere: boolean;


	static set status(value: 'all' | 'library' | 'nowhere') {
		this.__data = value;
	}


	static get status() {
		return this.__data;
	}


	static setDefault() {
		this.status = 'nowhere';
	}

}
