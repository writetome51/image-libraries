export interface Gettable<T> {

	get: () => T;

	[propName: string]: any;

}
