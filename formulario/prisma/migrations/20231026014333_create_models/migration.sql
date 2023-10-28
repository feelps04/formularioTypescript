-- CreateTable
CREATE TABLE "RowContainer1" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "solicitante" TEXT NOT NULL,

    CONSTRAINT "RowContainer1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RowContainer2" (
    "id" SERIAL NOT NULL,
    "titulo_contratacao" TEXT,
    "modalidade_contratacao" TEXT,
    "periodo_contratacao" TEXT,
    "posicao" TEXT,
    "horario_trabalho" TEXT,
    "prioridade_contratacao" TEXT,
    "senioridade" TEXT,
    "regime_trabalho" TEXT,
    "budget_maximo" TEXT,

    CONSTRAINT "RowContainer2_pkey" PRIMARY KEY ("id")
);
