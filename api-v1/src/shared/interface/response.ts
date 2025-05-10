import { Pagination } from "./pagination"

export interface APIresponse<T = any> {
    data : T,
    statusCode ?: number
    pagination ?: Pagination
}