import type { User } from '.prisma/client'

export const UserModel = (u: User) => ({
  ...u,
  isEmailVerified: () => u.emailConfirmedAt !== null,
})
