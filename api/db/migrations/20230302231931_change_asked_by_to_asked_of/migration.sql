/*
  Warnings:

  - You are about to drop the column `answeredByUserId` on the `Question` table. All the data in the column will be lost.
  - Added the required column `askedOfUserId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_answeredByUserId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answeredByUserId",
ADD COLUMN     "answered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "askedOfUserId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_askedOfUserId_fkey" FOREIGN KEY ("askedOfUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
