
import { TreeStore } from './TreeStore'
import { TreeNodeData } from './interfaces'

const items = [
    { id: 4, parent: 2, type: 'four' },
    { id: 5, parent: 2, type: 'five' },
    { id: 6, parent: 2, type: 'six' },

    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'sec' },
    { id: 3, parent: 1, type: 'three' },

    { id: 7, parent: 4, type: 'seven' },
    { id: 8, parent: 4, type: 'eich' },

] as TreeNodeData[]

const ts = new TreeStore(items)

console.log("🚀 ~ ts.getAll():", ts.getAll())
console.log("🚀 ~ ts.getItem(7):", ts.getItem(7))
console.log("🚀 ~ ts.getChildren(4):", ts.getChildren(4))
console.log("🚀 ~ ts.getChildren(5):", ts.getChildren(5))
console.log("🚀 ~ ts.getChildren(2):", ts.getChildren(2))
console.log("🚀 ~ ts.getAllChildren(2):", ts.getAllChildren(2))
console.log("🚀 ~ ts.getAllParents(2):", ts.getAllParents(7))
