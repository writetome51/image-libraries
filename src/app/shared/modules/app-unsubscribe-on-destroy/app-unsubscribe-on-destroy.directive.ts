import { Directive, Input } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Directive({
	selector: '[unsubscribeOnDestroy]'
})
export class AppUnsubscribeOnDestroyDirective extends UnsubscribeOnDestroyDirective {

	@Input() set subscriptions(value: Unsubscribable[]) {
		this._subscriptions = value;
	}

}
