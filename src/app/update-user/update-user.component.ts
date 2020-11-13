import { Component } from '@angular/core';
import { UpdateUserChoicesData as updateChoices} from './update-user-choices.data';
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
	choices = updateChoices.data;


	constructor(private __currentRoute: CurrentRouteService) {
	}


	getChoiceLinkRoute(index) {
		return this.choices[index].link.path;
	}


	getChoiceLinkLabel(index) {
		return this.choices[index].link.label;
	}


	getChoiceHeading(): string {
		let url = this.__currentRoute.data;
		let path = getByIndex(-1, url.split('/'));

		let [choice] = getByTest(
			(choice: VariableSubcomponent) => choice.link.path === path,
			this.choices
		);
		return choice.heading;
	}

}
