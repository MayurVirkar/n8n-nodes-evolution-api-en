import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['chat-api'],
		},
	},
	options: [
		{
			name: 'Check Number',
			action: 'Check number on whatsapp',
			description: 'Check if a number is registered on WhatsApp',
			value: 'check-number',
		},
		{
			name: 'Read Messages',
			action: 'Mark messages as read',
			description: 'Mark specific messages as read',
			value: 'read-messages',
		},
		{
			name: 'Manage Archive',
			action: 'Manage conversation archive',
			description: 'Archive or unarchive a conversation',
			value: 'manage-archive',
		},
		{
			name: 'Mark As Unread',
			action: 'Mark conversation as unread',
			description: 'Mark a specific conversation as unread',
			value: 'mark-unread',
		},
		{
			name: 'Delete Message',
			action: 'Delete message',
			description: 'Delete a specific message for everyone',
			value: 'delete-message',
		},
		{
			name: 'Fetch Profile Picture',
			action: 'Fetch profile picture',
			description: 'Get the profile picture URL of a contact',
			value: 'fetch-profile-picture',
		},
		{
			name: 'Get Media In Base64',
			action: 'Get media in base64',
			description: 'Get the content of a media in Base64 format',
			value: 'get-media-base64',
		},
		{
			name: 'Edit Message',
			action: 'Edit message',
			description: 'Edit a previously sent message',
			value: 'update-message',
		},
		{
			name: 'Send Presence',
			action: 'Send presence',
			description: 'Send presence status (typing/recording) to a contact',
			value: 'send-presence',
		},
		{
			name: 'Block Contact',
			action: 'Block contact',
			description: 'Block or unblock a contact',
			value: 'block-contact',
		},
		{
			name: 'List Contacts',
			action: 'List contacts',
			description: 'List all contacts or search for a specific contact',
			value: 'find-contacts',
		},
		{
			name: 'Find Messages',
			action: 'Find messages from a contact',
			description: 'Search messages from a specific contact',
			value: 'find-messages',
		},
		{
			name: 'Find Status',
			action: 'Find message status',
			description: 'Search message status from a specific contact',
			value: 'find-status-messages',
		},
		{
			name: 'Find Chats',
			action: 'Find chats',
			description: 'Search chats from a specific contact',
			value: 'find-chats',
		},
	],
	default: 'check-number',
};
