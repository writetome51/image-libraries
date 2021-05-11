import { Component } from '@angular/core';
import { HTMLImage } from '@interfaces/html-image.interface';
import { environment } from '@environments/environment';


@Component({
	selector: 'delete-user-form-instructions',
	template: `
		<div>
			<html-image [data]="explodingHead"></html-image>

			<p class="warning-text">You cannot undo this.</p>
			<p>If you wish to proceed, enter your info and click Delete</p>
		</div>
	`
})
export class DeleteUserFormInstructionsComponent {

	explodingHead: HTMLImage = {
		src: environment.assets + 'head-exploding.gif',
		alt: 'Exploding head',
		width: 124
	};

}
