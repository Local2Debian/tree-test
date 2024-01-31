import { TreeNodeData } from './interfaces'

export class TreeNode {
    parent: TreeNode | null = null // инстанс узла родителя
    children: TreeNode[] = [] // список детей
    data: TreeNodeData // данные объекта

    constructor (data: TreeNodeData) {
        this.data = data
    }

    // установить родителя
    setParent (parent: TreeNode): void {
        this.parent = parent
        // добавляем родителю текущий узел в детей
        parent.children.push(this)
    }

    // Получить дочерние вложенные элементы
    getNestedChilds (): TreeNodeData[] {
        // Список вложенных дочерних элементов
        const nestedChildren: TreeNodeData[] = []

        // Функция замыкания
        const traverse = (node: TreeNode, includeFirst = true) => {
            // флаг для включения элемента в список
            if (includeFirst) { nestedChildren.push(node.data) }
            // проходимся по остальным дочерним элементам
            for (const child of node.children) {
                traverse(child)
            }
        };
        
        // Вызываем замыкание
        traverse(this, false)

        return nestedChildren
    }

    // Получить родительские вложенные элементы
    getNestedParents () {
        // Список вложенных родителей
        const nestedParents: TreeNodeData[] = []

        // Функция замыкания
        const traverse = (node: TreeNode) => {
            if (node.parent) {
                // Кладем узел в список
                nestedParents.push(node.parent.data)
                // Проходимся по остальным родителям
                traverse(node.parent)
            }
        }

        // Вызываем замыкание
        traverse(this)

        return nestedParents
    }
}