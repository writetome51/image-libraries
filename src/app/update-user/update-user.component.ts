import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserChoiceData } from './update-user-choice.data';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update';
	choicesMap = UpdateUserChoiceData;
	choices = Object.keys(this.choicesMap);


	constructor(private __router: Router) {
	}


	getFormHeading(): string {
		let url = this.__router.routerState.snapshot.url;

		for (let i = 0; i < this.choices.length; ++i) {
			let map: { path: string, heading: string } = this.choicesMap[this.choices[i]];

			if (url.endsWith(`/${map.path}`)) {
				return map.heading;
			}
		}
	}

}
