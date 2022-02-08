/* eslint-disable import/no-anonymous-default-export */
import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next"
const { Sequelize } = require('../../../../db/models/index')
const Op = Sequelize.Op;

const db = require('../../../../db/models/index')

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.query.name)
    const project = await db.Project.findOne({
      where: {
        description: {
          [Op.like]: `%${req.query.name}%`
        }
      }
    })
    res.send(project)
  })

export default handler;