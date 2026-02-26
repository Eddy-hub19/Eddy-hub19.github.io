const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const rootDir = process.argv[2] || "Projects/Portfolio/img"
const webpRoot = path.join(rootDir, "webp")
const quality = Number.parseInt(process.env.WEBP_QUALITY || "80", 10)
const validExts = new Set([".jpg", ".jpeg", ".png"])

async function fileExists(filePath) {
  try {
    await fs.promises.access(filePath)
    return true
  } catch {
    return false
  }
}

async function shouldConvert(srcPath, destPath) {
  if (!(await fileExists(destPath))) return true
  const [srcStat, destStat] = await Promise.all([
    fs.promises.stat(srcPath),
    fs.promises.stat(destPath),
  ])
  return srcStat.mtimeMs > destStat.mtimeMs
}

async function convertFile(srcPath) {
  if (srcPath.includes(`${path.sep}webp${path.sep}`)) return
  const ext = path.extname(srcPath).toLowerCase()
  if (!validExts.has(ext)) return

  const relativePath = path.relative(rootDir, srcPath)
  const destPath = path.join(
    webpRoot,
    path.dirname(relativePath),
    `${path.basename(relativePath, ext)}.webp`
  )
  const needsConvert = await shouldConvert(srcPath, destPath)
  if (!needsConvert) return

  await fs.promises.mkdir(path.dirname(destPath), { recursive: true })

  await sharp(srcPath)
    .webp({ quality })
    .toFile(destPath)

  console.log(`Converted: ${srcPath} -> ${destPath}`)
}

async function walkDir(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      await walkDir(fullPath)
    } else if (entry.isFile()) {
      await convertFile(fullPath)
    }
  }
}

async function run() {
  try {
    await walkDir(rootDir)
    console.log("WEBP conversion complete.")
  } catch (error) {
    console.error("WEBP conversion failed:", error)
    process.exitCode = 1
  }
}

run()
