// import { DBUser } from './db-user.interface';

export interface HasUserIDKey {

	// Unique, never changes.
	// Foreign key, relating to `DBUser._id`
	_user_id: string;

}
