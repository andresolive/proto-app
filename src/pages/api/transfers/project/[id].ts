import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const assetsWithTransfers = await db.Asset.findAll({
      where: {
        ProjectId: req.query.id
      },
      include: {
        model: db.Transfer
      }
    })
    res.send(assetsWithTransfers);
  })

export default handler;