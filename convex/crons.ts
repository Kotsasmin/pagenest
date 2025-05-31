import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.cron(
  "clear documents table daily",
  "0 0 * * *", // At 00:00 every day
  internal.documents.clearAll,
);

export default crons;
