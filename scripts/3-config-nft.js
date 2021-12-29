import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x47db54DbD85088757972F74F2Ab93462caC20AE9",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Coffee Beans",
        description: "This NFT will give you access to MorningCoffeeDAO!",
        image: readFileSync("scripts/assets/coffee_beans.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()