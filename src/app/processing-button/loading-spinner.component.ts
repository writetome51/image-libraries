import { Component } from '@angular/core';


@Component({
	selector: 'app-loading-spinner',
	template: `
		<div>
			<img [src]="littleSpinner.src" [width]="littleSpinner.width" alt="Waiting for response"/>
		</div>
	`,
	styles: [`div { position: relative; }`]
})
export class LoadingSpinnerComponent {

	littleSpinner = {
		src: '../../assets/loading-spinner-50.gif',
		width: 35,
		height: 35,
	};

}
