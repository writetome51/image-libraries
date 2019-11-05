import { ValidatingInput } from './validating-input';


export interface ComparisonValidatingInput extends ValidatingInput {

	objectToCompare: any;
		// objectToCompare[propertyToCompare] intended to be compared with objectToBind[propertyToBind]

	propertyToCompare: string; // property in objectToCompare

}
