import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from "next"
const db = require('../../db/models/index')


const handler = nextConnect()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const assets = await db.Asset.findAll()
    // console.log(assets);
    res.send(assets);
  })

export default handler;



// eslint-disable-next-line import/no-anonymous-default-export
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

// }