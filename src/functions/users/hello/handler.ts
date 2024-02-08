import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'

import { type Context } from 'aws-lambda'
import type schema from './schema'

const findAll: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event,
  context: Context
) => {
  try {
    const { name } = event.body
    const { awsRequestId } = context
    return formatJSONResponse({
      message: `Hello ${name}, welcome to the exciting Serverless world!`,
      awsRequestId
    })
  } catch (error) {
    return formatJSONResponse({
      error: error.message
    })
  }
}

export const main = middyfy(findAll)
