import { Directive, Input, OnDestroy } from '@angular/core';
import { Unsubscribable } from 'rxjs';


@Directive({
	selector: '[unsubscribeOnDestroy]'
})
export class UnsubscribeOnDestroyDirective implements OnDestroy {

	@Input() subscriptions: Unsubscribable[];


	ngOnDestroy() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
	}

}
