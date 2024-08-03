import { describe, beforeEach, expect, test } from '@jest/globals'
import { resetDB, context } from '../jestUtils'
import { teamService } from './team.service';

describe('TeamService', () => {
  let user: any;
  let user2: any;
  let team: any;
  let teamMember;
  const service = teamService(context);
  beforeEach(async () => {
    await resetDB();

    user = await context.prisma.user.create({
      data: {
        name: 'User 1',
        email: 'test@email.com',
        password: 'password'
      }
    })
    user2 = await context.prisma.user.create({
      data: {
        name: 'User 2',
        email: 'test2@email.com',
        password: 'password'
      }
    })
    team = await context.prisma.team.create({
      data: {
        name: 'Team name'
      }
    })
  })

  describe('addTeamMember', () => {
    test('add team member', async () => {
      teamMember = await service.addTeamMember({
        userId: user.id,
        teamId: team.id,
        role: 'owner'
      })

      expect(teamMember).toBeDefined();
      expect(teamMember.userId).toEqual(user.id);
      expect(teamMember.teamId).toEqual(team.id);
    })

    test("can't add the same user to the same team", async () => {
      teamMember = await service.addTeamMember({
        userId: user.id,
        teamId: team.id,
        role: 'owner'
      })

      expect(teamMember).toBeDefined();

      try {
        await service.addTeamMember({
          userId: user.id,
          teamId: team.id,
          role: 'owner'
        })
        expect(true).toBe(false)
      } catch (error) {
        expect(error.message).toEqual('User is already a member of the team')
      }
    })

    test('add team member with different role', async () => {
      teamMember = await service.addTeamMember({
        userId: user.id,
        teamId: team.id,
        role: 'owner'
      })

      expect(teamMember).toBeDefined();

      teamMember = await service.addTeamMember({
        userId: user2.id,
        teamId: team.id,
        role: 'admin'
      })

      expect(teamMember).toBeDefined();
      expect(teamMember.role).toEqual('admin');
    })
  })
})
