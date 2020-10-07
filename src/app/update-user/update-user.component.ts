import { Component } from '@angular/core';
import { UpdateUserChoiceData } from './update-user-choice.data';
import { CurrentRouteService } from '@services/current-route.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update';
	choicesMap = UpdateUserChoiceData;
	choices = Object.keys(this.choicesMap);


	constructor(private __currentRoute: CurrentRouteService) {
	}


	getFormHeading(): string {
		let url = this.__currentRoute.data;

		for (let i = 0; i < this.choices.length; ++i) {
			let map: { path: string, heading: string } = this.choicesMap[this.choices[i]];

			if (url.endsWith(`/${map.path}`)) {
				return map.heading;
			}
		}
	}

}
