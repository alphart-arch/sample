-- CreateTable
CREATE TABLE "student" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "Address" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("uid")
);
