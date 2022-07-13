import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletors"

export const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}