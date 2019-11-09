import { ValidatingInput } from './validating-input';


export interface MatchingValidatingInput extends ValidatingInput {

	objectToMatch: any;
		// objectToMatch[propertyToMatch] intended to be matched with objectToBind[propertyToBind]

	propertyToMatch: string; // property in objectToMatch

}
