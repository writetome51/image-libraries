import { Component } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
	selector: 'big-loading-spinner',
	template: `
		<div class="big-loading-spinner-container">
			<img [src]="bigSpinner.src" [width]="bigSpinner.width" alt="Waiting for result"/>
		</div>
	`,
	styleUrls: ['./big-loading-spinner.component.css']
})
export class BigLoadingSpinnerComponent {

	bigSpinner = {
		src: environment.assets  + 'loading-gear-225px.gif',
		width: 225,
		height: 225,
	};

}
