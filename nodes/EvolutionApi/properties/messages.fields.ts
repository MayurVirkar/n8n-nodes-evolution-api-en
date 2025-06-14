import { INodeProperties } from 'n8n-workflow';

export const messagesFields: INodeProperties[] = [
	// Fields = Send text message
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',

		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'messageText',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the text message to be sent',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message to be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'List of numbers to mention (separated by comma)',
							},
						],
					},
				],
			},
			{
				displayName: 'Link Preview',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Whether to enable or disable link preview in the message',
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-text'],
			},
		},
	},

	// Fields = Send Image
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Image',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the image',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the image',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message to be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'List of numbers to mention (separated by comma)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-image'],
			},
		},
	},

	// Fields = Send Video
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Video',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-video'],
			},
		},
	},

	// Fields = Send Audio
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Audio',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the audio',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			//{
			//	displayName: 'Reply Message',
			//	name: 'quoted',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		messageQuoted: {
			//			messageId: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'messageQuoted',
			//			displayName: 'Message',
			//			values: [
			//				{
			//					displayName: 'Message ID',
			//					name: 'messageId',
			//					type: 'string',
			//					default: '',
			//					description: 'Message ID que será respondida',
			//				},
			//			],
			//		},
			//	],
			//},

			//{
			//	displayName: 'Mentions',
			//	name: 'mentions',
			//	type: 'fixedCollection',
			//	typeOptions: {
			//		multipleValues: false,
			//	},
			//	default: {
			//		mentionsSettings: {
			//			mentionsEveryOne: false,
			//			mentioned: '',
			//		},
			//	},
			//	options: [
			//		{
			//			name: 'mentionsSettings',
			//			displayName: 'Settings',
			//			values: [
			//				{
			//					displayName: 'Mention Everyone',
			//					name: 'mentionsEveryOne',
			//					type: 'boolean',
			//					default: false,
			//					description: 'Menciona todos os participantes do grupo',
			//				},
			//				{
			//					displayName: 'Numbers to Mention',
			//					name: 'mentioned',
			//					type: 'string',
			//					default: '',
			//					displayOptions: {
			//						show: {
			//							mentionsEveryOne: [false],
			//						},
			//					},
			//					description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
			//				},
			//			],
			//		},
			//	],
			//},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-audio'],
			},
		},
	},

	// Fields = Send Document
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Document',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL or base64 of the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Text to be sent along with the document',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Document file name',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-document'],
			},
		},
	},

	// Fields = Send Poll
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the poll',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Poll Title',
		name: 'caption',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the title of your poll',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Mínimo 2 Options, Máximo 12. Cada opção deve ser única.',
		name: 'notice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Options Da Enquete',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Digite as Options da enquete (mínimo 2, máximo 12). Cada opção deve ser única.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Opção',
						name: 'optionValue',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-poll'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Campos = Enviar Status
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o status',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Tipo Do Status',
		name: 'type',
		type: 'options',
		description: 'Escolha o tipo de status você vai postar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'Status De Texto',
				value: 'text',
			},
			{
				name: 'Status De Imagem',
				value: 'image',
			},
			{
				name: 'Status De Video',
				value: 'video',
			},
			{
				name: 'Status De Audio',
				value: 'audio',
			},
		],
		default: 'text',
	},
	{
		displayName: 'Conteudo Ou URL',
		name: 'content',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o conteudo ou URL da imagem/video/audio a ser postado',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Texto Para Status De Imagem/Video',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Digite o texto para status de Imagem/Video',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Cor Do Background',
		name: 'backgroundColor',
		type: 'color',
		default: '#000000',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Font Do Texto',
		name: 'font',
		type: 'options',
		description: 'Escolha o tipo da font do seu texto',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
		options: [
			{
				name: 'SERIF',
				value: 1,
			},
			{
				name: 'NORICAN REGULAR',
				value: 2,
			},
			{
				name: 'BRYNDAN WRITE',
				value: 3,
			},
			{
				name: 'BEBASNEUE REGULAR',
				value: 4,
			},
			{
				name: 'OSWALD HEAVY',
				value: 5,
			},
		],
		default: 1,
	},

	// Campos = Enviar Documento
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Número Do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Documento',
		name: 'media',
		type: 'string',
		default: '',
		required: true,
		description: 'URL ou base64 do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'caption',
		type: 'string',
		default: '',

		description: 'Texto a ser enviado junto ao documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Nome Do Arquivo',
		name: 'fileName',
		type: 'string',
		default: 'document.pdf',

		description: 'Nome do arquivo do documento',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds of delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'Message ID que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['sendDocument'],
			},
		},
	},

	// Fields = Send Contact
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the contact',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'Full Name',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Full name of the contact',
					},
					{
						displayName: 'WhatsApp Number',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'WhatsApp number (numbers only, ex: 559999999999)',
					},
					{
						displayName: 'Formatted Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Formatted number (ex: +55 99 9 9999-9999)',
					},
					{
						displayName: 'Organization',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Organization/company name',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						description: 'Contact email address',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'Contact page URL',
					},
				],
			},
		],
		description: 'List of contacts to send',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},

	// Fields = Send List
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'List Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Main title of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Description of the list',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Button Text',
		name: 'buttonText',
		type: 'string',
		default: 'Ver Options',
		required: true,
		description: 'Text that will appear on the list button',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Footer Text',
		name: 'footerText',
		type: 'string',
		default: '',
		required: true,
		description: 'Text that will appear in the list footer',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Sections',
		name: 'sections',
		placeholder: 'Add Section',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'sectionValues',
				displayName: 'Section',
				values: [
					{
						displayName: 'Section Title',
						name: 'title',
						type: 'string',
						default: '',

					},
					{
						displayName: 'Rows',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'rowValues',
								displayName: 'Row',
								values: [
									{
										displayName: 'Title',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Row title',
									},
									{
										displayName: 'Description',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Row description (Optional)',
									},
									{
										displayName: 'Row ID',
										name: 'rowId',
										type: 'string',
										default: '',
										description: 'Unique option ID',
									}
								]
							}
						]
					}
				]
			}
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		}
	},
	{
		displayName: 'Options',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Enter how many milliseconds delay the message will have before being sent',
			},
			{
				displayName: 'Reply Message',
				name: 'quoted',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					messageQuoted: {
						messageId: '',
					},
				},
				options: [
					{
						name: 'messageQuoted',
						displayName: 'Message',
						values: [
							{
								displayName: 'Message ID',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID of the message to be replied to',
							},
						],
					},
				],
			},
			{
				displayName: 'Mentions',
				name: 'mentions',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {
					mentionsSettings: {
						mentionsEveryOne: false,
						mentioned: '',
					},
				},
				options: [
					{
						name: 'mentionsSettings',
						displayName: 'Settings',
						values: [
							{
								displayName: 'Mention Everyone',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Numbers to Mention',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Enter the numbers you want to mention separated by comma (ex: 5511999999999,5511888888888)',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},

	// Fields = Send Buttons
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Title of the message with buttons',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descrição da Message com botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Rodapé',
		name: 'footer',
		type: 'string',
		default: '',
		//required: false,
		description: 'Texto do rodapé da Message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Botões',
		name: 'buttons',
		placeholder: 'Adicionar Botão',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			maxValue: 3,
		},
		default: {},
		options: [
			{
				name: 'buttonValues',
				displayName: 'Botão',
				values: [
					{
						displayName: 'Tipo',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Resposta',
								value: 'reply',
							},
							{
								name: 'Copiar',
								value: 'copy',
							},
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Ligar',
								value: 'call',
							},
						],
						default: 'reply',
					},
					{
						displayName: 'Texto Do Botão',
						name: 'displayText',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['reply'],
							},
						},
					},
					{
						displayName: 'Código Para Copiar',
						name: 'copyCode',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
					},
					{
						displayName: 'Número De Telefone',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
					},
				],
			},
		],
		description: 'Botões da Message (máximo 3)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},

	// Campos = Enviar PIX
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Número Do Destinatário',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,

		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Nome Do Beneficiário',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Nome do beneficiário do PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Tipo Da Chave',
		name: 'keyType',
		type: 'options',
		options: [
			{
				name: 'Telefone',
				value: 'phone',
			},
			{
				name: 'E-Mail',
				value: 'email',
			},
			{
				name: 'CPF',
				value: 'cpf',
			},
			{
				name: 'CNPJ',
				value: 'cnpj',
			},
			{
				name: 'Aleatória',
				value: 'random',
			},
		],
		default: 'email',
		required: true,
		description: 'Tipo da chave PIX',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Chave PIX',
		name: 'key',
		type: 'string',
		default: '',
		required: true,
		description: 'Chave PIX do beneficiário',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-pix'],
			},
		},
	},
	{
		displayName: 'Enviar Para Todos',
		name: 'allContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to send status to all contacts',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
			},
		},
	},
	{
		displayName: 'Lista De Contatos',
		name: 'statusJidList',
		type: 'string',
		default: '',
		required: true,
		description: 'Lista de contatos que receberão o status (separados por vírgula)',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-stories'],
				allContacts: [false],
			},
		},
	},

	// Campos = Reagir Message
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Número Do Chat',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Número do chat onde está a Message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'Message ID que receberá a reação',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Message Própria',
		name: 'fromMe',
		type: 'boolean',
		default: true,
		description: 'Whether this is your own message',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Emoji Da Reação',
		name: 'reaction',
		type: 'string',
		default: '👍',
		required: true,
		description: 'Emoji que será usado como reação',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	}
];
