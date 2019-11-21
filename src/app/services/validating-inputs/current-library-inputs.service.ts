import { Bind_ValidatingInputsService_to_Object }
	from './bind-validating-inputs-service-to-object.decorator';
import { AppValidatingInputsService } from './app-validating-inputs.service';
import { CurrentLibraryService } from '../library/current-library.service';


@Bind_ValidatingInputsService_to_Object(CurrentLibraryService)

export abstract class CurrentLibraryInputsService extends AppValidatingInputsService {
}
