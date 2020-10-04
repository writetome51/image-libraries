import { Component } from '@angular/core';
import { environment } from '@environments/environment';


@Component({
	selector: 'submenu-pointer',
	template: `
		<img [src]="pointer.src" [width]="pointer.width" [height]="pointer.height"
			 [alt]="pointer.alt"
		/>
	`
})
export class SubmenuPointerComponent {

	pointer = {
		src: environment.assets + 'submenu-pointer.png',
		width: 7,
		height: 8,
		alt: 'sub-menu'
	};

}
