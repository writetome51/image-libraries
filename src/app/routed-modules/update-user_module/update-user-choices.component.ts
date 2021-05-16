import { Component, Input, OnInit } from '@angular/core';
import { Link } from '@interfaces/link.interface';
import { LinkedTemplateWithHeading }
	from './linked-template-with-heading_interface/linked-template-with-heading.interface';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';


@Component({
	selector: 'update-user-choices',
	template: `
		<nav>
			<navigation-links [data]="links"></navigation-links>
		</nav>
	`
})
export class UpdateUserChoicesComponent extends HasDataInputComponent<LinkedTemplateWithHeading[]>
	implements OnInit {

	links: Link[];


	ngOnInit() {
		this.links = this.data.map((template: LinkedTemplateWithHeading) => template.link);
	}

}
