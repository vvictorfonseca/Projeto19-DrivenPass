/*
  Warnings:

  - A unique constraint covering the columns `[userId,tittle]` on the table `notes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "wifi_userId_tittle_key";

-- CreateIndex
CREATE UNIQUE INDEX "notes_userId_tittle_key" ON "notes"("userId", "tittle");
