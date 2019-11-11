// Represents a <form> input that validates itself.
// Framework independent.

export interface ValidatingInput {

	type: string; // 'text', 'password', etc.  Any <input> type

	id: string; // becomes value of <input> id

	isValid: () => boolean | (() => boolean)[];
		// To be called during an input event, like 'onblur'.
		// Can be function or array of functions.
		// If array of functions, this.errorMessage must be array of error messages,
		// each one corresponding with function of same index.
		// I.E., if this.isValid[i]() returns false, then this.errorMessage[i] must
		// be the message assigned to this.error.

	errorMessage: string | string[]; // message to show if input is invalid

	error: string; // Empty string.  If input is invalid, this is assigned this.errorMessage

	objectToBind: any; // <input> intended to bind with this.objectToBind[this.propertyToBind]

	propertyToBind: string; // property in this.objectToBind

	hideLabel: boolean; // if true, the inputs <label> is hidden

	required: boolean;

	placeholder: string; // is also used as label

	prompt?: string; // line of text explaining input or asking user to fill it in

}
