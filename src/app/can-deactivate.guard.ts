import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<> {

}
