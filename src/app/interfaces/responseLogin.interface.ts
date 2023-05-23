export interface ResponseLogin{
    responseDTO: ResponseDto
    mapServletResponse: MapServletResponse
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

export interface MapServletResponse {
  ID: string
  NOMBRE: string
  PRIMER_NOMBRE: string
  PRIMER_APELLIDO: string
  TIPO_DOCUMENTO: string
  NUMERO_DOCUMENTO: string
  EDAD: string
  TELEFONO: string
  DIRECCION: string
  EMAIL: string
  ROL: string
}
