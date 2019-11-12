// Represents a <form> input that validates itself.
// Framework independent.

export interface ValidatingInput {

	type: string; // 'text', 'password', etc.  Any <input> type

	id: string; // becomes value of <input> id

	isValid: () => boolean | (() => boolean)[];
		// Called during input event 'onblur'.
		// Can be function or array of functions.  If array of functions:
		//   - this.errorMessage must be array of error messages, each one belonging with
		//     function of same index.
		//   - The functions are called in the order they're listed.

	errorMessage: string | string[]; // message to show if input is invalid

	error: string; // Empty string.  If input is invalid, this is assigned this.errorMessage

	objectToBind: any; // <input> intended to bind with this.objectToBind[this.propertyToBind]

	propertyToBind: string; // property in this.objectToBind

	hideLabel: boolean; // whether or not to make <label> hidden

	required: boolean;

	placeholder: string; // is also used as label

	prompt?: string; // text explaining input or asking user to fill it in

}
