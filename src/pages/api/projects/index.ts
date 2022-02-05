/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next"
import { connection } from "../../../utils/db"

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query)
  res.json('projects API')

}