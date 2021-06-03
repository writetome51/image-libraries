import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image.interface';


@Component({
	selector: 'page-not-found',
	template: `
		<h2>Not found.</h2>
		<html-image [data]="faces"></html-image>
		<p>This could make you happy or sad. It depends on you.</p>
	`
})
export class PageNotFoundComponent {

	readonly faces: HTMLImage = {
		src: environment.assets + 'happy-or-sad.png',
		alt: 'happy and sad faces',
		width: 362
	};
}
