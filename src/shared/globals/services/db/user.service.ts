import { IUserDocument } from '@user/interfaces/userDocument.interface';
import { UserModel } from '@user/models/user.schema';
import mongoose from 'mongoose';

//Principio SOLID Open/Close
class UserService {
	public async addUserData(data: IUserDocument): Promise<void> {
		await UserModel.create(data);
	}

	public async getUserById(userId: string): Promise<IUserDocument> {
		const users: IUserDocument[] = await UserModel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(userId) } },
			{ $lookup: { from: 'Auth', localField: 'authId', foreignField: '_id', as: 'authId' } },
			{ $unwind: '$authId' },
			{ $project: this.aggregateProject() }
		]);
		return users[0];
	}

	private aggregateProject() {
		return {
			_id: 1,
			username: '$authId.username',
			uId: '$authId.uId',
			email: '$authId.email',
			firstName: '$firstName',
			lastName: '$lastName',
			createdAt: '$authId.createdAt',
			petsOwned: 1,
			profilePicture: 1
		};
	}
}

export const userService: UserService = new UserService();
