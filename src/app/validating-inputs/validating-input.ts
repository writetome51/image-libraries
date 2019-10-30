export interface ValidatingInput {

	type: string; // 'text', 'password', etc.  Any <input> type

	id: string; // becomes value of <input> id

	isValid: boolean; // probably needs to be a function returning boolean

	errorMessage: string; // message to show if input is invalid

	error: string; // Empty string.  If input is invalid, this is assigned the errorMessage

	propertyToBind: any; // bind to this property using [(ngModel)]

	required: boolean;

	minLength?: number; // minimum num characters for text or password inputs

	placeholder?: string; // only used on text or password inputs

	prompt?: string; // line of text explaining input or asking user to fill it in

}
