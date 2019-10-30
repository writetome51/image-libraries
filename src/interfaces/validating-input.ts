export interface ValidatingInput {
	type: string;
	id: string;
	propertyToBind: any;
	placeholder: string;
	required: boolean;
	isValid: boolean;
	errorMessage: string;
	minLength?: number;
	prompt?: string;
}
