import { Settable } from '@interfaces/settable.interface';
import { Gettable } from '@interfaces/gettable.interface';


export interface DataContainer<T> extends Settable, Gettable<T> {
}
