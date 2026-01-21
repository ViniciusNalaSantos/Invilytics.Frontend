export interface GraphLabelsDto {
    key: string;
    label: string;
};

export interface LineGraphDataDto {
    label: string;
    data: any[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
}

export interface StackBarGraphDataDto {
    label: string;
    data: any[];
    backgroundColor: string;
    stack: string;
}