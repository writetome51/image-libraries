import { Component, HostListener } from '@angular/core';
import { DocumentDBService } from './services/db.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Library';


	constructor(public db: DocumentDBService) {
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


}
