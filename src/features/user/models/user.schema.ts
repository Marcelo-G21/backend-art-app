import { IUserDocument } from '../interfaces/userDocument.interface';
import mongoose, { model, Model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
	authId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth' },
	profilePicture: { type: String, default: '' },
	firstName: { type: String, default: '' },
	lastName: { type: String, default: '' },
	petsOwned: { type: Number, default: 0 },
	passwordResetToken: { type: String, default: '' },
	passwordResetExpires: { type: Number }
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');
export { UserModel };
