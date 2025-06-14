import { INodeProperties } from 'n8n-workflow';

// Integrations-api options (Integration)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Resource Value
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Set/Find Chatwoot integration',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Control Evolution Bot integration',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions do Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Control Typebot integration',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Control Dify integration',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions da Dify
			name: 'Flowise',
			action: 'Flowise',
			description: 'Control Flowise integration',
			value: 'flowiseBot',
		},
	],
	// Setting default option to "Send Text"
	default: 'chatwoot',
};
