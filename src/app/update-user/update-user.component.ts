import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserChoicesMapService as choicesMap } from './update-user-choices-map.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update Account';


	get formHeading() {
		let url = this.__router.routerState.snapshot.url;
		let choices = Object.keys(choicesMap);

		for (let i = 0; i < choices.length; ++i) {
			let map: { path: string, heading: string } = choicesMap[choices[i]];

			if (url.endsWith(`/${map.path}`)) {
				return map.heading;
			}
		}
	}


	constructor(private __router: Router) {
	}

}
