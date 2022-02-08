import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../../db/models/index');

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const traits = await db.Trait_value.findAll({
      where: {
        ProjectId: req.query.id
      }
    })
    res.send(traits);
  })

export default handler;