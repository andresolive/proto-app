/* eslint-disable import/no-anonymous-default-export */
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next"

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
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
        res.statusCode = 404
        res.send(`Project with id ${req.query.id} does not exist!`)
      }
    }
    catch (e) {
      console.error('Error getting project by id! ', e)
      res.statusCode = 500;
    }
  })

export default handler;