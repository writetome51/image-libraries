import { ValidatingInput } from './validating-input';


export interface MatchingValidatingInput extends ValidatingInput {

	objectToMatch: any;
		// objectToMatch[propertyToMatch] is intended to be matched with objectToBind[propertyToBind].
		// Example: if one <input> is for 'password' and another <input> is for 'confirm password',
		// you need to make sure they match.  That's when you would use this.

	propertyToMatch: string; // property in objectToMatch

}
