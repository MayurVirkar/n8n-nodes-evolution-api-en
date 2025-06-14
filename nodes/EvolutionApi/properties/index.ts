import { INodeProperties } from 'n8n-workflow';
import { eventsFields as eventsFields } from './events.fields';
import { instancesFields } from './instances.fields';
import { integrationsFields as integrationsFields } from './integrations.fields';
import { messagesFields as messagesFields } from './messages.fields';
import { eventsOperationsOptions } from './events.operations';
import { instancesOperationsOptions } from './instances.operations';
import { integrationsOperationsOptions } from './integrations.operations';
import { messagesOperationsOptions } from './messages.operations';
import { groupsFields } from './groups.fields';
import { groupsOperations } from './groups.operations';
import { chatFields } from './chat.fields';
import { chatOperations } from './chat.operations';
import { profileFields } from './profile.fields';
import { profileOperationsOptions } from './profile.operations';
const resourcesOptions: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instance',
			value: 'instances-api',
		},
		{
			name: 'Message',
			value: 'messages-api',
		},
		{
			name: 'Group',
			value: 'groups-api',
		},
		{
			name: 'Chat',
			value: 'chat-api',
		},
		{
			name: 'Profile',
			value: 'profile-api',
		},
		{
			name: 'Event',
			value: 'events-api',
		},
		{
			name: 'Integration',
			value: 'integrations-api',
		},
	],
	default: 'instances-api',
};

export const evolutionNodeProperties = [
	resourcesOptions,
	// Functions available when "Instances" resource is selected
	instancesOperationsOptions,
	// Functions available when "Messages" resource is selected
	messagesOperationsOptions,
	// Functions available when "Groups" resource is selected
	groupsOperations,
	// Functions available when "Events" resource is selected
	eventsOperationsOptions,
	// Functions available when "Integrations" resource is selected
	integrationsOperationsOptions,
	// Functions available when "Profile" resource is selected
	profileOperationsOptions,
	// Functions available when "Chat" resource is selected
	chatOperations,
	// Fields available when resource and some operation are selected
	...instancesFields,
	...messagesFields,
	...groupsFields,
	...eventsFields,
	...integrationsFields,
	...chatFields,
	...profileFields,
];
