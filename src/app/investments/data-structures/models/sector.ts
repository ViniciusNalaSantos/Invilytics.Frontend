import { Asset } from "./asset"

export interface Sector {
    name: string,
    position: number,
    invested: number,
    assets?: Asset[]
}