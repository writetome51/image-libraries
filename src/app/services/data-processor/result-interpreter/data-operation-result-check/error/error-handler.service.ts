import { ErrorHandler } from '../../../../../../interfaces/error-handler';


export abstract class ErrorHandlerService implements ErrorHandler {

	abstract handle(...args): any

}
