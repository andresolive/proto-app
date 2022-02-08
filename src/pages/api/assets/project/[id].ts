import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const assets = await db.Asset.findAll({
        where: {
          ProjectId: req.query.id
        }
      })
      res.send(assets);
    }
    catch (e) {
      console.error('Error getting project\'s assets! ', e)
      res.statusCode = 500;
    }
  })

export default handler;