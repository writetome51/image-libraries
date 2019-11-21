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

		for (let i = 0; i < choicesMap.choices.length; ++i) {
			let choice = choicesMap.choices[i];
			let map: { path: string, component: Function, heading: string } = choicesMap[choice];

			if (url.endsWith(`/${map.path}`)) {
				return map.heading;
			}
		}
	}


	constructor(private __router: Router) {
	}

}
