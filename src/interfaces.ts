// Данные узла
export interface TreeNodeData {
    id: number
    parent: number | 'root'
    [key: string]: any
}

