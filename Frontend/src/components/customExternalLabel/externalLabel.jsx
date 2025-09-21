import "./externalLabel.css";

function ExternalLabel(props) {
    // Dados enviados por padrão pelo gráfico
    const { cx, cy, midAngle, outerRadius, payload } = props;

    // Convertendo para graus radianos
    const RADIAN = Math.PI / 180;

    // Invertendo ângulo para ficar certo nos parâmetros de SVG (sentido antihorário)
    const angle = -midAngle;

    // Seno e cosseno
    const seno = Math.sin(angle * RADIAN);
    const cos = Math.cos(angle * RADIAN);

    // Ponto inicial da linha
    const startX = cx + (outerRadius + 10) * cos;
    const startY = cy + (outerRadius + 10) * seno;

    // Ponto intermediário da linha
    const midX = cx + (outerRadius + 30) * cos;
    const midY = cy + (outerRadius + 30) * seno;

    // Comprimento da linha horizontal (um pouco maior que o tamanho do texto)
    const texto = payload.nome;
    const tamanhoFonte = 14;
    const comprimentoTextoEstimado = texto.length * (tamanhoFonte * 1.3);
    const comprimentoHorizontal = (comprimentoTextoEstimado / 3) + 50;

    // Ponto final da linha horizontal (direita ou esquerda)
    let endX;
    if (cos >= 0) {
        endX = midX + comprimentoHorizontal; // direita
    }
    else {
        endX = midX - comprimentoHorizontal; // esquerda
    }

    // Linha horizontal mantém o mesmo Y do ponto intermediário
    const endY = midY;

    // Texto sempre acima da linha
    const distanciaY = -10;

    // Texto sempre no meio da linha
    const textoX = (midX + endX) / 2;
    const textoY = midY + distanciaY;

    return (
        // g = elemento de grupo
        <g className="externalLabel">
            { /* Linha com 3 pontos (inicial, dobra, final -> (x,y)) */ }
            <polyline
                points={startX + "," + startY + " " + midX + "," + midY + " " + endX + "," + endY}
                stroke="#8a9097"
                fill="none"
            />

            {/* Texto */}
            <text
                x={textoX}
                y={textoY}
                textAnchor="middle" // centraliza horizontalmente
                fontSize={14}
                fill="#000"
            >
                {texto}
            </text>
        </g>
    );
}

export default ExternalLabel;