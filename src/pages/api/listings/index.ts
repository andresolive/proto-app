import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../db/models/index');

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const listings = await db.Listing.findAll()
    res.send(listings);
  })

export default handler;