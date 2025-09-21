const dadosAlunos = [
    // Unidade Leste
    // DS - Turma A
    { nome: "Ana Souza", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: true },
    { nome: "João Lima", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: false },
    { nome: "Carolina Batista", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: true },

    // DS - Turma B
    { nome: "Pedro Henrique", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma B", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Camila Ferreira", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma B", professor: "Gustavo Guanabara", ativo: false },

    // DS - Turma C
    { nome: "Julia Roberts", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma C", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Beatriz Damacena", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma C", professor: "Gustavo Guanabara", ativo: false },
    { nome: "Sabrina Amorim", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma C", professor: "Gustavo Guanabara", ativo: true },
    { nome: "João Belai", unidade: "Unidade Leste", curso: "Desenvolvimento de Sistemas", turma: "Turma C", professor: "Gustavo Guanabara", ativo: true },

    // Manufatura - Turma A
    { nome: "Juliana Castro", unidade: "Unidade Leste", curso: "Manufatura Eletrônica", turma: "Turma A", professor: "Carlos Vieira", ativo: true },
    { nome: "Lucas Martins", unidade: "Unidade Leste", curso: "Manufatura Eletrônica", turma: "Turma A", professor: "Carlos Vieira", ativo: true },
    { nome: "Fernanda Moura", unidade: "Unidade Leste", curso: "Manufatura Eletrônica", turma: "Turma A", professor: "Carlos Vieira", ativo: false },
    { nome: "Ana Godói", unidade: "Unidade Leste", curso: "Manufatura Eletrônica", turma: "Turma A", professor: "Carlos Vieira", ativo: true },

    // Design Gráfico - Turma A
    { nome: "Ricardo Santos", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma A", professor: "Cleonice Siqueira", ativo: true },
    { nome: "Beatriz Gomes", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma A", professor: "Cleonice Siqueira", ativo: false },
    { nome: "Fabrício Nogueira", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma A", professor: "Cleonice Siqueira", ativo: true },

    // Design Gráfico - Turma B
    { nome: "Nicole Fernanda", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma B", professor: "Cleonice Siqueira", ativo: true },
    { nome: "Sarah Vieira", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma B", professor: "Cleonice Siqueira", ativo: false },
    { nome: "Alex Luna", unidade: "Unidade Leste", curso: "Design Gráfico", turma: "Turma B", professor: "Cleonice Siqueira", ativo: true },

    // Mecatrônica - Turma A
    { nome: "Aline Oliveira", unidade: "Unidade Leste", curso: "Mecatrônica", turma: "Turma A", professor: "Dorival Júnior", ativo: true },
    { nome: "Thiago Nunes", unidade: "Unidade Leste", curso: "Mecatrônica", turma: "Turma A", professor: "Dorival Júnior", ativo: false },
    { nome: "Bruna Silva", unidade: "Unidade Leste", curso: "Mecatrônica", turma: "Turma A", professor: "Dorival Júnior", ativo: true },

    // Unidade Oeste
    // Desenvolvimento de Sistemas - Turma A
    { nome: "Mariana Souza", unidade: "Unidade Oeste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Gabriel Costa", unidade: "Unidade Oeste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Gustavo Guanabara", ativo: false },
    { nome: "Rodrigo Ramos", unidade: "Unidade Oeste", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Gustavo Guanabara", ativo: true },

    // Administração - Turma A
    { nome: "Patrícia Gomes", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma A", professor: "Maria Angela Antunes", ativo: true },
    { nome: "André Carvalho", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma A", professor: "Maria Angela Antunes", ativo: false },
    { nome: "Sérgio Matos", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma A", professor: "Maria Angela Antunes", ativo: true },

     // Administração - Turma B
    { nome: "Ana Lopes", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma B", professor: "Maria Angela Antunes", ativo: true },
    { nome: "Enzo Alemida", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma B", professor: "Maria Angela Antunes", ativo: false },
    { nome: "Samuel Miller", unidade: "Unidade Oeste", curso: "Administração", turma: "Turma B", professor: "Maria Angela Antunes", ativo: true },

    // IoT - Turma A
    { nome: "Letica Roth", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma A", professor: "Carlos Vieira", ativo: true },
    { nome: "Isadora Abreu", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma A", professor: "Carlos Vieira", ativo: false },
    { nome: "Antônio Luiz", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma A", professor: "Carlos Vieira", ativo: true },

    // IoT - Turma B
    { nome: "Alex Machado", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma B", professor: "Henrique Barbosa", ativo: true },
    { nome: "Pedro Padovanni", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma B", professor: "Henrique Barbosa", ativo: false },
    { nome: "Yasmin Maria", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma B", professor: "Henrique Barbosa", ativo: true },

    // IoT - Turma C
    { nome: "Vinícius Rocha", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma C", professor: "Henrique Barbosa", ativo: true },
    { nome: "Larissa Pires", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma C", professor: "Henrique Barbosa", ativo: false },
    { nome: "Lucas Braga", unidade: "Unidade Oeste", curso: "IoT", turma: "Turma C", professor: "Henrique Barbosa", ativo: true },

    // Unidade Centro
    // Desenvolvimento de Sistemas - Turma A
    { nome: "Rafael Mendes", unidade: "Unidade Centro", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: true },
    { nome: "Sofia Almeida", unidade: "Unidade Centro", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: false },
    { nome: "Marcelo Silva", unidade: "Unidade Centro", curso: "Desenvolvimento de Sistemas", turma: "Turma A", professor: "Márcia Scanacapra", ativo: true },

    // BD - Turma A
    { nome: "Danilo Chavez", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma A", professor: "Cleonice Siqueira", ativo: true },
    { nome: "Murilo Diniz", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma A", professor: "Cleonice Siqueira", ativo: false },
    { nome: "Samantha Freitas", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma A", professor: "Cleonice Siqueira", ativo: false },

    // BD - Turma B
    { nome: "Priscila Duarte", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma B", professor: "Márcia Scanacapra", ativo: true },
    { nome: "Matheus Rocha", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma B", professor: "Márcia Scanacapra", ativo: false },
    { nome: "Diego Freitas", unidade: "Unidade Centro", curso: "Banco de Dados", turma: "Turma B", professor: "Márcia Scanacapra", ativo: true },

    // Front - Turma A
    { nome: "Miguel Diaz", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma A", professor: "Maria Angela Antunes", ativo: true },
    { nome: "Flávia Araújo", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma A", professor: "Maria Angela Antunes", ativo: false },
    { nome: "Miguel Massaki", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma A", professor: "Maria Angela Antunes", ativo: true },

    // Front - Turma B
    { nome: "Isabelly Viana", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma B", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Samuel Teixeira", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma B", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Henrique Monteiro", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma B", professor: "Gustavo Guanabara", ativo: true },

    // Front - Turma C
    { nome: "Carolina Reis", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma C", professor: "Gustavo Guanabara", ativo: true },
    { nome: "Felipe Teixeira", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma C", professor: "Gustavo Guanabara", ativo: false },
    { nome: "Letícia Monteiro", unidade: "Unidade Centro", curso: "Desenvolvimento FrontEnd", turma: "Turma C", professor: "Gustavo Guanabara", ativo: true },

    // Cibersegurança - Turma A
    { nome: "Daniel Barros", unidade: "Unidade Centro", curso: "Cibersegurança", turma: "Turma A", professor: "Dorival Júnior", ativo: true },
    { nome: "Natália Faria", unidade: "Unidade Centro", curso: "Cibersegurança", turma: "Turma A", professor: "Dorival Júnior", ativo: false },
    { nome: "Igor Carvalho", unidade: "Unidade Centro", curso: "Cibersegurança", turma: "Turma A", professor: "Dorival Júnior", ativo: true },

    // UI/UX - Turma A
    { nome: "Tatiane Lopes", unidade: "Unidade Centro", curso: "UI/UX", turma: "Turma A", professor: "Cleonice Siqueira", ativo: true },
    { nome: "Wesley Cardoso", unidade: "Unidade Centro", curso: "UI/UX", turma: "Turma A", professor: "Cleonice Siqueira", ativo: false },
    { nome: "Fábio Oliveira", unidade: "Unidade Centro", curso: "UI/UX", turma: "Turma A", professor: "Cleonice Siqueira", ativo: true },

    // IoT - Turma A
    { nome: "Paulo Andrade", unidade: "Unidade Centro", curso: "IoT", turma: "Turma A", professor: "Henrique Barbosa", ativo: true },
    { nome: "Larissa Melo", unidade: "Unidade Centro", curso: "IoT", turma: "Turma A", professor: "Henrique Barbosa", ativo: false },
    { nome: "Vinícius Souza", unidade: "Unidade Centro", curso: "IoT", turma: "Turma A", professor: "Henrique Barbosa", ativo: true },
];

export default dadosAlunos;