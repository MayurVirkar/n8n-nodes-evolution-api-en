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
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Lista de números para mencionar (separados por vírgula)',
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
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
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
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			//{
			//	displayName: 'Responder Mensagem',
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
			//			displayName: 'Mensagem',
			//			values: [
			//				{
			//					displayName: 'ID da Mensagem',
			//					name: 'messageId',
			//					type: 'string',
			//					default: '',
			//					description: 'ID da mensagem que será respondida',
			//				},
			//			],
			//		},
			//	],
			//},

			//{
			//	displayName: 'Menções',
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
			//			displayName: 'Configurações',
			//			values: [
			//				{
			//					displayName: 'Mencionar Todos',
			//					name: 'mentionsEveryOne',
			//					type: 'boolean',
			//					default: false,
			//					description: 'Menciona todos os participantes do grupo',
			//				},
			//				{
			//					displayName: 'Números para Mencionar',
			//					name: 'mentioned',
			//					type: 'string',
			//					default: '',
			//					displayOptions: {
			//						show: {
			//							mentionsEveryOne: [false],
			//						},
			//					},
			//					description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
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
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
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
		displayName: 'Mínimo 2 opções, Máximo 12. Cada opção deve ser única.',
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
		displayName: 'Opções Da Enquete',
		name: 'options_display',
		type: 'fixedCollection',
		default: { metadataValues: [] },
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		description: 'Digite as opções da enquete (mínimo 2, máximo 12). Cada opção deve ser única.',
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
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
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
		displayName: 'Mensagem',
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
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
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

	// Campos = Enviar Contato
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar o contato',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
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
				operation: ['send-contact'],
			},
		},
	},
	{
		displayName: 'Contatos',
		name: 'contacts',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: { contactValues: [] },
		options: [
			{
				name: 'contactValues',
				displayName: 'Contato',
				values: [
					{
						displayName: 'Nome Completo',
						name: 'fullName',
						type: 'string',
						default: '',
						required: true,
						description: 'Nome completo do contato',
					},
					{
						displayName: 'Número Do WhatsApp',
						name: 'wuid',
						type: 'string',
						default: '',
						required: true,
						description: 'Número do WhatsApp (apenas números, ex: 559999999999)',
					},
					{
						displayName: 'Número Formatado',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						required: true,
						description: 'Número formatado (ex: +55 99 9 9999-9999)',
					},
					{
						displayName: 'Organização',
						name: 'organization',
						type: 'string',
						default: '',
						description: 'Nome da organização/empresa',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						description: 'Endereço de email do contato',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description: 'URL da página do contato',
					},
				],
			},
		],
		description: 'Lista de contatos para enviar',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-contact'],
			},
		},
	},

	// Campos = Enviar Lista
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
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
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Título Da Lista',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título principal da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Descrição',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descrição da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Texto Do Botão',
		name: 'buttonText',
		type: 'string',
		default: 'Ver Opções',
		required: true,
		description: 'Texto que aparecerá no botão da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Texto Do Rodapé',
		name: 'footerText',
		type: 'string',
		default: '',
		required: true,
		description: 'Texto que aparecerá no rodapé da lista',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-list'],
			},
		},
	},
	{
		displayName: 'Seções',
		name: 'sections',
		placeholder: 'Adicionar Seção',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'sectionValues',
				displayName: 'Seção',
				values: [
					{
						displayName: 'Título Da Seção',
						name: 'title',
						type: 'string',
						default: '',

					},
					{
						displayName: 'Linhas',
						name: 'rows',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								name: 'rowValues',
								displayName: 'Linha',
								values: [
									{
										displayName: 'Título',
										name: 'title',
										type: 'string',
										default: '',
										required: true,
										description: 'Título da linha',
									},
									{
										displayName: 'Descrição',
										name: 'description',
										type: 'string',
										default: '',
										description: 'Descrição da linha (Opcional)',
									},
									{
										displayName: 'ID Da Linha',
										name: 'rowId',
										type: 'string',
										default: '',
										description: 'ID único da opção',
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
		displayName: 'Opções',
		name: 'options_message',
		type: 'collection',
		placeholder: 'Adicionar Campo',
		default: {},
		options: [
			{
				displayName: 'Delay',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Digite quantos milisegundos de delay a mensagem terá antes de ser enviada',
			},
			{
				displayName: 'Responder Mensagem',
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
						displayName: 'Mensagem',
						values: [
							{
								displayName: 'ID Da Mensagem',
								name: 'messageId',
								type: 'string',
								default: '',
								description: 'ID da mensagem que será respondida',
							},
						],
					},
				],
			},
			{
				displayName: 'Menções',
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
						displayName: 'Configurações',
						values: [
							{
								displayName: 'Mencionar Todos',
								name: 'mentionsEveryOne',
								type: 'boolean',
								default: false,
								description: 'Whether to mention all participants in the group',
							},
							{
								displayName: 'Números Para Mencionar',
								name: 'mentioned',
								type: 'string',
								default: '',
								displayOptions: {
									show: {
										mentionsEveryOne: [false],
									},
								},
								description: 'Digite os números que deseja mencionar separados por vírgula (ex: 5511999999999,5511888888888)',
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

	// Campos = Enviar Botões
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar os botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
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
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Título',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'Título da mensagem com botões',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-buttons'],
			},
		},
	},
	{
		displayName: 'Descrição',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		description: 'Descrição da mensagem com botões',
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
		description: 'Texto do rodapé da mensagem',
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
		description: 'Botões da mensagem (máximo 3)',
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

	// Campos = Reagir Mensagem
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
		description: 'Número do chat onde está a mensagem',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'ID Da Mensagem',
		name: 'messageId',
		type: 'string',
		default: '',
		required: true,
		description: 'ID da mensagem que receberá a reação',
		displayOptions: {
			show: {
				resource: ['messages-api'],
				operation: ['send-reaction'],
			},
		},
	},
	{
		displayName: 'Mensagem Própria',
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
