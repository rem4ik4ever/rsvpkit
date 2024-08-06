import { SessionSchema } from './session'
import { UserSchema } from './user'
import { TeamMemberSchema } from './team-member'
import { TeamSchema } from './team'
import { AccountSchema } from './account'
import { EventSchema } from './event'
import { EventStageSchema } from './event-stage'
import { GuestAttendanceSchema } from './guest-attendance'
import { GuestSchema } from './guest'
import { InvitationSchema } from './invitation'
import { SubscriptionSchema } from './subscription'

export const lists = {
  Session: SessionSchema,
  User: UserSchema,
  TeamMember: TeamMemberSchema,
  Team: TeamSchema,
  Account: AccountSchema,
  Event: EventSchema,
  EventStage: EventStageSchema,
  GuestAttendance: GuestAttendanceSchema,
  Guest: GuestSchema,
  Invitation: InvitationSchema,
  Subscription: SubscriptionSchema
};
