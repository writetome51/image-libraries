import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { getByIndex } from '@writetome51/array-get-by-index';
import { getByTest } from '@writetome51/array-get-by-test';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { UpdateUserChoicesData as updateChoices} from './update-user-choices.data';


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
		let path = this.__getPathFromCurrentRoute();

		let [choice] = getByTest(
			(choice: LinkedTemplateWithHeading) => choice.link.path === path,
			this.choices
		);
		return choice.heading;
	}


	private __getPathFromCurrentRoute() {
		let url = this.__currentRoute.data;
		return getByIndex(-1, url.split('/'));
	}

}
