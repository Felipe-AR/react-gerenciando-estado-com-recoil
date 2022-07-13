import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

const ehOMesmoDia = (primeiraData: Date, segundaData: Date) => {
  return primeiraData.toISOString().slice(0, 10) === segundaData.toISOString().slice(0, 10)
}

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todosOsEventos = get(listaDeEventosState)
    console.log(filtro.status);
    const eventos = todosOsEventos.filter(evento => {
      if (!filtro.data) {
        if (filtro.status === "completo") return evento.completo
        if (filtro.status === "incompleto") return !evento.completo
        return true
      }
      const status = filtro.status === "completo" ? true : false
      return ehOMesmoDia(filtro.data, evento.inicio) && status;
    })
    return eventos;
  }
})