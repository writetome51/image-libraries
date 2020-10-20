import { Component } from '@angular/core';
import { environment } from '@environments/environment';


// This component only exists to test out FrameComponent

@Component({
	selector: 'test-frame',
	template: `
		<span class="test-frame" *ngFor="let image of images"
			  frame [frame.title]="image.title" [frame.description]="image.description"
		>
			<img [src]="image.src" alt=""/>
		</span>
	`,
	styleUrls: ['./test-frame.component.css']
})
export class TestFrameComponent {

	images = [
		{
			src: environment.assets + 'abstract1.jpeg',
			title: 'abstract 1',
			description: 'an abstract photo'
		},

		{
			src: environment.assets + 'abstract2.jpeg',
			title: 'abstract 2',
			description: 'another abstract photo'
		},

	];

}
