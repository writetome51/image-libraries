// import { UserRecord } from './user-record.interface';

export interface HasUserIDKey {

	// Unique, never changes.
	// Foreign key, relating to `UserRecord._id`
	_user_id: string;

}
