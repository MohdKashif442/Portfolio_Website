import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Global middleware for COEP and COOP headers
app.use((req, res, next) => {
  // Cross-Origin security headers
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from dist in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Proxy route for embedding third-party content with COEP/COOP headers
app.get('/proxy', async (req, res) => {
  try {
    const targetUrl = req.query.url;
    
    if (!targetUrl) {
      return res.status(400).json({ error: 'Missing url parameter' });
    }

    // Validate URL
    let url;
    try {
      url = new URL(targetUrl);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    console.log(`Proxying request to: ${targetUrl}`);

    // Fetch the target URL
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ProxyBot/1.0)',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Failed to fetch: ${response.status} ${response.statusText}` 
      });
    }

    // Get content type from the response
    const contentType = response.headers.get('content-type') || 'text/html';
    
    // Set response headers including COEP/COOP
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

    // Stream the response
    const buffer = await response.buffer();
    res.send(buffer);

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
});

// API Routes
app.get('/api/deploy/:id', (req, res) => {
  const deployId = req.params.id;
  
  // Mock deployment data - replace with real deployment service integration
  const deploymentData = {
    success: true,
    deployId: deployId,
    status: 'completed',
    url: `https://deploy-${deployId}.example.com`,
    timestamp: new Date().toISOString(),
    message: 'Deployment completed successfully'
  };
  
  console.log(`Deploy status requested for ID: ${deployId}`);
  res.json(deploymentData);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve React app for all non-API routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// 404 handler for API routes only
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    error: 'API endpoint not found',
    path: req.path 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Deploy API available at: http://localhost:${PORT}/api/deploy/:id`);
  console.log(`Proxy API available at: http://localhost:${PORT}/proxy?url=<target_url>`);
  
  if (process.env.NODE_ENV === 'production') {
    console.log(`Frontend served from: http://localhost:${PORT}`);
  }
});