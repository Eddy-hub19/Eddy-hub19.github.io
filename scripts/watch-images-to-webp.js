const path = require("path")
const chokidar = require("chokidar")
const { spawn } = require("child_process")

const rootDir = process.argv[2] || "Projects/Portfolio/img"
const quality = process.env.WEBP_QUALITY || "80"

const convertOnce = (filePath) => {
  const ext = path.extname(filePath).toLowerCase()
  if (!ext || ![".jpg", ".jpeg", ".png"].includes(ext)) return

  const child = spawn(
    "node",
    ["scripts/convert-images-to-webp.js", rootDir],
    {
      stdio: "inherit",
      env: { ...process.env, WEBP_QUALITY: quality },
    }
  )

  child.on("error", (error) => {
    console.error("WEBP watch error:", error)
  })
}

console.log(`Watching ${rootDir} for new images...`)

const watcher = chokidar.watch(rootDir, {
  ignoreInitial: false,
  ignored: /[\\/]webp[\\/]/,
  persistent: true,
  awaitWriteFinish: {
    stabilityThreshold: 400,
    pollInterval: 100,
  },
})

watcher.on("add", convertOnce)
watcher.on("change", convertOnce)
