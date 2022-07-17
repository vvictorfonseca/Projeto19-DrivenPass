/*
  Warnings:

  - A unique constraint covering the columns `[userId,tittle]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tittle]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tittle]` on the table `notes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tittle]` on the table `wifi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tittle` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tittle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ADD COLUMN     "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "wifi" ADD COLUMN     "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_tittle_key" ON "cards"("userId", "tittle");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_tittle_key" ON "credentials"("userId", "tittle");

-- CreateIndex
CREATE UNIQUE INDEX "notes_userId_tittle_key" ON "notes"("userId", "tittle");

-- CreateIndex
CREATE UNIQUE INDEX "wifi_userId_tittle_key" ON "wifi"("userId", "tittle");
