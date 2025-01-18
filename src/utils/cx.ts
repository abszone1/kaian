
export function cx<T extends string | undefined | null| boolean>(...values:(T | T[])[]){
    return values.flatMap(v=>v).filter(v=>v).join(' ')
}
