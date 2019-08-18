import { Component } from '@angular/core';

@Component({
  selector: 'enter-image-url',
  templateUrl: './enter-image-url.component.html'
})
export class EnterImageURLComponent {

  constructor() { }

	addURLToLibrary(): void {
		if (isEmpty(this.imgURL)) {
			alert('Please enter a URL first.');
			return;
		}
		this.__imageURLProcessor.process(this.imgURL);
		this.__imgURL = '';
	}



}
