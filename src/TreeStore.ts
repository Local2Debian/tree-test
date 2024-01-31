import { TreeNode } from './TreeNode'
import { TreeNodeData } from './interfaces'

export class TreeStore {
    state: Record<number, TreeNode> = {} // список узлов дерева
    constructor (items: TreeNodeData[]) {
        // итерируемся пока в массиве есть объекты
        while (items.length) {
            // получаем первый объект
            const item: TreeNodeData | undefined = items.shift()

            // если объект не получен прерываем выполнение
            if (!item) { break }

            // создаем узел объекта или получаем его из state`а 
            const node: TreeNode = this.state?.[item.id] || new TreeNode(item)

            // если узла нет в state - устанавливаем узел в state
            if (!this.state?.[item.id]) { this.state[item.id] = node }

            // если родитель указан root пропускаем итерацию
            if (item.parent === 'root') { continue }
            
            // если у элемента есть родитель и
            // в state есть родитель текущего узла - устанавливаем родителя
            if (this.state?.[item.parent]) {
                node.setParent(this.state[item.parent])
            // если указан родитель, но родителя нет в state - возвращаем в массив
            } else if (item.parent) {
                items.push(item)
            }
        }
    }
    
    // Получить изначальный массив элементов
    getAll (): TreeNodeData[] {
        return Object.values(this.state).map((item: TreeNode) => item.data)
    }
    
    // Получить узел по id
    getItem (id: number): TreeNodeData {
        return this.state?.[id].data 
    }

    // Получить дочерние элементы узла
    getChildren (id: number): TreeNodeData[] {
        return this.state?.[id].children.map((item: TreeNode) => item.data)
    }

    // Получить все дочерние элементы узла в том числе и вложенные
    getAllChildren (id: number): TreeNodeData[] {
        return this.state?.[id].getNestedChilds()
    }

    // Получить цепочку родителей
    getAllParents (id: number): TreeNodeData[] {
        return this.state?.[id].getNestedParents()
    }
}
