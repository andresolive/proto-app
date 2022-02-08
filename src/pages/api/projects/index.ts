/* eslint-disable import/no-anonymous-default-export */
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next"

const db = require('../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const projects = await db.Project.findAll()
    res.send(projects)
  })

export default handler;