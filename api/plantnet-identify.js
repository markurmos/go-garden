export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    // Convert base64 back to blob for PlantNet FormData
    const byteCharacters = atob(imageBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('images', blob, 'plant.jpg');
    formData.append('organs', 'leaf');
    formData.append('modifiers', 'flower,fruit');
    formData.append('include-related-images', 'false');
    formData.append('no-reject', 'false');
    formData.append('lang', 'en');

    console.log('Calling PlantNet API...');
    
    const response = await fetch(
      'https://my-api.plantnet.org/v1/identify/worldwide?api-key=2b10VhJE8nNEGRdKjz3L9JXVf',
      {
        method: 'POST',
        body: formData,
      }
    );

    console.log('PlantNet response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('PlantNet API error:', errorText);
      return res.status(response.status).json({ 
        success: false, 
        error: `PlantNet API error: ${response.status} - ${response.statusText}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('PlantNet response data:', data);

    if (data.results && data.results.length > 0) {
      // Filter results with reasonable confidence (>5%)
      const goodResults = data.results.filter(result => result.score > 0.05);
      
      if (goodResults.length > 0) {
        const topResult = goodResults[0];
        
        const result = {
          scientificName: topResult.species.scientificNameWithoutAuthor,
          commonName: topResult.species.commonNames?.[0] || topResult.species.scientificNameWithoutAuthor,
          confidence: Math.round(topResult.score * 100),
          allResults: goodResults.slice(0, 3),
          source: 'PlantNet'
        };

        return res.status(200).json({ success: true, result });
      } else {
        return res.status(404).json({ 
          success: false, 
          error: 'No confident plant identification found (all results below 5% confidence)' 
        });
      }
    } else {
      return res.status(404).json({ 
        success: false, 
        error: 'No plant identification results returned' 
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error during plant identification.',
      details: error.message
    });
  }
}