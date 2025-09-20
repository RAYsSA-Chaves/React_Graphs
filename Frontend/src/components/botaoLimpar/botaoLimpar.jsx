import "./botaoFiltrar.css";

function BotaoFiltrar({ onClick, corBotao }) {
    return (
        <button className={corBotao} onClick={onClick}>Limpar filtros</button>
    )
}

export default BotaoFiltrar;