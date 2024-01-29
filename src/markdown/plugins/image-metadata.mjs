import { visit } from 'unist-util-visit'
import probe from 'probe-image-size'

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node) {
  const img = node
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}

/**
 * Adds the image's `height` and `width` to it's properties.
 */
async function addMetadata(node) {
  try {
    const imageResult = await probe(node.properties.src)

    node.properties.width = imageResult.width
    node.properties.height = imageResult.height
  } catch (err) {
    throw new Error(`Error getting image size ${err}`)
  }
}

/**
 * This is a Rehype plugin that finds image `<img>` elements and adds the height and width to the properties.
 */
export default function imageMetadata() {
  return async function transformer(tree, file) {
    const imgNodes = []

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        imgNodes.push(node)
      }
    })

    for (const node of imgNodes) {
      await addMetadata(node)
    }

    return tree
  }
}
