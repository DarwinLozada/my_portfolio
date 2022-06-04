import { Processor } from 'unified'
import { Node } from 'unist'
import { visit } from 'unist-util-visit'
import { VFile } from 'vfile'

const probe = require('probe-image-size')

/**
 * An `<img>` HAST node
 */
interface ImageNode extends Node {
  type: 'element'
  tagName: 'img'
  properties: {
    src: string
    height?: number
    width?: number
  }
}

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode
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
async function addMetadata(node: ImageNode): Promise<void> {
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
export default function imageMetadata(this: Processor) {
  return async function transformer(tree: Node, file: VFile): Promise<Node> {
    const imgNodes: ImageNode[] = []

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
