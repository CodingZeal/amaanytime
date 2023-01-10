-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT;

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "order" INTEGER,
    "pinned" BOOLEAN DEFAULT false,
    "askedOn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3),
    "notGoingToAnswer" BOOLEAN DEFAULT false,
    "flag" BOOLEAN DEFAULT false,
    "archive" BOOLEAN DEFAULT false,
    "parentQuestionId" INTEGER,
    "askedByUserId" UUID NOT NULL,
    "answeredByUserId" UUID,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_parentQuestionId_key" ON "Question"("parentQuestionId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_parentQuestionId_fkey" FOREIGN KEY ("parentQuestionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_askedByUserId_fkey" FOREIGN KEY ("askedByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_answeredByUserId_fkey" FOREIGN KEY ("answeredByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
