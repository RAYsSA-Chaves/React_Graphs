function CustomizedLabel(props) {
    // Dados enviados por padrão pelo gráfico
    const { cx, cy, midAngle, innerRadius, outerRadius, payload } = props;
    
    // Convertendo para graus radianos
    const RADIAN = Math.PI/180;

    // Calcula a posição do label dentro da fatia
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor="middle" // centraliza horizontalmente
            dominantBaseline="central" // centraliza verticalmente
            fontSize={24}
            fontWeight="bold"
        >
            {/* Placeholder customizado caso não encontre nenhum aluno ao filtrar */}
            { payload.placeholder ? 0 : payload.valor }
        </text>
    )
}

export default CustomizedLabel;