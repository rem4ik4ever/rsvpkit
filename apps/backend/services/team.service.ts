import type { Context } from '.keystone/types'

export const teamService = (ctx: Context) => {
  const addTeamMember = async ({ userId, role, teamId }: { userId: string, teamId: string, role: 'owner' | 'admin' | 'member' }) => {
    if (await teamMemberExists({ userId, teamId })) {
      throw new Error('User is already a member of the team')
    }

    return ctx.prisma.teamMember.create({
      data: {
        user: { connect: { id: userId } },
        team: { connect: { id: teamId } },
        role
      }
    })
  }

  const teamMemberExists = async ({ userId, teamId }: { userId: string, teamId: string }) => {
    return ctx.prisma.teamMember.findFirst({
      where: {
        user: {
          id: {
            equals: userId
          }
        },
        team: {
          id: {
            equals: teamId
          }
        }
      }
    })
  }

  const isTeamOwner = async ({ userId, teamId }: { userId: string, teamId: string }) => {
    const teamMember = await ctx.prisma.teamMember.findFirst({
      where: {
        user: {
          id: {
            equals: userId
          }
        },
        team: {
          id: {
            equals: teamId
          }
        }
      }
    })

    return teamMember?.role === 'owner'
  }

  return {
    addTeamMember,
    teamMemberExists,
    isTeamOwner
  }
}
