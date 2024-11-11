const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Bytes | corinfaife.co',
    site_url: 'https://corinfaife.co',
    feed_url: 'https://corinfaife.co/bytes.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'bytes'))
  const allPosts = []
  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'bytes', name)
      )
      const frontmatter = matter(content)

      allPosts.push({
        title: frontmatter.data.title,
        url: '/bytes/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  allPosts.forEach((post) => {
      feed.item(post)
  })
  await fs.writeFile('./public/bytes.xml', feed.xml({ indent: true }))
}

generate()