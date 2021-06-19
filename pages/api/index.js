
const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = 'c80b4b2a733c4e03bd9c73637268f368'

export default async(req, res) => {
  const { good } = req.query
  const database = await notion.databases.query({
    database_id: DATABASE_ID,
    property: 'Good', 
    checkbox: {
      equals: Boolean(good)
    }
  })
  res.status(200).json(database)
}