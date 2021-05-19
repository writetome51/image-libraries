import { Component, Input } from '@angular/core';
import { JumpToPageInputService } from './jump-to-page-input.abstract.service';


@Component({
	selector: 'jump-to-page-controls',
	template: `
		<app-validating-form-input [data]="input.data"></app-validating-form-input>
		<a [routerLink]="['/' + routeBeforePageNumber, input.getValue()]">Go</a>
	`
})
export class JumpToPageControlsComponent {

	@Input() input: JumpToPageInputService;
	@Input() routeBeforePageNumber: string;

}
