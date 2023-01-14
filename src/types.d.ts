

export interface Props {
    title?: string
    price?: string
    desc?: string
    product?: {
        title: string
        price: string
        desc: string
    }
    setTotal: SetTotal
}

export interface SetTotal {
    total: number
    setTotal: React.Dispatch<React.SetStateAction<{total:number}>>
}