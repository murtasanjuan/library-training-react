
export interface Book {
    idBook: string;
    title: string;
    author: string;
    preview: string;
    date?: Date;
    content?: string;
}

export interface Action {
    type: string;
    payload: any;
    error: any;
}

export interface StateBooks {
    products: Book[];
    error: any,
    pending: boolean;
}