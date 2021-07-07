import { HasAny } from '@interfaces/has-any.interface';


export interface Gettable<TypeToGet> extends HasAny {

	get: () => TypeToGet;

}
