import { Directive, OnInit } from '@angular/core';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';


@Directive({ selector: '[resetToDefaultOnInit]' })
export class ResetToDefaultOnInitDirective extends HasDataInputDirective<ResettableToDefault[]>
	implements OnInit {

	ngOnInit(): void {
		for (let i = 0, length = this.data.length; i < length; ++i) {
			this.data[i].setDefault();
		}
	}

}
