-- CreateTable
CREATE TABLE "UserImage" (
    "id" SERIAL NOT NULL,
    "avatar_sm" TEXT,
    "avatar_md" TEXT,
    "original" TEXT,
    "default" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserImage" ADD CONSTRAINT "UserImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
