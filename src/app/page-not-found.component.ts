import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'page-not-found',
	template: `
		<h2>Oops. Page not found.</h2>
		<html-image [data]="faces"></html-image>
		<p>This could make you happy or sad. It depends on you.</p>
	`
})
export class PageNotFoundComponent {

	faces = {
		src: environment.assets + 'happy-or-sad.png',
		alt: 'happy and sad faces',
		width: 362
	};
}
