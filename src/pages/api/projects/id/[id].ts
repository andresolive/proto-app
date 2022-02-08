/* eslint-disable import/no-anonymous-default-export */
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next"

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.query.id)
    const project = await db.Project.findOne({
      where: {
        id: req.query.id
      },
      include: {
        model: db.Metric,
        model: db.Trait_value,
        model: db.Asset,
        include: {
          model: db.Transfer,
          model: db.Listing
        }
      }
    })
    if (project) {
      res.send(project)
    }
    else {
      // res.status = 404
      res.send(`Error! Project with id = ${req.query.project_id} does not exist!`)
    }
  })

export default handler;