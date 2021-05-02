import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { DeletingAllUserImagesProgressData as progress }
	from '@runtime-state-data/deleting-all-user-images-progress.data';


@Component({
	selector: 'deleting-image-files-progress-bar',
	template: `<div #div id="progress-bar">0 %</div>`,
	styles: [
		`#progress-bar {
			width: 1px;
			height: 30px;
			padding-left: 10px;
			background-color: #04AA6D;
			text-align: left;
			line-height: 30px;
			color: white;
		}`
	]
})


export class DeletingImageFilesProgressBarComponent implements OnDestroy, AfterViewInit {

	@ViewChild('div') progressBar: ElementRef;
	private __interval;


	ngAfterViewInit() {

		this.__interval = setInterval(
			() => {
				this.progressBar.nativeElement.style.width =
					progress.percentageComplete * 10 + 'px';
				this.progressBar.nativeElement.innerHTML = progress.percentageComplete + ' %';
			},
			100
		);
	}


	ngOnDestroy() {
		clearInterval(this.__interval);
		progress.percentageComplete = 0;
	}

}
