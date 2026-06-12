import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimcertificates implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimcertificates',
                name: 'N8nDevAzureApimanagementApimcertificates',
                icon: { light: 'file:./azure-apimanagement-apimcertificates.png', dark: 'file:./azure-apimanagement-apimcertificates.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage certificates in Azure API Management for backend mutual authentication.',
                defaults: { name: 'Azure Apimanagement Apimcertificates' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimcertificatesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
