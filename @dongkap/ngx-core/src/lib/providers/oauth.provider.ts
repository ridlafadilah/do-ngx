import { InjectionToken } from '@angular/core';
import { UserInfo, SecurityResourceModel } from '../models';

export const OAUTH_INFO: InjectionToken<SecurityResourceModel> =
new InjectionToken<SecurityResourceModel>('OAUTH INFO Resource');

export const USER_INFO: InjectionToken<UserInfo> =
new InjectionToken<UserInfo>('USER INFO Resource');
