import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const asset = await db.Asset.findOne({
        where: {
          token_id: req.query.id
        }
      })
      res.send(asset);
    }
    catch (e) {
      console.error('Error getting assets by token id! ', e)
      res.statusCode = 500;
    }
  })

export default handler;