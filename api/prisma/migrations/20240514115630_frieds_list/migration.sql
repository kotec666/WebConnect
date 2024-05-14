/*
  Warnings:

  - Added the required column `friendId` to the `Friend` table without a default value. This is not possible if the table is not empty.
  - Made the column `ownerId` on table `Friend` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_ownerId_fkey";

-- AlterTable
ALTER TABLE "Friend" ADD COLUMN     "friendId" INTEGER NOT NULL,
ALTER COLUMN "ownerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
