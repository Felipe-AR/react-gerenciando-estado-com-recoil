import { useSetRecoilState } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../atom'

export const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    return setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(item => item.id === evento.id)
      return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)]
    })
  }
}