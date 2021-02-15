import { Component, Input } from '@angular/core';
import { LinkedTemplateWithHeading } from './linked-template-with-heading.interface';
import { Link } from '@interfaces/has-label/link/link.interface';


@Component({
	selector: 'update-user-choices',
	template: `
		<nav>
			<navigation-links [data]="links"></navigation-links>
		</nav>
	`
})
export class UpdateUserChoicesComponent {

	@Input() data: LinkedTemplateWithHeading[];

	links: Link[] = this.data.map((template: LinkedTemplateWithHeading) => template.link);

}
