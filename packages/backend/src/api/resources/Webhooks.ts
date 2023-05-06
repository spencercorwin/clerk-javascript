import type {
  DeletedObjectJSON,
  OrganizationInvitationJSON,
  OrganizationJSON,
  OrganizationMembershipJSON,
  SessionJSON,
  UserJSON,
} from './JSON';

type Webhook<EvtType, Data> = { type: EvtType; object: 'event'; data: Data };

export type UserCreatedWebhookEvent = Webhook<'user.created', UserJSON>;
export type UserUpdatedWebhookEvent = Webhook<'user.updated', UserJSON>;
export type UserDeletedWebhookEvent = Webhook<'user.deleted', DeletedObjectJSON>;
export type UserWebhookEvent = UserCreatedWebhookEvent | UserUpdatedWebhookEvent | UserDeletedWebhookEvent;

export type SessionCreatedWebhookEvent = Webhook<'session.created', SessionJSON>;
export type SessionEndedWebhookEvent = Webhook<'session.ended', SessionJSON>;
export type SessionRemovedWebhookEvent = Webhook<'session.removed', SessionJSON>;
export type SessionRevokedWebhookEvent = Webhook<'session.revoked', SessionJSON>;
export type SessionWebhookEvent =
  | SessionCreatedWebhookEvent
  | SessionEndedWebhookEvent
  | SessionRemovedWebhookEvent
  | SessionRevokedWebhookEvent;

export type OrganizationCreatedWebhookEvent = Webhook<'organization.created', OrganizationJSON>;
export type OrganizationUpdatedWebhookEvent = Webhook<'organization.updated', OrganizationJSON>;
export type OrganizationDeletedWebhookEvent = Webhook<'organization.deleted', DeletedObjectJSON>;
export type OrganizationWebhookEvent =
  | OrganizationCreatedWebhookEvent
  | OrganizationUpdatedWebhookEvent
  | OrganizationDeletedWebhookEvent;

export type OrganizationMembershipCreatedWebhookEvent = Webhook<
  'organizationMembership.created',
  OrganizationMembershipJSON
>;
export type OrganizationMembershipAcceptedWebhookEvent = Webhook<
  'organizationMembership.accepted',
  OrganizationMembershipJSON
>;
export type OrganizationMembershipRevokedWebhookEvent = Webhook<
  'organizationMembership.revoked',
  OrganizationMembershipJSON
>;
export type OrganizationMembershipWebhookEvent =
  | OrganizationMembershipCreatedWebhookEvent
  | OrganizationMembershipAcceptedWebhookEvent
  | OrganizationMembershipRevokedWebhookEvent;

export type OrganizationInvitationCreatedWebhookEvent = Webhook<
  'organizationInvitation.created',
  OrganizationInvitationJSON
>;
export type OrganizationInvitationDeletedWebhookEvent = Webhook<
  'organizationInvitation.deleted',
  OrganizationInvitationJSON
>;
export type OrganizationInvitationUpdatedWebhookEvent = Webhook<
  'organizationInvitation.updated',
  OrganizationInvitationJSON
>;
export type OrganizationInvitationWebhookEvent =
  | OrganizationInvitationCreatedWebhookEvent
  | OrganizationInvitationDeletedWebhookEvent
  | OrganizationInvitationUpdatedWebhookEvent;

export type WebhookEvent =
  | UserWebhookEvent
  | SessionWebhookEvent
  | OrganizationWebhookEvent
  | OrganizationMembershipWebhookEvent
  | OrganizationInvitationWebhookEvent;

export type WebhookEventType = WebhookEvent['type'];
