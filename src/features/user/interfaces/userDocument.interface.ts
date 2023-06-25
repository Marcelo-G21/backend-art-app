import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IUserDocument extends Document {
	_id: string | ObjectId;
	authId: string | ObjectId;
	username?: string;
	email?: string;
	password?: string;
	uId?: string;
	profilePicture: string;
	petsCount?: number;
	passwordResetToken?: string;
	passwordResetExpires?: number | string;
	createdAt?: Date;
}
