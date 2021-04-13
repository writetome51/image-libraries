import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';


@Injectable({providedIn: NewUserServicesModule})
export class HandleCreateUserErrorService {

	async go(error: {message: string}) {

	}

}
