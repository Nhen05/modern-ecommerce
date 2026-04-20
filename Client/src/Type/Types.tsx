export type LoadingState = 'idl' | 'loading' | 'success' | 'error';
export interface ApiRespone<T> {
    data: T;
    message?: string;
    status: number
}