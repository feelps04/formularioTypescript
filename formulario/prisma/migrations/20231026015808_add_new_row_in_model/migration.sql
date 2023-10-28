/*
  Warnings:

  - The primary key for the `RowContainer1` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `RowContainer1` table. All the data in the column will be lost.
  - The primary key for the `RowContainer2` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `empresa` to the `RowContainer1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RowContainer1" DROP CONSTRAINT "RowContainer1_pkey",
DROP COLUMN "nome",
ADD COLUMN     "empresa" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RowContainer1_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RowContainer1_id_seq";

-- AlterTable
ALTER TABLE "RowContainer2" DROP CONSTRAINT "RowContainer2_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RowContainer2_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RowContainer2_id_seq";
