import fs from "fs";
import path from "path";
import { loadEnv } from "vite";


export interface CheckBuildOptions {
    envExamplePath: string;
    optionalVars?: string[];
}


export function checkBuild({ envExamplePath, optionalVars = [] }: CheckBuildOptions) {
    let command: "build" | "serve";

    function parseEnvExample(filePath: string, prefix: string): string[] {
        const envLines = fs.readFileSync(filePath, "utf-8").split("\n");

        return envLines
            .map(line => line.trim())
            .filter(line => line && !line.startsWith("#") && line.startsWith(prefix))
            .map(line => line.split("=")[0])
            .filter(line => line !== undefined);
    }

    return {
        name: "check-build",

        configResolved(resolvedConfig: { command: "build" | "serve"; }) {
            command = resolvedConfig.command;
        },

        buildStart() {
            const prefix = command === "build" ? "VITE_PROD_" : "VITE_DEV_";
            const mode = command === "build" ? "production" : "development";

            const envFromFiles = loadEnv(mode, process.cwd(), "");

            const env = { ...envFromFiles, ...process.env };

            const examplePath = path.resolve(process.cwd(), envExamplePath ?? ".env.example");
            if (!fs.existsSync(examplePath)) {
                throw new Error(`Missing env example file at: ${examplePath}`);
            }

            const requiredVars = parseEnvExample(examplePath, prefix);
            const missingVars = requiredVars.filter(key => !env[key] && !optionalVars.includes(key));

            if (missingVars.length > 0) {
                throw new Error(
                    `Missing required environment variables for ${mode} mode:\n` + missingVars.map(v => `  - ${v}`).join("\n")
                );
            }
        },
    };
}
