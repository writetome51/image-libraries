export interface DataContainer<T> {

	get: () => T;

	set?: (arg?) => any;

}
