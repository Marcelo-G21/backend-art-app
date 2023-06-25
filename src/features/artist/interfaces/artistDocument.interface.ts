import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { INotificationSettings } from './notificationSettings.interface';
import { ISocialLinks } from './socialLinks.interface';

export interface IArtistDocument extends Document {
  _id: string | ObjectId;
  authId: string | ObjectId;
  username?: string;
  email?: string;
  password?: string;
  avatarColor?: string;
  uId?: string;
  postsCount: number;
	description: string;
  school: string;
  location: string;
  blocked: mongoose.Types.ObjectId[];
  blockedBy: mongoose.Types.ObjectId[];
  followersCount: number;
  notifications: INotificationSettings;
  social: ISocialLinks;
  bgImageVersion: string;
  bgImageId: string;
  profilePicture: string;
  passwordResetToken?: string;
  passwordResetExpires?: number | string;
  createdAt?: Date;
}

