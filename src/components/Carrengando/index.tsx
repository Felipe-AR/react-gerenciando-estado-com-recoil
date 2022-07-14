import style from './Carregando.module.scss';

const Carregando = () => {
  return (
    <div className={style.carregando}>
      <div className={style.carregando__header}>
        <h1>Por favor, aguardar.</h1>
      </div>
      <div className={style.carregando__body}>
        <p>Está pagina está sendo renderizada</p>
      </div>
    </div>
  )
}

export default Carregando;