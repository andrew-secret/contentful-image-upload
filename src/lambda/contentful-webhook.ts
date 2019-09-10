import { Handler, Context, APIGatewayEvent } from "aws-lambda";
import { createClient } from "contentful-management";
import { decode } from "base64-arraybuffer";

interface Response {
  statusCode: number;
  body: string;
}

const handler: Handler = async (event: APIGatewayEvent, context: Context) => {
  const { user } = context.clientContext;

  if (user) {
    const {
      CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_SPACE_ID,
      NETLIFY_WEBHOOK
    } = process.env;

    const params = event.queryStringParameters;

    const client = createClient({
      accessToken: CONTENTFUL_ACCESS_TOKEN
    });
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    const env = await space.getEnvironment("master");

    const tmpAsset = await env.createAssetFromFiles({
      fields: {
        title: {
          "en-US": params.title
        },
        description: {
          "en-US": params.description
        },
        file: {
          "en-US": {
            fileName: params.title,
            contentType: "image/jpg",
            file: event.body
          }
        }
      }
    });

    const asset = await tmpAsset.processForLocale("en-US", {
      processingCheckWait: 2000
    });

    await asset.publish();

    const entry = await space.createEntry("customImage", {
      fields: {
        title: {
          "en-US": params.title
        },
        image: {
          "en-US": {
            sys: { id: asset.sys.id, linkType: "Asset", type: "Link" }
          }
        }
      }
    });

    await entry.publish();
    await space.getWebhook(NETLIFY_WEBHOOK);
  }

  const response: Response = {
    statusCode: user ? 200 : 401,
    body: JSON.stringify({
      msg: user ? `Successful` : "No permission"
    })
  };

  return response;
};

export { handler };
