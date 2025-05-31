import 'dotenv/config'; // loads environment variables from .env file
import { initEdgeStore } from '@edgestore/server';
import { initEdgeStoreClient } from '@edgestore/server/core';

async function main() {
  // Just check that the env vars exist, but do NOT pass to create()
  if (!process.env.EDGE_STORE_ACCESS_KEY || !process.env.EDGE_STORE_SECRET_KEY) {
    throw new Error('Missing EDGE_STORE_ACCESS_KEY or EDGE_STORE_SECRET_KEY environment variables');
  }

  const es = initEdgeStore.create(); // no args!

  const edgeStoreRouter = es.router({
    publicFiles: es.fileBucket().beforeDelete(() => true),
  });

  const backendClient = initEdgeStoreClient({
    router: edgeStoreRouter,
  });

  let currentPage = 1;
  const pageSize = 100;
  let totalDeleted = 0;

  while (true) {
    const res = await backendClient.publicFiles.listFiles({
      pagination: {
        currentPage,
        pageSize,
      },
    });

    const files = res.data;
    if (!files.length) break;

    for (const file of files) {
      try {
        await backendClient.publicFiles.deleteFile({ url: file.url });
        totalDeleted++;
        console.log(`Deleted: ${file.url}`);
      } catch (error) {
        console.error(`Failed to delete file ${file.url}:`, error);
      }
    }

    if (res.pagination.currentPage >= res.pagination.totalPages) break;
    currentPage++;
  }

  console.log(`Deleted total ${totalDeleted} files.`);
}

main()
  .then(() => {
    console.log('Cleanup finished successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Cleanup failed:', err);
    process.exit(1);
  });
