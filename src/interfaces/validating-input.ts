export interface ValidatingInput {
	type: string;
	id: string;
	propertyToBind: any;
	placeholder: string;
	required: boolean;
	isValid: boolean;
	errorMessage: string; // message to show if input is invalid.
	error: string; // If input is invalid, it's assigned value of errorMessage.
	minLength?: number;
	prompt?: string;
}
