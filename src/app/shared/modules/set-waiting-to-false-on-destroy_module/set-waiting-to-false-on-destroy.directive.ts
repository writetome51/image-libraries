import { Directive, Input, OnDestroy } from '@angular/core';
import { Waiter } from '@interfaces/waiter.interface';


@Directive({
	selector: '[setWaitingToFalseOnDestroy]'
})
export class SetWaitingToFalseOnDestroyDirective implements OnDestroy {

	@Input() waiter: Waiter


	ngOnDestroy(): void {
		this.waiter.waiting = false;
	}

}
