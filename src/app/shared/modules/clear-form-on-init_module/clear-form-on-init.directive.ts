import { Directive, Input, OnInit } from '@angular/core';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';


@Directive({ selector: '[clearFormOnInit]' })
export class ClearFormOnInitDirective implements OnInit {

	@Input() inputData : ResettableToDefault[];


	ngOnInit(): void {
		for (let i = 0, length = this.inputData.length; i < length; ++i) {
			this.inputData[i].setDefault();
		}
	}

}
