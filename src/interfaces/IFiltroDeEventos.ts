export type IStatus = 'completo' | 'incompleto' | null;

export interface IFiltroDeEventos {
  data?: Date | null
  status?: IStatus
}