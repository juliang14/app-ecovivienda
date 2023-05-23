export interface Login{
    documentType : string| null;
    document : string| null;
    email : string| null;
    password : string;
}

/*export interface Login {
    init: {
      isRedirect: string,
      query: string
    },
    body: {
        documentType : string;
        document : string;
        email : string;
        password : string;
    }
  }*/