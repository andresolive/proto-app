import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const db = require('../../../db/models/index');

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try{
      const listings = await db.Listing.findAll()
      res.send(listings);
    }
    catch (e) {
      console.error('Error getting all listings! ', e)
      res.statusCode = 500;
    }
  })

export default handler;