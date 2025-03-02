import { NextApiRequest, NextApiResponse } from 'next';

interface GraphQLRequestBody {
          query: string;
          variables?: { [key: string]: unknown };
}

interface GraphQLResponse {
          data?: { [key: string]: unknown };
          errors?: { message: string; locations?: { line: number; column: number }[]; path?: string[] }[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
          const response = await fetch("http://magento.test/graphql", {
                    method: "POST",
                    headers: {
                              "Content-Type": "application/json",
                              "Authorization": req.headers.authorization || "",
                    },
                    body: JSON.stringify(req.body as GraphQLRequestBody),
          });

          const data: GraphQLResponse = await response.json();
          res.status(200).json(data);
}
        