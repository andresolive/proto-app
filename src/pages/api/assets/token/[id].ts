import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const asset = await db.Asset.findOne({
      where: {
        token_id: req.query.id
      }
    })
    res.send(asset);
  })

export default handler;