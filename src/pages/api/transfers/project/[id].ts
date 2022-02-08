import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const assetsWithTransfers = await db.Asset.findAll({
        where: {
          ProjectId: req.query.id
        },
        include: {
          model: db.Transfer
        }
      })
      res.send(assetsWithTransfers);
    }
    catch (e) {
      console.error('Error getting transfers by project id! ', e)
      res.statusCode = 500;
    }
  })

export default handler;