/* eslint-disable import/no-anonymous-default-export */
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next"
const { Sequelize } = require('../../../../db/models/index')
const Op = Sequelize.Op;

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const project = await db.Project.findOne({
        where: {
          description: {
            [Op.iLike]: `%${req.query.name}%`
          }
        }
      })
      if (project) {
        res.send(project)
      }
      else {
        res.send('No project matches the description.')
      }
    }
    catch (e) {
      console.error('Error getting projects by name! ', e)
      res.statusCode = 500;
    }
  })

export default handler;