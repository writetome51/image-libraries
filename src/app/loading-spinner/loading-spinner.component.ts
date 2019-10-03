import { Component } from '@angular/core';


@Component({
	selector: 'loading-spinner',
	template: `<img [src]="spinner200.src" [width]="spinner200.width" alt="waiting for response"/>`,
	styles: ['img{z-index: 1000; position: fixed;}']
})
export class LoadingSpinnerComponent {

	spinner400 = {
		src: '../../assets/loading-spinner-400.gif',
		width: 407,
		height: 406,
	};

	spinner200 = {
		src: '../../assets/loading-spinner-200.gif',
		width: 204,
		height: 203,
	};


}
