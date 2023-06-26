import { ObjectId } from 'mongodb';

export interface IUserDocument extends Document {
	_id: string | ObjectId;
	authId: string | ObjectId;
	username?: string;
	email?: string;
	password?: string;
	uId?: string;
	firstName: string;
	lastName: string;
	profilePicture?: string;
	petsOwned?: number;
	passwordResetToken?: string;
	passwordResetExpires?: number | string;
	createdAt?: Date;
}
