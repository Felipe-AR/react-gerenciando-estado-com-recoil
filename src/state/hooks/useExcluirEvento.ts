import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

export const useExcluirEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    setListaDeEventos(listaAntiga => listaAntiga.filter(item => item.id !== evento.id))
  }
}