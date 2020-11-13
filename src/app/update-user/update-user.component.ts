import { Component } from '@angular/core';
import { UpdateUserChoicesData } from './update-user-choices.data';
import { CurrentRouteService } from '@services/current-route.service';
import { getByIndex } from '@writetome51/array-get-by-index';
import { getByTest } from '@writetome51/array-get-by-test';
import { VariableSubcomponent } from '@interfaces/variable-subcomponent';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update';
	choices = UpdateUserChoicesData;
	choiceKeys = Object.keys(this.choices);


	constructor(private __currentRoute: CurrentRouteService) {
	}


	getChoiceLinkRoute(choiceKey) {
		return this.choices[choiceKey].link.path;
	}


	getChoiceLinkLabel(choiceKey) {
		return this.choices[choiceKey].link.label;
	}


	getChoiceHeading(): string {
		let url = this.__currentRoute.data;
		let path = getByIndex(-1, url.split('/'));

		let [choice] = getByTest(
			(choice: VariableSubcomponent) => choice.link.path === path,
			Object.values(this.choices)
		);
		return choice.heading;
	}

}
