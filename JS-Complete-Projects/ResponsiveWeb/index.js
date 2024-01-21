// const express = require('express');
// const puppeteer = require('puppeteer');
// const path  = require("path");


// const app = express();
// const port = 3000;

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// app.use(express.static('public')); // Serve static files

// app.get("/",(req,res)=>{
//     res.render("index.ejs");
// });

// app.get('/preview', async (req, res) => {
//   const { url, width, height } = req.query;

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Set viewport size
//   await page.setViewport({ width: parseInt(width, 10), height: parseInt(height, 10) });

//   // Navigate to the specified URL
//   await page.goto(url, { waitUntil: 'networkidle0' });

//   // Get the HTML content of the page
//   const htmlContent = await page.content();

//   // Close the browser
//   await browser.close();

//   // Send the HTML content as the response
//   res.send(htmlContent);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle website previews
app.get('/preview', async (req, res) => {
  const { url, width, height } = req.query;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewport({ width: parseInt(width, 10), height: parseInt(height, 10) });

  // Navigate to the specified URL
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Capture a full-page screenshot
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  // Close the browser
  await browser.close();

  // Set response headers
  res.set('Content-Type', 'image/png');
  res.send(screenshotBuffer);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});