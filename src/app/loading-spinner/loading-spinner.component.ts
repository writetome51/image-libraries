import { Component } from '@angular/core';


@Component({
	selector: 'loading-spinner',
	template: `
		<div>
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" alt="waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})
export class LoadingSpinnerComponent {


	littleSpinner = {
		src: '../../assets/loading-spinner-200.gif',
		width: 204,
		height: 203,
	};


}
