/*
  Warnings:

  - Added the required column `birthdate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_country` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birthdate" TEXT NOT NULL,
ADD COLUMN     "gender" INTEGER NOT NULL,
ADD COLUMN     "home_country" TEXT NOT NULL;
