
const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = 'c80b4b2a733c4e03bd9c73637268f368'

export default async(req, res) => {

  const data = await notion.pages.create({
    parent:{
      database_id: DATABASE_ID,
    },
    properties: {
      Name: {title: [{ text: { content: req.body.text }}]},
      Good: {checkbox: req.body.checkbox},
    },
  })
  res.status(200).json(data)
}