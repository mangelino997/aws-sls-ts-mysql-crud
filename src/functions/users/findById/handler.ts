import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import {
	type APIGatewayProxyResult,
	type APIGatewayProxyEvent,
	type Context,
} from 'aws-lambda';

const findById = async (
	event: APIGatewayProxyEvent,
	context: Context,
): Promise<APIGatewayProxyResult> => {
	try {
		const { id } = event.pathParameters;
		const { age } = event.queryStringParameters;
		const { awsRequestId } = context;
		console.log(awsRequestId);
		return formatJSONResponse({
			message: `Hello ${id}- age: ${age}, welcome to the exciting Serverless world!`,
		});
	} catch (error) {
		return formatJSONResponse({ error: error.message });
	}
};

export const main = middyfy(findById);
