import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import basicSsl from "@vitejs/plugin-basic-ssl";

import packageJson from "./package.json";
import { checkBuild } from "./vite.build-checker.ts";


function getUniqueBuildId(): string {
    const date = new Date();

    const year = String(date.getUTCFullYear()).slice(-2);
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${year}${day}${month}${hours}${minutes}`;
};


export default defineConfig({
    define: {
        "import.meta.env.PACKAGE_VERSION": JSON.stringify(packageJson.version),
        "import.meta.env.UNIQUE_BUILD_ID": JSON.stringify(getUniqueBuildId()),
    },
    plugins: [
        basicSsl({
            name: "dev.ddnomad.local",
            domains: ["*.dev.ddnomad.local"],
        }),
        react(),
        svgr(),
        tsconfigPaths(),
        checkBuild({
            envExamplePath: ".env.example",
            optionalVars: [
                "VITE_DEV_INTEGRATIONS_FIREBASE_RECAPTCHA_ENTERPRISE_SITE_KEY",
                "VITE_PROD_INTEGRATIONS_FIREBASE_RECAPTCHA_ENTERPRISE_SITE_KEY",
            ],
        }),
    ],
    server: {
        allowedHosts: ["cat-proud-trout.ngrok-free.app"],
        https: {} // TLS certificate is generated and managed by vite-plugin-basic-ssl
    }

});
