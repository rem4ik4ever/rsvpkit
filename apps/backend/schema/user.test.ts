import { beforeAll, beforeEach, describe, expect, test } from '@jest/globals'
import { resetDB, context } from '../jestUtils';
import { UserModel } from '../models/user'

describe('User', () => {
  beforeEach(async () => {
    await resetDB();
  })

  test('create a user', async () => {
    const user = await context.db.User.createOne({
      data: {
        name: "Rem Kim",
        email: 'user@example.com',
        password: 'password',
      }
    })
    expect(user).toBeDefined();
  })

  test('not save duplicate email user', async () => {
    const userOne = await context.db.User.createOne({
      data: {
        name: "User one",
        email: 'email1@example.com',
        password: 'password'
      }
    })

    expect(userOne.name).toEqual('User one')
    expect(userOne.email).toEqual('email1@example.com')

    expect(async () => {
      await context.db.User.createOne({
        data: {
          name: "User one",
          email: 'email1@example.com',
          password: 'password'
        }
      })
    }).rejects.toThrow('Prisma error: Unique constraint failed on the fields: (`email`)')
  })

  test('password is hashed', async () => {
    const user = await context.db.User.createOne({
      data: {
        name: "User two",
        email: 'example@email.com',
        password: 'password'
      }
    })

    expect(user.password).not.toEqual('password')
  })

  describe('UserModel', () => {
    describe('isEmailVerified', () => {
      test('returns true if emailConfirmedAt is not null', async () => {
        const user = await context.db.User.createOne({
          data: {
            name: "User two",
            email: 'example@email.com',
            password: 'password',
            emailConfirmedAt: new Date()
          }
        })
        const model = UserModel(user);
        expect(model.isEmailVerified()).toBeTruthy();
      })

      test('returns false if emailConfirmedAt is null', async () => {
        const user = await context.db.User.createOne({
          data: {
            name: "User two",
            email: 'example@email.com',
            password: 'password',
          }
        })
        const model = UserModel(user);
        expect(model.isEmailVerified()).toBeFalsy();
      })
    })
  })
})
