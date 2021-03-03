import { Directive, OnInit } from '@angular/core';
import { ClearFormDataService as clearFormData } from '@services/clear-form-data.service';


@Directive({
	selector: '[clearFormOnInit]'
})
export class ClearFormOnInitDirective implements OnInit {

	ngOnInit(): void {
		clearFormData.go();
	}

}
