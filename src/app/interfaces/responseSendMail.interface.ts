export interface ResponseSendMail{
    responseDTO: ResponseDto
    mapServletResponse: string
}

export interface ResponseDto {
  query: string
  code: string
  message: string
  tecnicalMessage: string
  idTransaction: string
  status: string
  tenicalDetail: string
}
