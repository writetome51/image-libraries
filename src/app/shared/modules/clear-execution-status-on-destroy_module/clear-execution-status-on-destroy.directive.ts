import { Directive, Input, OnDestroy } from '@angular/core';
import { Waiter } from '@interfaces/waiter.interface';


@Directive({
	selector: '[clearExecutionStatusOnDestroy]'
})
export class ClearExecutionStatusOnDestroyDirective implements OnDestroy {

	@Input() executionStatus: Waiter


	ngOnDestroy(): void {
		this.executionStatus.waiting = false;
	}

}
