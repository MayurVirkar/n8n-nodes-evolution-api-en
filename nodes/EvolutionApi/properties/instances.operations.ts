import { INodeProperties } from 'n8n-workflow';

// Instance-api options (Instances)
export const instancesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instances-api'], // Resource Value
		},
	},

	// Options that will be linked to the "Instance" Operation
	options: [
		// Option = Create instance
		{
			// Create Instance Basic
			name: 'Create Instance',
			action: 'Create instance',
			description: 'Create a new Instance',
			value: 'instance-basic',
		},

		// Option = Connect Instance
		{
			// Instance Connect
			name: 'Connect Instance',
			action: 'Connect instance',
			description: 'Generate the connection of an Instance (QR or Base64)',
			value: 'instance-connect',
		},

		// Option = Fetch Instance
		{
			// Fetch Instances
			name: 'Fetch Instance',
			action: 'Fetch instance',
			description: 'Search and list the created Instances',
			value: 'fetch-instances',
		},

		// Option = Set Instance Behavior
		{
			name: 'Set Behavior',
			action: 'Set behavior',
			description: 'Set the instance behavior',
			value: 'instance-settings',
		},

		// Option = Set presence
		{
			// Set Presence
			name: 'Set Presence',
			action: 'Set presence',
			description: 'Set the presence in the instance',
			value: 'set-presence',
		},

		// Option = Set Proxy
		{
			// Set/find Proxy
			name: 'Set/Find Proxy',
			action: 'Proxy',
			description: 'Set a Proxy in the instance',
			value: 'set-proxy',
		},

		// Option = Restart instance
		{
			// Restart Instance
			name: 'Restart Instance',
			action: 'Restart instance',
			description: 'Restart the Instance socket',
			value: 'restart-instance',
		},

		// Option = Disconnect instance
		{
			// Logout Instance
			name: 'Disconnect Instance',
			action: 'Disconnect instance',
			description: 'Disconnect WhatsApp from the Instance',
			value: 'logout-instance',
		},

		// Option = Delete instance
		{
			// Delete Instance
			name: 'Delete Instance',
			action: 'Delete instance',
			description: 'Delete an Instance',
			value: 'delete-instance',
		},
	],
	// Setting default option to "Create Instance"
	default: 'instance-basic',
};
