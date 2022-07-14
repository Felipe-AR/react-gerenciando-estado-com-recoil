import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

const ehOMesmoDia = (primeiraData: Date, segundaData: Date) => {
  return primeiraData.toISOString().slice(0, 10) === segundaData.toISOString().slice(0, 10)
}

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todosOsEventos = get(listaDeEventosState)
    const eventos = todosOsEventos.filter(evento => {
      if (!filtro.data) {
        if (filtro.status === "completo") return evento.completo
        if (filtro.status === "incompleto") return !evento.completo
        return true
      }
      if (filtro.status === "completo") return ehOMesmoDia(filtro.data, evento.inicio) && evento.completo === true;
      else if (filtro.status === "incompleto") return ehOMesmoDia(filtro.data, evento.inicio) && evento.completo === false;
      return ehOMesmoDia(filtro.data, evento.inicio);
    })
    return eventos;
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const response = await fetch("http://localhost:8080/eventos");
    const eventos: IEvento[] = await response.json();
    return eventos.map(evento => ({ ...evento, inicio: new Date(evento.inicio), fim: new Date(evento.fim) }))
  }
})