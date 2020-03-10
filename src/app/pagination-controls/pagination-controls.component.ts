import { Component, Input, OnInit } from '@angular/core';
import { PaginatorService } from '../services/paginator/paginator.service';


@Component({
	selector: 'app-pagination-controls',
	templateUrl: './pagination-controls.component.html',
	styleUrls: ['./pagination-controls.component.css']
})
export class PaginationControlsComponent implements OnInit {

	@Input() paginator: PaginatorService;


	get nextPage() {
		return this.paginator.currentPageNumber + 1;
	}


	constructor() {
	}


	ngOnInit(): void {
	}

}
