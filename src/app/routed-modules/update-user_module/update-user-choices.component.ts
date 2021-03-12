import { Component, Input, OnInit } from '@angular/core';
import { Link } from '@interfaces/link.interface';
import { LinkedTemplateWithHeading }
	from './linked-template-with-heading_interface/linked-template-with-heading.interface';


@Component({
	selector: 'update-user-choices',
	template: `
		<nav>
			<navigation-links [data]="links"></navigation-links>
		</nav>
	`
})
export class UpdateUserChoicesComponent implements OnInit {

	@Input() data: LinkedTemplateWithHeading[];

	links: Link[];


	ngOnInit() {
		this.links = this.data.map((template: LinkedTemplateWithHeading) => template.link);
	}

}
