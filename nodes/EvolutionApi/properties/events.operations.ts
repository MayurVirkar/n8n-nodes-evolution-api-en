import { INodeProperties } from 'n8n-workflow';

// Events-api options (Events)
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Resource Value
		},
	},
	options: [
		// Option = Send text message
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Set/Find Webhook integration',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'Rabbitmq',
			description: 'Set/Find RabbitMQ integration',
			value: 'rabbitmq',
		},
	],
	// Setting default option to "Send Text"
	default: 'webhook',
};
