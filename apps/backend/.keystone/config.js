"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_config2 = require("dotenv/config");
var import_core12 = require("@keystone-6/core");

// schema/session.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var SessionSchema = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    user: (0, import_fields.relationship)({ ref: "User.sessions", many: false }),
    accessToken: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    createdAt: (0, import_fields.timestamp)({ defaultValue: { kind: "now" } }),
    userAgent: (0, import_fields.text)(),
    ip: (0, import_fields.text)(),
    updatedAt: (0, import_fields.timestamp)({
      db: {
        updatedAt: true
      }
    }),
    expiresAt: (0, import_fields.timestamp)()
  }
});

// schema/user.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");

// bullmq/queue-events.ts
var import_bullmq2 = require("bullmq");

// bullmq/queues.ts
var import_bullmq = require("bullmq");

// redis.ts
var import_ioredis = __toESM(require("ioredis"));
var redis = new import_ioredis.default({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null
});

// bullmq/queues.ts
var QUEUES = {
  default: "default"
};
var defaultQueue = new import_bullmq.Queue(QUEUES.default, {
  connection: redis
});

// bullmq/queue-events.ts
var queueEvents = new import_bullmq2.QueueEvents(QUEUES.default, {
  connection: redis
});
queueEvents.on("waiting", ({ jobId }) => {
  console.log(`A job with ID ${jobId} is waiting`);
});
queueEvents.on("active", ({ jobId, prev }) => {
  console.log(`Job ${jobId} is now active; previous status was ${prev}`);
});
queueEvents.on("completed", ({ jobId, returnvalue }) => {
  console.log(`${jobId} has completed and returned ${returnvalue}`);
});
queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(`${jobId} has failed with reason ${failedReason}`);
});

// bullmq/workers.ts
var import_bullmq3 = require("bullmq");

// email.tsx
var import_nodemailer = __toESM(require("nodemailer"));
var import_components = require("@react-email/components");
var import_transactional = require("@repo/transactional");
var import_jsx_runtime = require("react/jsx-runtime");
var emailClient = import_nodemailer.default.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jaleel57@ethereal.email",
    pass: "9QDUBZeHFefBr7fVpX"
  }
});
var TEMPLATES = {
  welcome: import_transactional.StripeWelcomeEmail
};
var sendEmail = async (params) => {
  const { to, subject, data, template, from } = params;
  const Template = TEMPLATES[template];
  if (!template)
    throw new Error("Email template not found");
  const emailHtml = (0, import_components.render)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Template, { ...data }));
  console.log({ emailHtml });
  const options = {
    from,
    to,
    subject,
    html: emailHtml
  };
  const result = await emailClient.sendMail(options);
  console.log({ result });
};

// bullmq/jobs/send-welcome-email.ts
var sendWelcomeEmailJob = async (context, { userId }) => {
  console.log("Sending welcome email to user", userId);
  await sendEmail({
    to: "rem@rsvpkit.co",
    from: "jaleel57@ethereal.email",
    subject: "Welcome to RSVP Kit",
    template: "welcome",
    data: {
      userId
    }
  });
};

// lib/stripe.ts
var import_stripe = __toESM(require("stripe"));
var stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
  typescript: true
});
var createStripeCustomer = async (context, userId) => {
  const user = await context.sudo().db.User.findOne({
    where: {
      id: userId
    }
  });
  if (!user)
    throw new Error("Can't create Stripe customer. User not found");
  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name,
    metadata: {
      userId: user.id,
      orgId: user.currentTeamId
    }
  });
  const stripeSubscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      {
        price: process.env.FREE_PLAN_PRICE_ID
      }
    ]
  });
  const subscription = await context.sudo().db.Subscription.createOne({
    data: {
      user: {
        connect: {
          id: user.id
        }
      },
      team: {
        connect: {
          id: user.currentTeamId
        }
      },
      stripeCustomerId: customer.id,
      stripeSubscriptionId: stripeSubscription.id,
      stripePriceId: stripeSubscription.items.data[0]?.price.id ?? process.env.FREE_PLAN_PRICE_ID
    }
  });
  return {
    customer,
    stripeSubscription,
    subscription
  };
};

// bullmq/jobs/create-stripe-customer-with-subscription.ts
var createStripeCustomerWithSubscription = async (context, { userId }) => {
  return createStripeCustomer(context, userId);
};

// bullmq/workers.ts
var import_context = require("@keystone-6/core/context");
var PrismaModule = __toESM(require(".prisma/client"));
var jobs = {
  "send-welcome-email": sendWelcomeEmailJob,
  "create-stripe-customer-with-subscription": createStripeCustomerWithSubscription
};
var initializeWorkers = () => {
  console.log("Initializing workers");
  const worker = new import_bullmq3.Worker(QUEUES.default, async (job) => {
    console.log(job.name, job.data);
    const jobToPerform = jobs[job.name];
    const context = (0, import_context.getContext)(keystone_default, PrismaModule);
    if (!jobToPerform) {
      throw new Error(`Job not found: ${job.name}`);
    }
    return await jobToPerform(context, job.data);
  }, {
    connection: redis
  });
};

// services/team.service.ts
var teamService = (ctx) => {
  const addTeamMember = async ({ userId, role, teamId }) => {
    if (await teamMemberExists({ userId, teamId })) {
      throw new Error("User is already a member of the team");
    }
    return ctx.prisma.teamMember.create({
      data: {
        user: { connect: { id: userId } },
        team: { connect: { id: teamId } },
        role
      }
    });
  };
  const teamMemberExists = async ({ userId, teamId }) => {
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
    });
  };
  const isTeamOwner = async ({ userId, teamId }) => {
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
    });
    return teamMember?.role === "owner";
  };
  const createDefaultTeam = async ({ userId }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    if (!user)
      throw new Error("Can't create default team. User not found");
    const team = await ctx.prisma.team.create({
      data: {
        name: `${user.name}'s Team`
      }
    });
    const teamOwner = await addTeamMember({ userId, teamId: team.id, role: "owner" });
    await ctx.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        currentTeamId: team.id
      }
    });
    return {
      team,
      teamOwner
    };
  };
  return {
    addTeamMember,
    teamMemberExists,
    isTeamOwner,
    createDefaultTeam
  };
};

// schema/user.ts
var UserSchema = (0, import_core2.list)({
  // WARNING
  //   for this starter project, anyone can create, query, update and delete anything
  //   if you want to prevent random people on the internet from accessing your data,
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  access: import_access2.allowAll,
  hooks: {
    afterOperation: async ({ operation, item, context }) => {
      if (operation === "create") {
        await teamService(context).createDefaultTeam({ userId: item.id.toString() });
        defaultQueue.add("send-welcome-email", { userId: item.id });
        defaultQueue.add("create-stripe-customer-with-subscription", { userId: item.id });
      }
    }
  },
  // this is the fields for our User list
  fields: {
    // by adding isRequired, we enforce that every User should have a name
    //   if no name is provided, an error will be displayed
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    firstName: (0, import_fields2.text)(),
    lastName: (0, import_fields2.text)(),
    email: (0, import_fields2.text)({
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - this may or may not be a good idea for your project
      isIndexed: "unique"
    }),
    password: (0, import_fields2.password)({ validation: { isRequired: true } }),
    sessions: (0, import_fields2.relationship)({ ref: "Session.user", many: true }),
    accounts: (0, import_fields2.relationship)({ ref: "Account.user", many: true }),
    teamMember: (0, import_fields2.relationship)({ ref: "TeamMember.user", many: true }),
    currentTeam: (0, import_fields2.relationship)({ ref: "Team", many: false }),
    events: (0, import_fields2.relationship)({ ref: "Event.createdBy", many: true }),
    subscriptions: (0, import_fields2.relationship)({ ref: "Subscription.user", many: true }),
    emailConfirmedAt: (0, import_fields2.timestamp)(),
    avatarUrl: (0, import_fields2.text)(),
    createdAt: (0, import_fields2.timestamp)({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" }
    }),
    isAdmin: (0, import_fields2.checkbox)({
      defaultValue: false,
      ui: {
        listView: {
          fieldMode: "hidden"
        },
        createView: {
          fieldMode: "hidden"
        },
        itemView: {
          fieldMode: "hidden"
        }
      }
    })
  }
});

// schema/team-member.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var TeamMemberSchema = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    user: (0, import_fields3.relationship)({ ref: "User.teamMember", many: false }),
    team: (0, import_fields3.relationship)({ ref: "Team.members", many: false }),
    role: (0, import_fields3.select)({
      options: [
        { label: "Owner", value: "owner" },
        { label: "Admin", value: "admin" },
        { label: "Member", value: "member" }
      ]
    }),
    removedAt: (0, import_fields3.timestamp)(),
    createdAt: (0, import_fields3.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields3.timestamp)({
      db: {
        updatedAt: true
      }
    })
  }
});

// schema/team.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var TeamSchema = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    name: (0, import_fields4.text)({ validation: { isRequired: true } }),
    description: (0, import_fields4.text)(),
    members: (0, import_fields4.relationship)({ ref: "TeamMember.team", many: true }),
    events: (0, import_fields4.relationship)({ ref: "Event.team", many: true }),
    subscription: (0, import_fields4.relationship)({ ref: "Subscription.team", many: false }),
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// schema/account.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var AccountSchema = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    user: (0, import_fields5.relationship)({ ref: "User.accounts", many: false }),
    type: (0, import_fields5.text)({ validation: { isRequired: true } }),
    provider: (0, import_fields5.text)({ validation: { isRequired: true } }),
    providerAccountId: (0, import_fields5.text)({ validation: { isRequired: true } }),
    refresh_token: (0, import_fields5.text)(),
    access_token: (0, import_fields5.text)(),
    expires_at: (0, import_fields5.timestamp)(),
    token_type: (0, import_fields5.text)(),
    scope: (0, import_fields5.text)(),
    id_token: (0, import_fields5.text)(),
    session_state: (0, import_fields5.text)(),
    refresh_token_expires_at: (0, import_fields5.timestamp)()
  }
});

// schema/event.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var EventSchema = (0, import_core6.list)({
  access: import_access6.allowAll,
  hooks: {
    resolveInput: async ({ resolvedData, operation, context }) => {
      if (operation === "create") {
        resolvedData.createdBy = { connect: { id: context.session.itemId } };
        if (!context.session.data.currentTeamId)
          throw new Error("missing_team");
        resolvedData.teamId = { connect: { id: context.session.data.currentTeamId } };
        return resolvedData;
      }
    }
  },
  fields: {
    name: (0, import_fields6.text)({ validation: { isRequired: true } }),
    startsAt: (0, import_fields6.timestamp)({ validation: { isRequired: true } }),
    endsAt: (0, import_fields6.timestamp)({ validation: { isRequired: true } }),
    type: (0, import_fields6.select)({
      options: [
        { label: "Wedding", value: "wedding" },
        { label: "Birthday", value: "birthday" },
        { label: "Conference", value: "conference" },
        { label: "Meetup", value: "meetup" },
        { label: "Party", value: "party" }
      ],
      ui: {
        displayMode: "select"
      }
    }),
    location: (0, import_fields6.json)(),
    createdBy: (0, import_fields6.relationship)({ ref: "User.events", many: false }),
    team: (0, import_fields6.relationship)({ ref: "Team.events", many: false }),
    publishedAt: (0, import_fields6.timestamp)(),
    createdAt: (0, import_fields6.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields6.timestamp)({
      db: {
        updatedAt: true
      }
    }),
    plusOneAllowed: (0, import_fields6.checkbox)({ defaultValue: false }),
    capacity: (0, import_fields6.integer)(),
    stages: (0, import_fields6.relationship)({ ref: "EventStage.event", many: true }),
    invitations: (0, import_fields6.relationship)({ ref: "Invitation.event", many: true })
  }
});

// schema/event-stage.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var EventStageSchema = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({ validation: { isRequired: true } }),
    event: (0, import_fields7.relationship)({ ref: "Event.stages", many: false }),
    location: (0, import_fields7.json)(),
    stageDate: (0, import_fields7.timestamp)({ validation: { isRequired: true } }),
    startTime: (0, import_fields7.text)({ validation: { isRequired: true } }),
    endTime: (0, import_fields7.text)({ validation: { isRequired: true } }),
    description: (0, import_fields7.text)(),
    capacity: (0, import_fields7.integer)(),
    createdAt: (0, import_fields7.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields7.timestamp)({
      db: {
        updatedAt: true
      }
    }),
    attendance: (0, import_fields7.relationship)({ ref: "GuestAttendance.stage", many: true })
  }
});

// schema/guest-attendance.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var GuestAttendanceSchema = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    invitation: (0, import_fields8.relationship)({ ref: "Invitation.attendance", many: false }),
    stage: (0, import_fields8.relationship)({ ref: "EventStage.attendance", many: false }),
    attending: (0, import_fields8.checkbox)({ defaultValue: false }),
    createdAt: (0, import_fields8.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields8.timestamp)({
      db: {
        updatedAt: true
      }
    })
  }
});

// schema/guest.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var GuestSchema = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    firstName: (0, import_fields9.text)({ validation: { isRequired: true } }),
    lastName: (0, import_fields9.text)({ validation: { isRequired: true } }),
    email: (0, import_fields9.text)({ validation: { isRequired: true } }),
    phone: (0, import_fields9.text)(),
    address: (0, import_fields9.text)(),
    city: (0, import_fields9.text)(),
    state: (0, import_fields9.text)(),
    zipCode: (0, import_fields9.text)(),
    country: (0, import_fields9.text)(),
    invitations: (0, import_fields9.relationship)({ ref: "Invitation.guest", many: true }),
    createdAt: (0, import_fields9.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields9.timestamp)({
      db: {
        updatedAt: true
      }
    })
  }
});

// schema/invitation.ts
var import_core10 = require("@keystone-6/core");
var import_access10 = require("@keystone-6/core/access");
var import_fields10 = require("@keystone-6/core/fields");
var InvitationSchema = (0, import_core10.list)({
  access: import_access10.allowAll,
  fields: {
    event: (0, import_fields10.relationship)({ ref: "Event.invitations", many: false }),
    guest: (0, import_fields10.relationship)({ ref: "Guest.invitations", many: false }),
    sentDate: (0, import_fields10.timestamp)(),
    response: (0, import_fields10.select)({
      options: [
        { label: "Accepted", value: "accepted" },
        { label: "Declined", value: "declined" },
        { label: "Pending", value: "pending" }
      ],
      ui: {
        displayMode: "segmented-control"
      }
    }),
    plusOneName: (0, import_fields10.text)(),
    plusOneAllowed: (0, import_fields10.checkbox)({ defaultValue: false }),
    notes: (0, import_fields10.text)(),
    attendance: (0, import_fields10.relationship)({ ref: "GuestAttendance.invitation", many: true }),
    createdAt: (0, import_fields10.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields10.timestamp)({
      db: {
        updatedAt: true
      }
    })
  }
});

// schema/subscription.ts
var import_core11 = require("@keystone-6/core");
var import_access11 = require("@keystone-6/core/access");
var import_fields11 = require("@keystone-6/core/fields");
var SubscriptionSchema = (0, import_core11.list)({
  access: import_access11.allowAll,
  fields: {
    stripeCustomerId: (0, import_fields11.text)(),
    stripeSubscriptionId: (0, import_fields11.text)(),
    stripePriceId: (0, import_fields11.text)(),
    stripeCurrentPeriodEnd: (0, import_fields11.timestamp)(),
    user: (0, import_fields11.relationship)({ ref: "User.subscriptions", many: false }),
    team: (0, import_fields11.relationship)({ ref: "Team.subscription", many: false })
  }
});

// schema/index.ts
var lists = {
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

// auth.ts
var import_config = require("dotenv/config");
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");

// jwt-session-strategy.ts
var import_node_crypto = require("node:crypto");
var cookie = __toESM(require("cookie"));
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_uuid = require("uuid");
var import_date_fns = require("date-fns");
async function jwtSign(claims, jwtSessionSecret) {
  return new Promise((resolve, reject) => {
    import_jsonwebtoken.default.sign(
      claims,
      jwtSessionSecret,
      {
        algorithm: "HS256"
        // HMAC-SHA256
      },
      (err, token) => {
        if (err)
          return reject(err);
        if (!token)
          return reject(new Error("No token"));
        return resolve(token);
      }
    );
  });
}
async function jwtVerify({ token, secret, maxAge }) {
  return new Promise((resolve) => {
    import_jsonwebtoken.default.verify(
      token,
      secret,
      {
        algorithms: ["HS256"],
        maxAge
        // we use an expiry of 1 hour for this example
      },
      (err, result) => {
        if (err || typeof result !== "object")
          return resolve(null);
        if (typeof result.id !== "string")
          return resolve(null);
        return resolve(result);
      }
    );
  });
}
function jwtSessionStrategy({
  secret = (0, import_node_crypto.randomBytes)(32).toString("base64url"),
  maxAge = 60 * 60 * 8,
  // 8 hours,
  cookieName = "keystonejs-session",
  path = "/",
  secure = process.env.NODE_ENV === "production",
  domain,
  sameSite = "lax"
} = {}) {
  if (secret.length < 32) {
    throw new Error("The session secret must be at least 32 characters long");
  }
  return {
    async get({ context }) {
      if (!context?.req)
        return;
      const cookies = cookie.parse(context.req.headers.cookie || "");
      const bearer = context.req.headers.authorization?.replace("Bearer ", "");
      const token = bearer || cookies[cookieName];
      if (!token)
        return;
      try {
        const jwtResult = await jwtVerify({ token, secret, maxAge });
        if (!jwtResult)
          return;
        const { id, tokenId } = jwtResult;
        const session2 = await context.sudo().db.Session.findOne({ where: { accessToken: tokenId } });
        if (!session2)
          return;
        if (session2.userId !== id)
          return;
        if (session2.expiresAt && new Date(session2.expiresAt) < /* @__PURE__ */ new Date())
          return;
        const who = await context.sudo().db.User.findOne({ where: { id } });
        if (!who)
          return;
        return {
          listKey: "User",
          itemId: id,
          data: {
            isAdmin: who.isAdmin,
            name: who.name,
            currentTeamId: who.currentTeamId,
            id: who.id
          }
        };
      } catch (err) {
      }
    },
    async end({ context }) {
      if (context?.res) {
        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize(cookieName, "", {
            maxAge: 0,
            expires: /* @__PURE__ */ new Date(),
            httpOnly: true,
            secure,
            path,
            sameSite,
            domain
          })
        );
      }
      if (!context?.req)
        return;
      const cookies = cookie.parse(context.req.headers.cookie || "");
      const bearer = context.req.headers.authorization?.replace("Bearer ", "");
      const token = bearer || cookies[cookieName];
      if (!token)
        return;
      await context.prisma.session.update({
        where: {
          accessToken: token
        },
        data: {
          expiresAt: /* @__PURE__ */ new Date()
        }
      });
    },
    async start({ context, data }) {
      if (!context?.res)
        return;
      const userAgent = context.req?.headers["user-agent"];
      let ip = context.req?.headers["x-forwarded-for"] || context.req?.socket.remoteAddress;
      if (typeof ip === "object") {
        ip = ip.join(", ");
      }
      const expiresAt = (0, import_date_fns.addSeconds)(/* @__PURE__ */ new Date(), maxAge);
      const sessionEntry = await context.prisma.session.create({
        data: {
          accessToken: (0, import_uuid.v4)(),
          userId: data.itemId,
          userAgent,
          ip,
          expiresAt
        }
      });
      const token = await jwtSign({ id: data.itemId, tokenId: sessionEntry.accessToken }, secret);
      if (!sessionEntry)
        return;
      context.res.setHeader(
        "Set-Cookie",
        cookie.serialize(cookieName, token, {
          maxAge,
          expires: expiresAt,
          httpOnly: true,
          secure,
          path,
          sameSite,
          domain
        })
      );
      return token;
    }
  };
}

// auth.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name isAdmin",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = jwtSessionStrategy({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
  sameSite: "lax"
});

// services/google.ts
var import_googleapis = require("googleapis");
var import_express = require("express");
var import_uuid2 = require("uuid");
var googleAuthClient = new import_googleapis.google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI
});
var createAuthUrl = async () => {
  const url = await googleAuthClient.generateAuthUrl({
    access_type: "offline",
    scope: [
      "openid",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  });
  return url;
};
import_googleapis.google.options({ auth: googleAuthClient });
var createGoogleRouter = (commonContext) => {
  const router = (0, import_express.Router)();
  router.get("/", async (req, res) => {
    const context = await commonContext.withRequest(req, res);
    const url = await createAuthUrl();
    res.redirect(url);
  });
  router.get("/callback", async (req, res, next) => {
    try {
      const context = await commonContext.withRequest(req, res);
      const code = req.query.code;
      const { tokens } = await googleAuthClient.getToken(code);
      googleAuthClient.setCredentials(tokens);
      const loginTicket = await googleAuthClient.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID
      });
      const profile = loginTicket.getPayload();
      const exists = await context.db.User.findOne({
        where: {
          email: profile?.email
        }
      });
      if (exists) {
        const token2 = await session.start({
          context,
          data: {
            itemId: exists.id,
            listKey: "User",
            data: {
              isAdmin: false,
              name: exists.name,
              currentTeamId: exists.currentTeamId,
              id: exists.id
            }
          }
        });
        return res.redirect(`${process.env.CLIENT_URL}/login?token=${token2}`);
      }
      const user = await context.db.User.createOne({
        data: {
          email: profile?.email,
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          emailConfirmedAt: /* @__PURE__ */ new Date(),
          name: profile?.name,
          avatarUrl: profile?.picture,
          password: (0, import_uuid2.v4)()
        }
      });
      const account = await context.prisma.account.create({
        data: {
          provider: "google",
          type: "oauth",
          providerAccountId: profile?.sub,
          refresh_token: tokens.refresh_token,
          access_token: tokens.access_token,
          expires_at: tokens.expiry_date ? new Date(tokens.expiry_date * 1e3) : void 0,
          token_type: tokens.token_type,
          scope: tokens.scope,
          id_token: tokens.id_token
        }
      });
      const token = await session.start({
        context,
        data: {
          itemId: user.id,
          listKey: "User",
          data: {
            isAdmin: false,
            name: user.name,
            currentTeamId: user.currentTeamId,
            id: user.id
          }
        }
      });
      if (!code) {
        res.redirect(`${process.env.CLIENT_URL}/login?oauth_error=oauth_failed`);
      } else {
        res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
      }
    } catch (error) {
      console.log({ error });
      next(error);
    }
  });
  return router;
};

// lib/logger.ts
var import_winston = __toESM(require("winston"));
var logger = import_winston.default.createLogger({
  level: "error",
  format: import_winston.default.format.json(),
  transports: [
    new import_winston.default.transports.Console()
    // Add more transports here for your log provider (e.g., Winston transports for services like AWS CloudWatch, Loggly, etc.)
  ]
});

// services/stripe.ts
var import_express2 = require("express");
var import_body_parser = __toESM(require("body-parser"));
var createStripeRouter = (commonContext) => {
  const router = (0, import_express2.Router)();
  router.post("/", import_body_parser.default.raw({ type: "application/json" }), async (req, res) => {
    try {
      const body = req.body;
      const signature = req.headers["stripe-signature"] ?? "";
      let event;
      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET ?? ""
        );
      } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }
      console.log({
        type: event.type,
        data: event.data.object
      });
      const session2 = event.data.object;
      if (event.type === "checkout.session.completed") {
      }
      if (event.type === "invoice.payment_succeeded") {
      }
      return res.status(200).send("OK");
    } catch (err) {
      logger.error("Stripe Webhook error", { metadata: err });
    }
  });
  return router;
};

// express/server.ts
var errorHandler = (err, req, res, next) => {
  logger.error(err.message, { metadata: err.stack });
  res.status(500).json({ message: "An error occurred", error: err.message });
};
var extendExpressApp = (app, commonContext) => {
  app.use("/api/oauth/google", createGoogleRouter(commonContext));
  app.use("/api/webhooks/stripe", createStripeRouter(commonContext));
  app.use(errorHandler);
};

// keystone.ts
var allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
var keystone_default = withAuth(
  (0, import_core12.config)({
    server: {
      port: parseInt(process.env.PORT, 10) || 3300,
      cors: {
        origin: [
          ...allowedOrigins
        ]
        // and other origins you might want react to be served from
      },
      extendExpressApp
    },
    graphql: {
      debug: true,
      path: "/api/graphql"
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db",
      onConnect: async () => {
        initializeWorkers();
      }
    },
    lists,
    session,
    ui: {
      isAccessAllowed: (context) => {
        return !!context.session?.data?.isAdmin;
      }
    }
  })
);
//# sourceMappingURL=config.js.map
