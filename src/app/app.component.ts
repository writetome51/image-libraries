import { Component, HostListener } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Library';


	constructor() {
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


}
