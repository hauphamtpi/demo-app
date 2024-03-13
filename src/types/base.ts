export interface ResponseApi<T> {
  data: T
  status: number
  message: string
  error?: any
}
