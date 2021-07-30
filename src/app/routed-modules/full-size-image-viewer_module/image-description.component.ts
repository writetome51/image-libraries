import { Component } from '@angular/core';


@Component({
	selector: 'image-description',
	template: `
		<label for="image-description" hidden>Image Description</label>
		<input type="text" id="image-description"/>
	`
})
export class ImageDescriptionComponent {}
