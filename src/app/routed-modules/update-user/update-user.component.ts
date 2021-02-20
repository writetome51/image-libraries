import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { getByIndex } from '@writetome51/array-get-by-index';
import { getByTest } from '@writetome51/array-get-by-test';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { UpdateUserChoiceData } from './update-user-choice.data';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update';
	choices: LinkedTemplateWithHeading[] = Object.values(UpdateUserChoiceData);


	constructor(private __currentRoute: CurrentRouteService) {
	}


	getChoiceHeading(): string {
		let currentPath = this.__getCurrentChoicePath();

		let [choice] = getByTest(
			(choice: LinkedTemplateWithHeading) => choice.link.path === currentPath,
			this.choices
		);
		return choice.heading;
	}


	private __getCurrentChoicePath() {
		let url = this.__currentRoute.get();
		return getByIndex(-1, url.split('/'));
	}

}
