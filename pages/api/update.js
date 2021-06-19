
const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export default async(req, res) => {
  const hero = await notion.pages.update({
    page_id: req.body.id,
    properties: {
      Good: {
        checkbox: req.body.hero,
      }
    }
  })
  res.status(200).json(database)
}