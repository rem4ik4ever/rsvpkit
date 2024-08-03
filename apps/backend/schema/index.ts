import { SessionSchema } from './session'
import { UserSchema } from './user'
import { TeamMemberSchema } from './team-member'
import { TeamSchema } from './team'
import { AccountSchema } from './account'

export const lists = {
  Session: SessionSchema,
  User: UserSchema,
  TeamMember: TeamMemberSchema,
  Team: TeamSchema,
  Account: AccountSchema
};
