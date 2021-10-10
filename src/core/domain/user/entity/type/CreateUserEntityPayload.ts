import { UserRole } from '@core/common/enums/UserEnums';

export type CreateUserEntityPayload  = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  password: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  removedAt?: Date;
};
