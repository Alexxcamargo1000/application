-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "ischecked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Task_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_userId_key" ON "Task"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_categoryId_key" ON "Task"("categoryId");

-- CreateIndex
CREATE INDEX "Task_userId_categoryId_idx" ON "Task"("userId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_userId_key" ON "Category"("userId");

-- CreateIndex
CREATE INDEX "Category_userId_name_idx" ON "Category"("userId", "name");
