import { Directive, Input, OnInit } from '@angular/core';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


@Directive({ selector: '[resetToDefaultOnInit]' })
export class ResetToDefaultOnInitDirective 	implements OnInit {

	@Input() resettables: ResettableToDefault[];


	ngOnInit(): void {
		for (let i = 0, length = this.resettables.length; i < length; ++i) {
			this.resettables[i].setDefault();
		}
	}

}
