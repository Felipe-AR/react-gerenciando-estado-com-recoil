import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos, IStatus } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')
  const [status, setStatus] = useState<IStatus>(null);
  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtro: IFiltroDeEventos = {};
    if (data) filtro.data = new Date(data);
    else filtro.data = null;
    filtro.status = status;
    setFiltroDeEvento(filtro);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data}
    />
    <select 
      name="status" 
      className={style.input}
      onChange={evento => setStatus(evento.target.value as IStatus)}
    >
      <option value="">Ambos</option>
      <option value="completo">Completo</option>
      <option value="incompleto">Incompleto</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro