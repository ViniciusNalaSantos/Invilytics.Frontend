import { Sector } from "./sector";

export interface Investment {
    name: string,
    portfolioValue: number,
    totalInvested: number,
    yield: number,
    sectors: Sector[]
}