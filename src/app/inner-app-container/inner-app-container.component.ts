import { Component } from '@angular/core';
import { LocalSessionIDService }
	from '../services/authentication/local-session-id.service';


@Component({
	selector: 'inner-app-container',
	templateUrl: './inner-app-container.component.html'
})
export class InnerAppContainerComponent {

	title = 'Image Libraries';


	constructor(private __localSessionID: LocalSessionIDService) {
	}


	get sessionIDExists() {
		return (this.__localSessionID.get());
	}

}
