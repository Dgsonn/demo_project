import { spawn } from "node:child_process";

const child = spawn("npx", ["next", "dev"], {
  stdio: ["inherit", "pipe", "inherit"],
  shell: true,
});

let port = process.env.PORT || "3000";
let printed = false;
child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);

  const localMatch = text.match(/Local:\s+https?:\/\/localhost:(\d+)/i);
  if (localMatch) port = localMatch[1];

  if (!printed && /Ready in/i.test(text)) {
    printed = true;
    console.log(`- Admin:        http://localhost:${port}/admin`);
  }
});

child.on("exit", (code) => process.exit(code ?? 0));
