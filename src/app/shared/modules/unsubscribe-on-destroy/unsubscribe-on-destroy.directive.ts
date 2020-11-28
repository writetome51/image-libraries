import { Directive, Input } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';


@Directive({
	selector: '[unsubscribeOnDestroy]'
})
export class UnsubscribeOnDestroyDirective extends UnsubscribeOnDestroyComponent {

	@Input() set subscriptions(value: Unsubscribable[]) {
		this._subscriptions = value;
	}

}
