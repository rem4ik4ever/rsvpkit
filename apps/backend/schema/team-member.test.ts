import { describe, beforeEach, test, expect } from '@jest/globals'
import { resetDB, context } from '../jestUtils';


describe('TeamMember', () => {
  beforeEach(async () => {
    await resetDB()
  })

  test('create a team member', async () => {
    const teamMember = await context.db.TeamMember.createOne({
      data: {
        user: {
          create: {
            name: 'Rem Kim',
            email: 'email@example.com',
            password: 'password'
          }
        },
        team: {
          create: {
            name: 'Team name'
          }
        },
        role: 'owner'
      },
    })

    expect(teamMember).toBeDefined();
    expect(teamMember.userId).toBeDefined();
    expect(teamMember.teamId).toBeDefined();
  })
});
