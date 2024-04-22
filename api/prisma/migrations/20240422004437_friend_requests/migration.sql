-- CreateTable
CREATE TABLE "FriendRequest" (
    "recipientId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("recipientId","senderId")
);

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
