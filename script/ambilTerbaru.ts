import tulisan from "../src/tulisan";
import { writeFileSync } from "fs";

const { stringify } = JSON;

writeFileSync("public/terbaru.json", stringify(tulisan.slice(0, 5), null, 2));
