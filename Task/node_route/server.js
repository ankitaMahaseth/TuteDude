// Importing Core Node.js Modules
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Getting Current Directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTML Page Paths
const pages = {
  "/": path.join(__dirname, "pages", "index.html"),
  "/about": path.join(__dirname, "pages", "about.html"),
  "/contact": path.join(__dirname, "pages", "contact.html"),
};

// Static Files
const staticFiles = {
  "/images/laundry_img.jpg": {
    filePath: path.join(__dirname, "images", "laundry_img.jpg"),
    contentType: "image/jpeg",
  },
};

// Creating HTTP Server
const app = http.createServer(async (req, res) => {
  // Extracting URL Path
  const pathname = new URL(req.url, "http://localhost").pathname;

  // Allowing Only GET Requests
  if (req.method !== "GET") {
    res.writeHead(405, {
      "Content-Type": "text/plain",
    });
    return res.end("Method Not Allowed");
  }

  // Handling Static Files
  if (staticFiles[pathname]) {
    const { filePath, contentType } = staticFiles[pathname];

    try {
      const data = await fs.promises.readFile(filePath);

      res.writeHead(200, {
        "Content-Type": contentType,
      });

      return res.end(data);
    } catch (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });

      return res.end("File Not Found");
    }
  }

  // Handling HTML Routes
  if (pages[pathname]) {
    try {
      const data = await fs.promises.readFile(pages[pathname], "utf8");

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      return res.end(data);
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });

      return res.end("Internal Server Error");
    }
    // Exiting out of event loop
    // process.exit();
  }

  // Handling Invalid Routes (404 Page)
  try {
    const data = await fs.promises.readFile(
      path.join(__dirname, "pages", "404.html"),
      "utf8",
    );

    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
    });

    return res.end(data);
  } catch (error) {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });

    return res.end("404 - Page Not Found");
  }
});

// PORT Number
const PORT = 3000;

// Starting Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
