/*
  Warnings:

  - You are about to drop the `UserImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserImage" DROP CONSTRAINT "UserImage_userId_fkey";

-- DropTable
DROP TABLE "UserImage";
