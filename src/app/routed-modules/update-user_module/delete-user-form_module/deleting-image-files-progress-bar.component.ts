import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DeletingAllUserImagesProgressData as progress }
	from '@runtime-state-data/deleting-all-user-images-progress.data';


@Component({
	selector: 'deleting-image-files-progress-bar',
	template: `
		<div #progressBar id="progressBar">0 %</div>`,
	styles: [
		`#progressBar {
			width: 0;
			height: 30px;
			padding-left: 10px;
			background-color: #04AA6D;
			text-align: left;
			line-height: 30px;
			color: white;
		}`
	]
})


export class DeletingImageFilesProgressBarComponent implements OnInit, OnDestroy {

	@ViewChild('progressBar') progressBar: ElementRef;
	private __interval;


	ngOnInit() {
		this.__interval = setInterval(this.__stretch, 100);
	}


	ngOnDestroy() {
		progress.percentageComplete = 0;
	}


	private __stretch() {
		if (progress.percentageComplete >= 100) {
			clearInterval(this.__interval);
		}
		else {
			this.progressBar.nativeElement.style.width = progress.percentageComplete + ' %';
			this.progressBar.nativeElement.innerHTML = progress.percentageComplete + ' %';
		}
	}

}
