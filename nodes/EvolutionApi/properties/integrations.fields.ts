import { INodeProperties } from 'n8n-workflow';

export const integrationsFields: INodeProperties[] = [
	// Fields = Chatwoot
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForChatwoot',
		type: 'options',
		options: [
			{
				name: 'Set Chatwoot',
				value: 'setChatwoot',
			},
			{
				name: 'Check Chatwoot',
				value: 'findChatwoot',
			},
		],
		default: 'setChatwoot',
		description: 'Choose between enabling/disabling Chatwoot or checking Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
			},
		},
	},
	{
		displayName: 'Enable Chatwoot',
		name: 'enabled',
		type: 'boolean',
		default: true,
		description: 'Whether to enable or disable integration with Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot URL',
		name: 'chatwootUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the Chatwoot URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Account ID',
		name: 'chatwootAccountId',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the Chatwoot account ID',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Chatwoot Admin Token',
		name: 'chatwootToken',
		type: 'string',
		required: true,
		typeOptions: {
			password: true,
		},
		default: '',
		description: 'Enter the Chatwoot admin token',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Chatwoot Agent Signature',
		name: 'chatwootSignMsg',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable the Chatwoot agent signature',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Reopen Messages in Chatwoot',
		name: 'chatwootReopenConversation',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable reopening messages in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Start Conversations as Pending in Chatwoot',
		name: 'chatwootConversationPending',
		type: 'boolean',
		default: false,
		description: 'Whether to start conversations as pending in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Import Contacts to Chatwoot',
		name: 'chatwootImportContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to import contacts to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Chatwoot Inbox Name',
		name: 'chatwootNameInbox',
		type: 'string',
		default: '',
		description: 'Optional: Enter the Chatwoot Inbox name',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},	{
		displayName: 'Merge Brazilian Contacts in Chatwoot',
		name: 'chatwootMergeBrazilContacts',
		type: 'boolean',
		default: false,
		description: 'Whether to merge Brazilian contacts in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Import Messages to Chatwoot',
		name: 'chatwootImportMessages',
		type: 'boolean',
		default: false,
		description: 'Whether to import messages to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Import Messages from How Many Days to Chatwoot',
		name: 'chatwootDaysLimitImportMessages',
		type: 'number',
		default: 0,
		description:
			'Optional: Enter the number of days to limit message import to Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Create Inbox',
		name: 'chatwootAutoCreate',
		type: 'boolean',
		default: true,
		description: 'Whether to create an inbox automatically',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'QR Code Contact Name in Chatwoot',
		name: 'chatwootOrganization',
		type: 'string',
		default: '',
		description: 'Optional: Enter the QR code contact name in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},
	{
		displayName: 'Logo URL for Contact in Chatwoot',
		name: 'chatwootLogo',
		type: 'string',
		default: 'https://github.com/user-attachments/assets/4d1e9cd6-377a-4383-820a-9a97e6cfbb63',
		description: 'Optional: Enter the logo URL for the contact in Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['chatwoot'],
				resourceForChatwoot: ['setChatwoot'],
			},
		},
	},

	// Fields = Typebot
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForTypebot',
		type: 'options',
		options: [
			{
				name: 'Add Typebot',
				value: 'createTypebot',
			},
			{
				name: 'Check Typebot',
				value: 'findTypebot',
			},
			{
				name: 'Update Typebot',
				value: 'updateTypebot',
			},
			{
				name: 'Delete Typebot',
				value: 'deleteTypebot',
			},
			{
				name: 'Start Typebot',
				value: 'startTypebot',
			},
			{
				name: 'Find Session in Typebot',
				value: 'fetchSessionsTypebot',
			},
			{
				name: 'Change Session Status in Typebot',
				value: 'changeStatusTypebot',
			},
		],
		default: 'createTypebot',
		description: 'Choose an option to perform with the Typebot integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
			},
		},
	},

	// updateTypebot
	{
		displayName: 'Typebot ID',
		name: 'typebotId',
		type: 'string',
		default: '',
		description: 'Enter the Typebot ID you want to search for, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: [
					'updateTypebot',
					'findTypebot',
					'deleteTypebot',
					'fetchSessionsTypebot',
					'changeStatusTypebot',
				],
			},
		},
	},

	//If createTypebot or updateTypebot
	{
		displayName: 'Typebot API URL',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your typebot URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Typebot Name',
		name: 'typebot',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of your flow in typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot', 'startTypebot'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Escolha uma opção para realizar com a integração do Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Operador Do Gatilho',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contem',
				value: 'contains',
			},
			{
				name: 'Igual À',
				value: 'equals',
			},
			{
				name: 'Começa com',
				value: 'startsWith',
			},
			{
				name: 'Termina com',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Escolha uma opção para realizar com a integração do Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Gatilho',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Digite a palavra/frase ou regex para ser usado como gatilho para iniciar o Typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira Em (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Digite quantos minutos sem respostas o bot devera ser desativado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'keywordFinish',
		type: 'string',
		default: '#sair',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Delay Padrão Da Mensagem (Em Milésimos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Digite quantos milisegundos o bot terá de delay',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensagem não reconhecida',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Escuta Mensagens Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este é o tempo que o bot ficará esperando as proximas mensagens após receber uma mensagem, depois ele juntará todas as mensagens em uma só',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['createTypebot', 'updateTypebot'],
			},
		},
	},

	// startTypebot
	{
		displayName: 'Numero Do Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid do destinarario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot', 'changeStatusTypebot'],
			},
		},
	},
	{
		displayName: 'Iniciar Seção',
		name: 'startSession',
		type: 'boolean',
		default: false,
		description: 'Whether to enable or disable integration with Chatwoot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},
	{
		displayName: 'Variáveis',
		name: 'variables',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				name: 'variable',
				displayName: 'Variável',
				values: [
					{
						displayName: 'Nome Da Variavel',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Nome da variável',
					},
					{
						displayName: 'Valor Da Variavel',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Valor da variável',
					},
				],
			},
		],
		description: 'Variáveis para enviar ao typebot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['startTypebot'],
			},
		},
	},

	// Change Session Status
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Aberta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Fechada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Escolha qual será o status da seção',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['typebot'],
				resourceForTypebot: ['changeStatusTypebot'],
			},
		},
	},

	// EVOLUTION BOT
	{
		displayName: 'Nome Da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	{
		displayName: 'O Que Deseja Fazer',
		name: 'resourceForEvolutionBot',
		type: 'options',
		options: [
			{
				name: 'Adicionar Evolution Bot',
				value: 'createEvolutionBot',
			},
			{
				name: 'Verificar Evolution Bot',
				value: 'findEvolutionBot',
			},
			{
				name: 'Atualizar Evolution Bot',
				value: 'updateEvolutionBot',
			},
			{
				name: 'Deletar Evolution Bot',
				value: 'deleteEvolutionBot',
			},
			{
				name: 'Procurar Sessão No Evolution Bot',
				value: 'fetchSessionsEvolutionBot',
			},
			{
				name: 'Alterar Status Da Sessão No Evolution Bot',
				value: 'changeStatusEvolutionBot',
			},
		],
		default: 'createEvolutionBot',
		description: 'Escolha uma opção para realizar com a integração do EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
			},
		},
	},

	// update EvolutionBot
	{
		displayName: 'ID Do Evolution Bot',
		name: 'evolutionBotId',
		type: 'string',
		default: '',
		description: 'Digite o ID do Evolution Bot que deseja buscar, deixe vazio para procurar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: [
					'findEvolutionBot',
					'updateEvolutionBot',
					'deleteEvolutionBot',
					'fetchSessionsEvolutionBot',
					'changeStatusEvolutionBot',
				],
			},
		},
	},

	//Se createEvolutionBot ou updateEvolutionBot
	{
		displayName: 'URL Da API Do Evolution Bot',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite a URL do seu Evolution Bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'ApiKey Da Evolution Bot',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Digite a ApiKey do seu Evolution Bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Tipo De Gatilho',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palavra Chave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Escolha uma opção para realizar com a integração do EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Operador Do Gatilho',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contem',
				value: 'contains',
			},
			{
				name: 'Igual À',
				value: 'equals',
			},
			{
				name: 'Começa com',
				value: 'startsWith',
			},
			{
				name: 'Termina com',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Escolha uma opção para realizar com a integração do EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Gatilho',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Digite a palavra/frase ou regex para ser usado como gatilho para iniciar o EvolutionBot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira Em (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Digite quantos minutos sem respostas o bot devera ser desativado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'keywordFinish',
		type: 'string',
		default: '#sair',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Delay Padrão Da Mensagem (Em Milésimos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Digite quantos milisegundos o bot terá de delay',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensagem não reconhecida',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Escuta Mensagens Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este é o tempo que o bot ficará esperando as proximas mensagens após receber uma mensagem, depois ele juntará todas as mensagens em uma só',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},

	// Change Session Status EvolutionBot
	{
		displayName: 'Numero Do Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid do destinarario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Aberta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Fechada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Escolha qual será o status da seção',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['changeStatusEvolutionBot'],
			},
		},
	},

	// Dify
	{
		displayName: 'Nome Da Instancia',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância que vai enviar a mensagem',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'O Que Deseja Fazer',
		name: 'resourceForDifyBot',
		type: 'options',
		options: [
			{
				name: 'Adicionar Dify',
				value: 'createDify',
			},
			{
				name: 'Verificar Dify',
				value: 'findDify',
			},
			{
				name: 'Atualizar Dify',
				value: 'updateDify',
			},
			{
				name: 'Deletar Dify',
				value: 'deleteDify',
			},
			{
				name: 'Procurar Sessão No Dify',
				value: 'fetchSessionsDify',
			},
			{
				name: 'Alterar Status Da Sessão No Dify',
				value: 'changeStatusDify',
			},
		],
		default: 'createDify',
		description: 'Escolha uma opção para realizar com a integração do Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
			},
		},
	},
	{
		displayName: 'Tipo Do Bot',
		name: 'botType',
		type: 'options',
		options: [
			{
				name: 'Bot De Chat',
				value: 'chatBot',
			},
			{
				name: 'Gerador De Texto',
				value: 'textGenerator',
			},
			{
				name: 'Agente',
				value: 'agent',
			},
			{
				name: 'Fluxo De Trabalho',
				value: 'workflow',
			},
		],
		default: 'chatBot',
		required: true,
		description: 'Escolha o tipo do bot Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['dify'],
				resourceForDifyBot: ['createDify'],
			},
		},
	},

	// update Dify
	{
		displayName: 'ID Do Dify',
		name: 'difyBotId',
		type: 'string',
		default: '',
		description: 'Digite o ID do Dify que deseja buscar, deixe vazio para procurar todos',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: [
					'findDify',
					'updateDify',
					'deleteDify',
					'fetchSessionsDify',
					'changeStatusDify',
				],
			},
		},
	},

	//Se createDify ou updateDify
	{
		displayName: 'Url Do Dify',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite a URL do seu Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'ApiKey Do Dify',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		description: 'Digite a ApiKey do seu bot do Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Tipo De Gatilho',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Palavra Chave',
				value: 'keyword',
			},
			{
				name: 'Todos',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Escolha uma opção para realizar com a integração do Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Operador Do Gatilho',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contem',
				value: 'contains',
			},
			{
				name: 'Igual À',
				value: 'equals',
			},
			{
				name: 'Começa com',
				value: 'startsWith',
			},
			{
				name: 'Termina com',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Escolha uma opção para realizar com a integração do Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Gatilho',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite a palavra/frase ou regex para ser usado como gatilho para iniciar o Dify',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expira Em (Minutos)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Digite quantos minutos sem respostas o bot devera ser desativado',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'keywordFinish',
		type: 'string',
		default: '#sair',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Delay Padrão Da Mensagem (Em Milésimos)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Digite quantos milisegundos o bot terá de delay',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Palavra Chave De Finalização',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensagem não reconhecida',
		required: true,
		description: 'Digite a palavra/frase que sera usado para fechar o bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Escuta Mensagens Enviadas Por Mim',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Pausa O Bot Quando Eu Enviar Uma Mensagem',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Mantem a Sessão Do Bot Aberta',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},
	{
		displayName: 'Tempo De Espera (Em Segundos)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'Este é o tempo que o bot ficará esperando as proximas mensagens após receber uma mensagem, depois ele juntará todas as mensagens em uma só',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['createDify', 'updateDify'],
			},
		},
	},

	// Change Session Status Dify
	{
		displayName: 'Numero Do Destinatario',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid do destinarario',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Aberta',
				value: 'opened',
			},
			{
				name: 'Pausada',
				value: 'paused',
			},
			{
				name: 'Fechada',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Escolha qual será o status da seção',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['difyBot'],
				resourceForDifyBot: ['changeStatusDify'],
			},
		},
	},

	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},
	{
		displayName: 'What Do You Want to Do',
		name: 'resourceForFlowiseBot',
		type: 'options',
		options: [
			{
				name: 'Add Flowise',
				value: 'createFlowise',
			},
			{
				name: 'Check Flowise',
				value: 'findFlowise',
			},
			{
				name: 'Update Flowise',
				value: 'updateFlowise',
			},
			{
				name: 'Delete Flowise',
				value: 'deleteFlowise',
			},
			{
				name: 'Search Session in Flowise',
				value: 'fetchSessionsFlowise',
			},
			{
				name: 'Change Session Status in Flowise',
				value: 'changeStatusFlowise',
			},
		],
		default: 'createFlowise',
		description: 'Choose an option to perform with Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
			},
		},
	},

	// update Flowise
	{
		displayName: 'Flowise ID',
		name: 'flowiseBotId',
		type: 'string',
		default: '',
		description: 'Enter the Flowise ID you want to search, leave empty to search all',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: [
					'updateFlowise',
					'findFlowise',
					'deleteFlowise',
					'fetchSessionsFlowise',
					'changeStatusFlowise',
				],
			},
		},
	},

	//Se createFlowise ou updateFlowise
	{
		displayName: 'Flowise URL',
		name: 'apiUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Enter your Flowise URL',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Flowise API Key',
		name: 'apiKeyBot',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		description: 'Enter your Flowise bot API Key',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Trigger Type',
		name: 'triggerType',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'All',
				value: 'all',
			},
		],
		default: 'keyword',
		description: 'Choose an option to perform with Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Trigger Operator',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
		],
		default: 'contains',
		description: 'Choose an option to perform with Flowise integration',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Trigger',
		name: 'triggerValue',
		type: 'string',
		default: '',
		required: true,
		description:
			'Enter the word/phrase or regex to be used as trigger to start Flowise',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
				triggerType: ['keyword'],
			},
		},
	},
	{
		displayName: 'Expires In (Minutes)',
		name: 'expire',
		type: 'number',
		default: 0,
		required: true,
		description: 'Enter how many minutes without responses the bot should be deactivated',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Finish Keyword',
		name: 'keywordFinish',
		type: 'string',
		default: '#sair',
		required: true,
		description: 'Enter the word/phrase that will be used to close the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Default Message Delay (In Milliseconds)',
		name: 'delayMessage',
		type: 'number',
		default: 1000,
		required: true,
		description: 'Enter how many milliseconds the bot will have delay',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Unknown Message',
		name: 'unknownMessage',
		type: 'string',
		default: 'Mensagem não reconhecida',
		required: true,
		description: 'Enter the message that will be sent when the bot doesn\'t understand',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Listen to Messages Sent by Me',
		name: 'listeningFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to listen to messages sent by the instance owner',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Pause Bot When I Send a Message',
		name: 'stopBotFromMe',
		type: 'boolean',
		default: false,
		description: 'Whether to pause the bot when the instance owner sends a message',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Keep Bot Session Open',
		name: 'keepOpen',
		type: 'boolean',
		default: false,
		description: 'Whether to keep the bot session open',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},
	{
		displayName: 'Wait Time (In Seconds)',
		name: 'debounceTime',
		type: 'number',
		default: 0,
		required: true,
		description:
			'This is the time the bot will wait for the next messages after receiving a message, then it will join all messages into one',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['createFlowise', 'updateFlowise'],
			},
		},
	},

	// Change Session Status Flowise
	{
		displayName: 'Recipient Number',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'RemoteJid of the recipient',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Open',
				value: 'opened',
			},
			{
				name: 'Paused',
				value: 'paused',
			},
			{
				name: 'Closed',
				value: 'closed',
			},
		],
		default: 'opened',
		description: 'Choose what the session status will be',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['flowiseBot'],
				resourceForFlowiseBot: ['changeStatusFlowise'],
			},
		},
	},

	{
		displayName: 'Ignored JIDs',
		name: 'ignoreJids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'List of JIDs that will be ignored by the bot',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	},
	{
		displayName: 'Operator Type',
		name: 'triggerOperator',
		type: 'options',
		options: [
			{
				name: 'Contains',
				value: 'contains',
			},
			{
				name: 'Equals',
				value: 'equals',
			},
			{
				name: 'Starts With',
				value: 'startsWith',
			},
			{
				name: 'Ends With',
				value: 'endsWith',
			},
			{
				name: 'Regex',
				value: 'regex',
			},
			{
				name: 'None',
				value: 'none',
			},
		],
		default: 'equals',
		description: 'Choose the operator type for the trigger',
		displayOptions: {
			show: {
				resource: ['integrations-api'],
				operation: ['evolution-bot'],
				resourceForEvolutionBot: ['createEvolutionBot', 'updateEvolutionBot'],
			},
		},
	}
];
