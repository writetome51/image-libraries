export interface ResettableToDefault {

	setDefault: () => void;

	[propName: string]: any;

}
