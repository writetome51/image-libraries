// Represents a <form> input that validates itself.
// Framework independent.

export interface ValidatingInput {

	type: string;
		// Can be 'text', 'password', 'number', etc.  Any <input> type is allowed, but so far this is
		// only intended for 'text', 'password', or 'number'.

	id: string;
		// assigned to <input> id. Same value is used for 'name' attribute.  It's also
		// the same value given to the input's associated <label> 'for' attribute.

	isValid: (() => boolean) | (() => boolean)[];
		// Called during input event 'onblur'.
		// Can be function or array of functions.  If array of functions:
		//   - this.errorMessage must be array of error messages, each one belonging with
		//     function of same index.
		//   - The functions are called in the order they're listed.

	errorMessage: string | string[]; // message to show if input is invalid

	error: string; // Empty string.  If input is invalid, this is assigned this.errorMessage

	objectToBind: any;
		// this.objectToBind[this.propertyToBind] is the variable storing the value of this input.

	propertyToBind: string; // property in this.objectToBind

	required: boolean;

	label: string; // same value is used for 'placeholder' attribute

	hideLabel: boolean; // Adds 'hidden' attribute to input's associated <label>

	hidePlaceholder: boolean;

	prompt?: string; // text explaining input or asking user to fill it in

	objectToMatch?: any;
		// this.objectToMatch[this.propertyToMatch] is the variable storing the value of another
		// input -- an input whose value is supposed to match with this one.
		// Example: if one <input> is for 'password' and another <input> is for 'confirm-password',
		// you need to make sure they match.  The ValidatingInput representing 'confirm-password'
		// would need its objectToMatch[propertyToMatch] to be the object[property] storing the
		// value of 'password'.  this.objectToMatch[this.propertyToMatch] can then be checked in
		// this.isValid if it matches this.objectToBind[this.propertyToBind].

	propertyToMatch?: string; // property in this.objectToMatch

	max?: number; // max value allowed if this.type is 'number'

	min?: number; // min value allowed if this.type is 'number'

	maxLength?: number; // if this.type is 'text' or 'password'

	minLength?: number; // if this.type is 'text' or 'password'
}
