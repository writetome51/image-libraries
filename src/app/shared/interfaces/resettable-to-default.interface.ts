import { HasAny } from '@interfaces/has-any.interface';


export interface ResettableToDefault extends HasAny {

	setDefault: () => void;

}
