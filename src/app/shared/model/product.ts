export interface Iproduct {
    pname: string;
    pdetail: string;
    pstatus: IproStatus;
    id: string;
}


export type IproStatus = 'In-Progress' | 'Dispatched' | 'Delivered';