-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "ischecked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Task" ("categoryId", "content", "createdAt", "id", "ischecked", "userId") SELECT "categoryId", "content", "createdAt", "id", "ischecked", "userId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE INDEX "Task_userId_categoryId_idx" ON "Task"("userId", "categoryId");
CREATE INDEX "Task_categoryId_idx" ON "Task"("categoryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
