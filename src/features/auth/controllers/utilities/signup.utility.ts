import { ObjectId } from 'mongodb';
import JWT from 'jsonwebtoken';
import { IAuthDocument } from '@auth/interfaces/authDocument.interface';
import { config } from '@configs/configEnvs';
import { ISignUpData } from '@auth/interfaces/signUpData.interface';
import { Generators } from '@helpers/generators/generators';
import { IUserDocument } from '@user/interfaces/userDocument.interface';

export abstract class SignUpUtility {
	protected signToken(data: IAuthDocument, userObjectId: ObjectId): string {
		return JWT.sign(
			{
				userId: userObjectId,
				uId: data.uId,
				email: data.email,
				username: data.username
			},
			config.JWT_TOKEN!
		);
	}

	protected signUpData(data: ISignUpData): IAuthDocument {
		const { _id, username, email, uId, password } = data;
		return {
			_id,
			uId,
			username: Generators.firstLetterUppercase(username),
			email: Generators.lowerCase(email),
			password,
			createdAt: new Date()
		} as IAuthDocument;
	}

	protected userData(data: IAuthDocument, userObjectId: ObjectId): IUserDocument {
		const { _id, username, email, uId, password } = data;
		return {
			_id: userObjectId,
			authId: _id,
			uId,
			username: Generators.firstLetterUppercase(username),
			email,
			password,
			firstName: '',
			lastName: '',
			profilePicture: '',
			petsOwned: 0
		} as unknown as IUserDocument;
	}
}
