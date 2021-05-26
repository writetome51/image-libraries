import { HasAny } from '@interfaces/has-any.interface';


export interface Gettable<T> extends HasAny {

	get: () => T;

}
