import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next"

const db = require('../../../db/models/index')


const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const assets = await db.Asset.findAll()
      // console.log(assets);
      res.send(assets);
    }
    catch (e) {
      console.error('Error getting all assets! ', e)
      res.statusCode = 500;
    }
  })

export default handler;



// eslint-disable-next-line import/no-anonymous-default-export
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

// }