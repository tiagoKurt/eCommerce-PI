export type Session = {
  id: string;
  data_registro: Date;

}

export type Usuario ={
  id : number;
  email: string;
  cpf: string;
  telefone : string;
  tipoUsuario: string;
  nome: string;
}

 
export type LoginResponse ={
  session: Session
  usuario: Usuario
}