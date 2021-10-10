import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

import { HttpJwtAuthGuard } from '@application/api/http-rest/auth/guard/HttpJwtAuthGuard';
import { HttpRoleAuthGuard } from '@application/api/http-rest/auth/guard/HttpRoleAuthGuard';
import { UserRole } from '@core/common/enums/UserEnums';

export const HttpAuth = (...roles: UserRole[]): (...args: any[]) => void => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(HttpJwtAuthGuard, HttpRoleAuthGuard)
  );
};