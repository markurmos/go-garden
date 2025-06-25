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
    const { imageBase64, service = 'plantid' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    let result = null;

    if (service === 'plantid') {
      // Try Plant.id API first
      try {
        const plantIdResponse = await fetch('https://api.plant.id/v3/identification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.PLANT_ID_API_KEY
          },
          body: JSON.stringify({
            images: [imageBase64],
            modifiers: ['similar_images'],
            details: ['common_names', 'url', 'description', 'edible_parts']
          })
        });

        if (plantIdResponse.ok) {
          const data = await plantIdResponse.json();
          
          if (data.result?.is_plant?.binary && data.result?.classification?.suggestions?.length > 0) {
            const suggestions = data.result.classification.suggestions.filter(s => s.probability > 0.1);
            
            if (suggestions.length > 0) {
              const topResult = suggestions[0];
              result = {
                scientificName: topResult.name,
                commonName: topResult.details?.common_names?.[0] || topResult.name,
                confidence: Math.round(topResult.probability * 100),
                allResults: suggestions.slice(0, 3),
                source: 'Plant.id',
                details: topResult.details
              };
            }
          }
        }
      } catch (error) {
        console.error('Plant.id API error:', error);
      }
    }

    if (!result && service !== 'plantnet-only') {
      // Fallback to PlantNet if Plant.id fails or if requested
      try {
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

        const plantNetResponse = await fetch(
          `https://my-api.plantnet.org/v1/identify/worldwide?api-key=${process.env.PLANTNET_API_KEY}`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (plantNetResponse.ok) {
          const data = await plantNetResponse.json();
          
          if (data.results && data.results.length > 0) {
            const topResult = data.results[0];
            result = {
              scientificName: topResult.species.scientificNameWithoutAuthor,
              commonName: topResult.species.commonNames?.[0] || topResult.species.scientificNameWithoutAuthor,
              confidence: Math.round(topResult.score * 100),
              allResults: data.results.slice(0, 3),
              source: 'PlantNet'
            };
          }
        }
      } catch (error) {
        console.error('PlantNet API error:', error);
      }
    }

    if (result) {
      return res.status(200).json({ success: true, result });
    } else {
      return res.status(404).json({ 
        success: false, 
        error: 'No plant identification found. Try a clearer photo with visible leaves or flowers.' 
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error during plant identification.' 
    });
  }
}