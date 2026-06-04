import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  // Permite importul fișierelor .env.local de către CLI-ul Sanity.
  autoUpdates: true,
});
