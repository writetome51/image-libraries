import { Component, OnInit } from '@angular/core';
import { Link } from '@interfaces/link.interface';
import { LinkedTemplateWithHeading }
	from './linked-template-with-heading_interface/linked-template-with-heading.interface';
import { HasDataInputDirective }
	from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'update-user-choices',
	template: `
		<nav>
			<navigation-links [data]="links"></navigation-links>
		</nav>
	`
})
export class UpdateUserChoicesComponent extends HasDataInputDirective<LinkedTemplateWithHeading[]>
	implements OnInit {

	links: Link[];


	ngOnInit() {
		this.links = this.data.map((template: LinkedTemplateWithHeading) => template.link);
	}

}
