import { getAllFilesMetadata } from './mdx.mjs'
import generateRSSFeed from './generateRSSFeed.mjs'
import generateSiteMap from './generateSiteMap.mjs'
import readPostsAndSendToAlgolia from './readPostsAndSendToAlgolia.mjs'

const posts = getAllFilesMetadata()

readPostsAndSendToAlgolia(posts)
generateSiteMap(posts)
generateRSSFeed(posts)
