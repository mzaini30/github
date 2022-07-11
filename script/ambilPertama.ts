import tulisan from "../src/tulisan";
import { writeFileSync } from "fs";

const { stringify } = JSON;

writeFileSync("public/pertama.json", stringify(tulisan[0], null, 2));
