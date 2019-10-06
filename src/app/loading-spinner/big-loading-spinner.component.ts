import { Component } from '@angular/core';


@Component({
	selector: 'big-loading-spinner',
	template: `
		<div>
			<img [src]="bigSpinner.src" [width]="bigSpinner.width" alt="Waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})
export class BigLoadingSpinnerComponent {


	bigSpinner = {
		src: '../../assets/loading-spinner-400.gif',
		width: 407,
		height: 406,
	};


}
