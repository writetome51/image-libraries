import { OnDestroy, OnInit } from '@angular/core';
import { ActiveProgressBarCountData as activeProgressBarCount }
	from '@runtime-state-data/active-progress-bar-count.data';


export abstract class AppProgressBarComponent implements OnInit, OnDestroy {

	ngOnInit() {
		++activeProgressBarCount.data;
	}


	ngOnDestroy() {
		--activeProgressBarCount.data;
	}

}
