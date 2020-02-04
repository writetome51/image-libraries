import { Subscribable } from 'rxjs';


export interface HasSubscribable<T> {
	subscribable: Subscribable<T>;
}
