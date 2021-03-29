import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Rodrigo'},
    {id: 2, name: 'Gabriel'},
    {id: 3, name: 'Italo'},
  ]

  return response.json(users);
}