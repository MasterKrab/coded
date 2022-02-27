import { getAllFilesMetadata } from 'lib/mdx'
import generateRSSFeed from 'lib/generateRSSFeed'
import generateSiteMap from 'lib/generateSiteMap'
import readPostsAndSendToAlgolia from 'lib/readPostsAndSendToAlgolia'

const posts = getAllFilesMetadata()

readPostsAndSendToAlgolia(posts)
generateSiteMap(posts)
generateRSSFeed(posts)
