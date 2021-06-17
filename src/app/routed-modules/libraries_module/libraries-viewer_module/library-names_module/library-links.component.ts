import { Component, Input } from '@angular/core';


@Component({
	selector: 'library-links',
	template: `
		<ul>
			<li *ngFor="let label of labels">
				<a [routerLink]="['/library', label, 'page', 1]">{{ label }}</a>
			</li>
		</ul>
	`
})
export class LibraryLinksComponent {

	@Input() labels: string[];

}
