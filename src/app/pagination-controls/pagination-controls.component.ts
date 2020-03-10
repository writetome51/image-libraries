import { Component, Input, OnInit } from '@angular/core';
import { PaginatorService } from '../services/paginator/paginator.service';
import {
	ValidatingInputService,
	ValidatingNumberInputService
} from '@writetome51/validating-inputs';


@Component({
	selector: 'app-pagination-controls',
	templateUrl: './pagination-controls.component.html',
	styleUrls: ['./pagination-controls.component.css']
})
export class PaginationControlsComponent implements OnInit {

	@Input() paginator: PaginatorService;
	@Input() jumpToPageNumberInput: ValidatingNumberInputService;

	get currentPage(){
		return this.paginator.currentPageNumber;
	}

	get totalPages(){
		return this.paginator.totalPages;
	}

	get nextPage() {
		return this.paginator.currentPageNumber + 1;
	}


	get previousPage() {
		return this.paginator.currentPageNumber - 1;
	}


	ngOnInit(): void {
	}

}
