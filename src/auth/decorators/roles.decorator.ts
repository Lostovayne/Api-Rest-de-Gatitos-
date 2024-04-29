import { SetMetadata } from "@nestjs/common";

export const Roles = (role:string) => SetMetadata('roles', role);
