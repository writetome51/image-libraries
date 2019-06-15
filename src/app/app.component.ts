import { Component, HostListener } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'Image Library';
	createNewLibrary = false;
	showLibraryChooser = false;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		console.log(event);
	}


	logEvent(event) {
		console.log(event);
	}
}
