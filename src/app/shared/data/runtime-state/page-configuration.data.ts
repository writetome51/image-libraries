export const PageConfigurationData =  class __PageData {

	private static __size = 10;


	static get size(): number {
		return this.__size;
	}


	static set size(value) {
		if (value < 1) value = 1;
		this.__size = value;
	}

};
