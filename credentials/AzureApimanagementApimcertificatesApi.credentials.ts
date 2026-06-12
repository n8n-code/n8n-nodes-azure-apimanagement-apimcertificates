import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimcertificatesApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimcertificatesApi';

        displayName = 'Azure Apimanagement Apimcertificates API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimcertificates/azure-apimanagement-apimcertificates.png', dark: 'file:../nodes/AzureApimanagementApimcertificates/azure-apimanagement-apimcertificates.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimcertificates API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
