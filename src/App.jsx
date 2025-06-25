import React, { useState, useEffect } from 'react';
import { 
  IoLocationOutline, 
  IoChevronForward, 
  IoStar, 
  IoSettingsOutline,
  IoSearch,
  IoEllipsisVertical,
  IoHome,
  IoLeafOutline,
  IoLeaf,
  IoCamera,
  IoBulbOutline,
  IoBulb,
  IoCheckmarkCircleOutline,
  IoFlowerOutline,
  IoClose,
  IoImages,
  IoOpenOutline
} from 'react-icons/io5';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://ajktssbhxnukxksjjdyr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqa3Rzc2JoeG51a3hrc2pqZHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDEwNTMsImV4cCI6MjA2NDYxNzA1M30.jARR7T5uxhF1iRiv96cdTyLbTYINfLs_JqtmtFnS3E0';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase Storage URLs for plant images
const SUPABASE_STORAGE_URL = `${supabaseUrl}/storage/v1/object/public/plant-images`;

// Function to get Supabase image URLs with multiple format support
const getSupabaseImageUrls = (plantName) => {
  const baseName = plantName.toLowerCase().replace(/\s+/g, '-');
  return [
    `${SUPABASE_STORAGE_URL}/${baseName}.jpg`,
    `${SUPABASE_STORAGE_URL}/${baseName}.png`,
    `${SUPABASE_STORAGE_URL}/${baseName}.jpeg`
  ];
};

// Plant Images - Using Supabase Storage with CDN fallbacks
const PLANT_IMAGES = {
  'Lettuce': [
    ...getSupabaseImageUrls('lettuce'),
    'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Spinach': [
    ...getSupabaseImageUrls('spinach'),
    'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Kale': [
    ...getSupabaseImageUrls('kale'),
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Arugula': [
    ...getSupabaseImageUrls('arugula'),
    'https://images.unsplash.com/photo-1609501676725-7186f0a57e1d?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1359329/pexels-photo-1359329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Swiss Chard': [
    ...getSupabaseImageUrls('swiss chard'),
    'https://images.unsplash.com/photo-1583664421503-eeca45d57c3e?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/8518459/pexels-photo-8518459.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Carrots': [
    ...getSupabaseImageUrls('carrots'),
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Radishes': [
    ...getSupabaseImageUrls('radishes'),
    'https://images.unsplash.com/photo-1597691946873-e3c0987e3b89?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Beets': [
    ...getSupabaseImageUrls('beets'),
    'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Turnips': [
    ...getSupabaseImageUrls('turnips'),
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/8518461/pexels-photo-8518461.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Tomatoes': [
    ...getSupabaseImageUrls('tomatoes'),
    'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Peppers': [
    ...getSupabaseImageUrls('peppers'),
    'https://images.unsplash.com/photo-1583398701364-05e4e5aba4d2?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Zucchini': [
    ...getSupabaseImageUrls('zucchini'),
    'https://images.unsplash.com/photo-1566840803306-3b0dd8f77da4?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Cucumber': [
    ...getSupabaseImageUrls('cucumber'),
    'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Eggplant': [
    ...getSupabaseImageUrls('eggplant'),
    'https://images.unsplash.com/photo-1618156640685-bfa4c6df5a49?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Basil': [
    ...getSupabaseImageUrls('basil'),
    'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/4113778/pexels-photo-4113778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Cilantro': [
    ...getSupabaseImageUrls('cilantro'),
    'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/4113763/pexels-photo-4113763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Parsley': [
    ...getSupabaseImageUrls('parsley'),
    'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/4113765/pexels-photo-4113765.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Rosemary': [
    ...getSupabaseImageUrls('rosemary'),
    'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/357886/pexels-photo-357886.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Broccoli': [
    ...getSupabaseImageUrls('broccoli'),
    'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Cauliflower': [
    ...getSupabaseImageUrls('cauliflower'),
    'https://images.unsplash.com/photo-1568584711271-6d9a52b22f78?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Cabbage': [
    ...getSupabaseImageUrls('cabbage'),
    'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Brussels Sprouts': [
    'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://cdn.pixabay.com/photo/2017/10/25/19/45/brussels-sprouts-2886661_640.jpg',
    'https://images.unsplash.com/photo-1582284540020-8acbb4de4d32?w=400&h=300&fit=crop&auto=format'
  ],
  'Green Beans': [
    ...getSupabaseImageUrls('green beans'),
    'https://images.unsplash.com/photo-1564590220821-c23e3c04a1e5?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Peas': [
    ...getSupabaseImageUrls('peas'),
    'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Onions': [
    ...getSupabaseImageUrls('onions'),
    'https://images.unsplash.com/photo-1582284540020-8acbb4de4d32?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
  'Garlic': [
    'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://cdn.pixabay.com/photo/2016/07/30/12/24/garlic-1556905_640.jpg',
    'https://images.unsplash.com/photo-1471196804263-9de07add89d2?w=400&h=300&fit=crop&auto=format'
  ],
  'Green Onions': [
    ...getSupabaseImageUrls('green onions'),
    'https://images.unsplash.com/photo-1553907144-5f1742a6f32e?w=400&h=300&fit=crop&auto=format',
    'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ],
};

// Web notification utility
const showNotification = (title, message, type = 'info') => {
  // For web, we'll use a simple alert for now
  // In a production app, you'd want to implement a proper toast notification system
  if (type === 'error') {
    alert(`Error: ${message}`);
  } else if (type === 'success') {
    alert(`Success: ${message}`);
  } else {
    alert(message);
  }
};

export default function SmartGardenPlanner() {
  // State management
  const [location, setLocation] = useState('');
  const [zone, setZone] = useState('');
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('checking');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [myGarden, setMyGarden] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [identificationResult, setIdentificationResult] = useState(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showArticleModal, setShowArticleModal] = useState(false);

  // Get current month
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  // Get window dimensions for responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Curated Gardening Articles
  const gardeningArticles = [
    {
      id: 1,
      title: "10 Beginner Gardening Tips for 2024",
      summary: "Essential tips for starting your first vegetable garden this year",
      source: "Epic Gardening",
      category: "Beginner",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format",
      url: "https://www.epicgardening.com/",
      content: "Start small with a 4x4 raised bed, choose high-quality seeds, plant according to your growing zone, and focus on vegetables you actually like to eat. Water consistently but adjust for rainfall and temperature."
    },
    {
      id: 2,
      title: "Small Space Gardening Mastery",
      summary: "Grow a shocking diversity of vegetables in tiny spaces",
      source: "Epic Gardening",
      category: "Small Space",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop&auto=format",
      url: "https://www.epicgardening.com/gardening-limited-space/",
      content: "Maximize your harvest with companion planting, continuous seeding, and choosing compact varieties. Vertical growing and container gardening can produce amazing yields in minimal space."
    },
    {
      id: 3,
      title: "Fall Gardening: Extend Your Season",
      summary: "Keep growing delicious crops through cooler weather",
      source: "Better Homes & Gardens",
      category: "Seasonal",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1574263867128-0945bdbe3ada?w=400&h=250&fit=crop&auto=format",
      url: "https://www.bhg.com/gardening/vegetable/",
      content: "Plant carrots, kale, turnip greens, Brussels sprouts, and cabbage for a productive fall harvest. These cool-season crops often taste better after a light frost."
    },
    {
      id: 4,
      title: "High-Yield Vegetable Varieties",
      summary: "Get the most food from your garden space",
      source: "Gilmour",
      category: "Advanced",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=250&fit=crop&auto=format",
      url: "https://gilmour.com/vegetable-garden-tips",
      content: "Tomatoes, onions, and lettuce top the list for high-yield vegetables. Choose determinate tomato varieties for consistent harvests and practice succession planting for continuous lettuce production."
    },
    {
      id: 5,
      title: "Sustainable Garden Trends 2024",
      summary: "Eco-friendly practices for the modern gardener",
      source: "Modern Farmer",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format",
      url: "https://modernfarmer.com/",
      content: "Focus on durable, long-lasting garden products and survivalist gardening with storage crops like potatoes, roots, onions, squash, and nutrient-rich greens."
    },
    {
      id: 6,
      title: "Perfect Vegetable Garden Layout",
      summary: "Design your garden for maximum efficiency",
      source: "Epic Gardening",
      category: "Planning",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=250&fit=crop&auto=format",
      url: "https://www.epicgardening.com/vegetable-garden-layout/",
      content: "Plan your layout considering plant spacing, sun requirements, and companion planting. Remember, your garden layout isn't permanent - adjust each season based on what works best."
    },
    {
      id: 7,
      title: "Watering Wisdom: Best Practices",
      summary: "Master the art of proper garden irrigation",
      source: "Old Farmer's Almanac",
      category: "Care",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format",
      url: "https://www.almanac.com/",
      content: "Not every plant needs the same watering schedule. Consider rainfall, humidity, temperature, and individual plant needs. Deep, less frequent watering promotes stronger root systems."
    },
    {
      id: 8,
      title: "Soil Health: Your Garden's Foundation",
      summary: "Build fertile, well-draining soil for thriving plants",
      source: "USDA Extension",
      category: "Soil",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&auto=format",
      url: "https://www.nal.usda.gov/",
      content: "Test your soil pH, add organic matter regularly, and ensure proper drainage. Healthy soil is the foundation of a productive garden and reduces the need for fertilizers."
    }
  ];

  // Check Supabase connection on mount
  useEffect(() => {
    checkSupabaseConnection();
    setDefaultLocation();
  }, []);

  const checkSupabaseConnection = async () => {
    try {
      const { data, error } = await supabase
        .from('zip_codes')
        .select('zip_code')
        .limit(1);
      
      if (error) throw error;
      setConnectionStatus('connected');
      console.log('✅ Supabase connected successfully');
    } catch (error) {
      setConnectionStatus('disconnected');
      console.log('⚠️ Using mock data (Supabase unavailable)');
    }
  };

  const setDefaultLocation = () => {
    if (!location) {
      setLocation('Winston-Salem');
      setZone('7b');
    }
  };

  // Location detection using Web Geolocation API
  const detectLocation = async () => {
    try {
      setLoading(true);
      
      if (!navigator.geolocation) {
        showNotification('Error', 'Geolocation is not supported by this browser.', 'error');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // For demo purposes, hardcoded to Winston-Salem area
          if (Math.abs(latitude - 36.09) < 0.5 && Math.abs(longitude - (-80.24)) < 0.5) {
            setLocation('Winston-Salem, NC');
            setZone('7b');
          } else {
            setLocation('Winston-Salem');
            setZone('7b');
          }
          
          setLoading(false);
        },
        (error) => {
          console.error('Error detecting location:', error);
          showNotification('Error', 'Could not detect location. Using default location.', 'error');
          setLoading(false);
        }
      );
    } catch (error) {
      console.error('Error detecting location:', error);
      showNotification('Error', 'Could not detect location. Using default location.', 'error');
      setLoading(false);
    }
  };

  // Comprehensive plant database
  const plants = [
    // Leafy Greens - Easy, cool season
    { name: 'Lettuce', daysToHarvest: 45, waterNeeds: 'high', spacing: 6, season: 'cool', zones: ['3a','11b'], category: 'leafy', images: PLANT_IMAGES['Lettuce'] },
    { name: 'Spinach', daysToHarvest: 40, waterNeeds: 'moderate', spacing: 4, season: 'cool', zones: ['3a','9b'], category: 'leafy', images: PLANT_IMAGES['Spinach'] },
    { name: 'Kale', daysToHarvest: 55, waterNeeds: 'moderate', spacing: 12, season: 'cool', zones: ['3a','11b'], category: 'leafy', images: PLANT_IMAGES['Kale'] },
    { name: 'Arugula', daysToHarvest: 30, waterNeeds: 'moderate', spacing: 4, season: 'cool', zones: ['3a','11b'], category: 'leafy', images: PLANT_IMAGES['Arugula'] },
    { name: 'Swiss Chard', daysToHarvest: 50, waterNeeds: 'moderate', spacing: 8, season: 'cool', zones: ['3a','11b'], category: 'leafy', images: PLANT_IMAGES['Swiss Chard'] },
    
    // Root Vegetables - Easy, direct sow
    { name: 'Carrots', daysToHarvest: 70, waterNeeds: 'moderate', spacing: 2, season: 'cool', zones: ['3a','11b'], category: 'root', images: PLANT_IMAGES['Carrots'] },
    { name: 'Radishes', daysToHarvest: 25, waterNeeds: 'moderate', spacing: 2, season: 'cool', zones: ['3a','11b'], category: 'root', images: PLANT_IMAGES['Radishes'] },
    { name: 'Beets', daysToHarvest: 55, waterNeeds: 'moderate', spacing: 3, season: 'cool', zones: ['3a','11b'], category: 'root', images: PLANT_IMAGES['Beets'] },
    { name: 'Turnips', daysToHarvest: 45, waterNeeds: 'moderate', spacing: 4, season: 'cool', zones: ['3a','10b'], category: 'root', images: PLANT_IMAGES['Turnips'] },
    
    // Warm Season Vegetables - Start indoors
    { name: 'Tomatoes', daysToHarvest: 75, waterNeeds: 'high', spacing: 24, season: 'warm', zones: ['5a','11b'], category: 'fruit', images: PLANT_IMAGES['Tomatoes'] },
    { name: 'Peppers', daysToHarvest: 75, waterNeeds: 'moderate', spacing: 18, season: 'warm', zones: ['5a','11b'], category: 'fruit', images: PLANT_IMAGES['Peppers'] },
    { name: 'Zucchini', daysToHarvest: 50, waterNeeds: 'high', spacing: 36, season: 'warm', zones: ['4a','11b'], category: 'fruit', images: PLANT_IMAGES['Zucchini'] },
    { name: 'Cucumber', daysToHarvest: 55, waterNeeds: 'high', spacing: 12, season: 'warm', zones: ['4a','11b'], category: 'fruit', images: PLANT_IMAGES['Cucumber'] },
    { name: 'Eggplant', daysToHarvest: 85, waterNeeds: 'moderate', spacing: 24, season: 'warm', zones: ['5a','11b'], category: 'fruit', images: PLANT_IMAGES['Eggplant'] },
    
    // Herbs - Easy, fragrant
    { name: 'Basil', daysToHarvest: 60, waterNeeds: 'moderate', spacing: 12, season: 'warm', zones: ['5a','11b'], category: 'herb', images: PLANT_IMAGES['Basil'] },
    { name: 'Cilantro', daysToHarvest: 45, waterNeeds: 'moderate', spacing: 6, season: 'cool', zones: ['3a','11b'], category: 'herb', images: PLANT_IMAGES['Cilantro'] },
    { name: 'Parsley', daysToHarvest: 70, waterNeeds: 'moderate', spacing: 8, season: 'cool', zones: ['3a','11b'], category: 'herb', images: PLANT_IMAGES['Parsley'] },
    { name: 'Rosemary', daysToHarvest: 90, waterNeeds: 'low', spacing: 24, season: 'warm', zones: ['6a','11b'], category: 'herb', images: PLANT_IMAGES['Rosemary'] },
    
    // Brassicas - Cool season, nutritious
    { name: 'Broccoli', daysToHarvest: 70, waterNeeds: 'high', spacing: 18, season: 'cool', zones: ['3a','10b'], category: 'brassica', images: PLANT_IMAGES['Broccoli'] },
    { name: 'Cauliflower', daysToHarvest: 75, waterNeeds: 'high', spacing: 18, season: 'cool', zones: ['3a','10b'], category: 'brassica', images: PLANT_IMAGES['Cauliflower'] },
    { name: 'Cabbage', daysToHarvest: 80, waterNeeds: 'high', spacing: 12, season: 'cool', zones: ['3a','9b'], category: 'brassica', images: PLANT_IMAGES['Cabbage'] },
    
    // Legumes - Nitrogen fixers
    { name: 'Green Beans', daysToHarvest: 55, waterNeeds: 'moderate', spacing: 6, season: 'warm', zones: ['4a','11b'], category: 'legume', images: PLANT_IMAGES['Green Beans'] },
    { name: 'Peas', daysToHarvest: 60, waterNeeds: 'moderate', spacing: 4, season: 'cool', zones: ['3a','8b'], category: 'legume', images: PLANT_IMAGES['Peas'] },
    
    // Alliums - Flavorful foundations
    { name: 'Onions', daysToHarvest: 100, waterNeeds: 'moderate', spacing: 4, season: 'cool', zones: ['3a','10b'], category: 'allium', images: PLANT_IMAGES['Onions'] },
    { name: 'Green Onions', daysToHarvest: 60, waterNeeds: 'moderate', spacing: 2, season: 'cool', zones: ['3a','11b'], category: 'allium', images: PLANT_IMAGES['Green Onions'] },
  ];

  // Filter plants based on search
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Categories for plant filtering
  const categories = ['All', 'Start indoors', 'Plant outside', 'Easy'];

  // Filter plants by category for display
  const categoryFilteredPlants = filteredPlants.filter(plant => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Easy') return ['leafy', 'herb', 'root', 'allium'].includes(plant.category);
    if (selectedCategory === 'Start indoors') return ['fruit', 'brassica'].includes(plant.category);
    if (selectedCategory === 'Plant outside') return ['root', 'leafy', 'legume', 'allium'].includes(plant.category);
    return true;
  });

  // Garden management functions
  const addToGarden = (plant) => {
    if (!myGarden.find(p => p.name === plant.name)) {
      setMyGarden([...myGarden, { ...plant, addedDate: new Date().toISOString() }]);
      showNotification('Success', `${plant.name} added to your garden`, 'success');
    } else {
      showNotification('Already in Garden', `${plant.name} is already in your garden`);
    }
    setShowAddModal(false);
  };

  const removeFromGarden = (plantName) => {
    setMyGarden(myGarden.filter(p => p.name !== plantName));
    showNotification('Removed', `${plantName} removed from your garden`);
  };

  // Camera and Plant Identification Functions
  const takePhoto = () => {
    // Create file input for camera
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // Use rear camera on mobile
    
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setIsIdentifying(true);
        const reader = new FileReader();
        reader.onload = (e) => {
          identifyPlant(e.target.result, file);
        };
        reader.readAsDataURL(file);
      }
    };
    
    input.click();
    setShowCameraModal(false);
  };

  const pickFromGallery = () => {
    // Create file input for gallery
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setIsIdentifying(true);
        const reader = new FileReader();
        reader.onload = (e) => {
          identifyPlant(e.target.result, file);
        };
        reader.readAsDataURL(file);
      }
    };
    
    input.click();
    setShowCameraModal(false);
  };

  const identifyPlant = async (imageDataUrl, file) => {
    try {
      // Create FormData for PlantNet API
      const formData = new FormData();
      formData.append('images', file);
      formData.append('organs', 'leaf');
      formData.append('modifiers', 'flower,fruit');
      formData.append('include-related-images', 'false');
      formData.append('no-reject', 'false');
      formData.append('lang', 'en');

      // PlantNet API call
      const response = await fetch(
        'https://my-api.plantnet.org/v1/identify/worldwide?api-key=2b10VhJE8nNEGRdKjz3L9JXVf',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const topResult = data.results[0];
          const plantName = topResult.species.scientificNameWithoutAuthor;
          const commonNames = topResult.species.commonNames;
          const confidence = Math.round(topResult.score * 100);
          
          setIdentificationResult({
            scientificName: plantName,
            commonName: commonNames?.[0] || plantName,
            confidence: confidence,
            image: imageDataUrl,
            allResults: data.results.slice(0, 3) // Top 3 results
          });
        } else {
          showNotification('No Match', 'Could not identify this plant. Try a clearer photo with visible leaves or flowers.', 'error');
        }
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Plant identification error:', error);
      showNotification('Identification Failed', 'Could not identify the plant. Please check your internet connection and try again.', 'error');
    } finally {
      setIsIdentifying(false);
    }
  };

  // Modal component for adding to garden
  const AddToGardenModal = () => (
    showAddModal && (
      <div style={styles.modalOverlay} onClick={() => setShowAddModal(false)}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {selectedPlant && (
            <>
              <h2 style={styles.modalTitle}>Add to My Garden</h2>
              <h3 style={styles.modalPlantName}>{selectedPlant.name}</h3>
              <p style={styles.modalDescription}>
                {selectedPlant.season === 'cool' ? 'Cool season crop' : 'Warm season crop'} • 
                {selectedPlant.daysToHarvest} days to harvest
              </p>
              <div style={styles.modalButtons}>
                <button 
                  style={{...styles.modalButton, ...styles.cancelButton}}
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={{...styles.modalButton, ...styles.addToGardenButton}}
                  onClick={() => addToGarden(selectedPlant)}
                >
                  Add to Garden
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );

  // Camera Modal Component
  const CameraModal = () => (
    showCameraModal && (
      <div style={styles.modalOverlay} onClick={() => setShowCameraModal(false)}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <h2 style={styles.modalTitle}>Identify Plant</h2>
          <p style={styles.modalDescription}>
            Take a photo or choose from gallery to identify a plant
          </p>
          <div style={styles.cameraButtons}>
            <button 
              style={{...styles.modalButton, ...styles.cameraButton}}
              onClick={takePhoto}
            >
              <IoCamera size={24} />
              <span style={{marginLeft: '8px'}}>Take Photo</span>
            </button>
            <button 
              style={{...styles.modalButton, ...styles.galleryButton}}
              onClick={pickFromGallery}
            >
              <IoImages size={24} />
              <span style={{marginLeft: '8px'}}>Gallery</span>
            </button>
          </div>
          <button 
            style={{...styles.modalButton, ...styles.cancelButton}}
            onClick={() => setShowCameraModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );

  // Plant Identification Result Modal
  const IdentificationModal = () => (
    identificationResult && (
      <div style={styles.modalOverlay} onClick={() => setIdentificationResult(null)}>
        <div style={{...styles.modalContent, ...styles.identificationModal}} onClick={(e) => e.stopPropagation()}>
          <>
            <h2 style={styles.modalTitle}>Plant Identified!</h2>
            
            <img 
              src={identificationResult.image}
              style={styles.identifiedImage}
              alt="Identified plant"
            />
            
            <h3 style={styles.identifiedPlantName}>
              {identificationResult.commonName}
            </h3>
            <p style={styles.scientificName}>
              {identificationResult.scientificName}
            </p>
            <p style={styles.confidenceText}>
              {identificationResult.confidence}% confidence
            </p>
            
            {identificationResult.allResults?.length > 1 && (
              <div style={styles.alternativeResults}>
                <p style={styles.alternativeTitle}>Other possibilities:</p>
                {identificationResult.allResults.slice(1).map((result, index) => (
                  <p key={index} style={styles.alternativeText}>
                    • {result.species.commonNames?.[0] || result.species.scientificNameWithoutAuthor} 
                    ({Math.round(result.score * 100)}%)
                  </p>
                ))}
              </div>
            )}
            
            <div style={styles.modalButtons}>
              <button 
                style={{...styles.modalButton, ...styles.cancelButton}}
                onClick={() => setIdentificationResult(null)}
              >
                Close
              </button>
              <button 
                style={{...styles.modalButton, ...styles.addToGardenButton}}
                onClick={() => {
                  // Try to find matching plant in our database
                  const matchingPlant = plants.find(p => 
                    p.name.toLowerCase().includes(identificationResult.commonName.toLowerCase()) ||
                    identificationResult.commonName.toLowerCase().includes(p.name.toLowerCase())
                  );
                  
                  if (matchingPlant) {
                    setSelectedPlant(matchingPlant);
                    setIdentificationResult(null);
                    setShowAddModal(true);
                  } else {
                    showNotification(
                      'Plant Not in Database', 
                      `${identificationResult.commonName} was identified but is not in our growing database yet.`
                    );
                    setIdentificationResult(null);
                  }
                }}
              >
                Add to Garden
              </button>
            </div>
          </>
        </div>
      </div>
    )
  );

  // Loading Modal for Plant Identification
  const LoadingModal = () => (
    isIdentifying && (
      <div style={styles.modalOverlay}>
        <div style={styles.loadingModal}>
          <p style={styles.loadingText}>Identifying plant...</p>
          <p style={styles.loadingSubtext}>This may take a few seconds</p>
        </div>
      </div>
    )
  );

  // Smart Image Component with fallback system
  const SmartPlantImage = ({ plant, style, children }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFallback, setShowFallback] = useState(false);

    const handleImageError = () => {
      console.log(`Image failed for ${plant.name}, trying next image (${currentImageIndex + 1}/${plant.images?.length || 0})`);
      
      if (plant.images && currentImageIndex < plant.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        console.log(`All images failed for ${plant.name}, showing fallback`);
        setShowFallback(true);
      }
    };

    const handleImageLoad = () => {
      console.log(`Image loaded successfully for ${plant.name}`);
    };

    if (showFallback || !plant.images || plant.images.length === 0) {
      return (
        <div style={{...style, ...styles.fallbackContainer}}>
          <p style={styles.fallbackText}>{plant.name}</p>
          <p style={styles.fallbackSubtext}>
            {plant.season === 'cool' ? '❄️' : '☀️'}
          </p>
          {children}
        </div>
      );
    }

    return (
      <div style={style}>
        <img 
          src={plant.images[currentImageIndex]}
          style={styles.plantImage}
          onError={handleImageError}
          onLoad={handleImageLoad}
          alt={plant.name}
        />
        {children}
      </div>
    );
  };

  // Article Modal Component
  const ArticleModal = () => (
    showArticleModal && (
      <div style={styles.articleModalContainer}>
        <div style={styles.articleModalHeader}>
          <button 
            style={styles.closeButton}
            onClick={() => setShowArticleModal(false)}
          >
            <IoClose size={24} />
          </button>
          <h1 style={styles.articleModalTitle}>Gardening Tips</h1>
          <div style={styles.placeholder} />
        </div>
        
        {selectedArticle && (
          <div style={styles.articleModalContent}>
            <img 
              src={selectedArticle.image}
              style={styles.articleModalImage}
              alt={selectedArticle.title}
            />
            <div style={styles.articleModalTextContent}>
              <p style={styles.articleModalCategory}>{selectedArticle.category}</p>
              <h1 style={styles.articleModalTitleLarge}>{selectedArticle.title}</h1>
              <div style={styles.articleModalMeta}>
                <p style={styles.articleModalSource}>{selectedArticle.source}</p>
                <p style={styles.articleModalReadTime}>{selectedArticle.readTime}</p>
              </div>
              <p style={styles.articleModalSummary}>{selectedArticle.summary}</p>
              <p style={styles.articleModalContentText}>{selectedArticle.content}</p>
              
              <button 
                style={styles.readMoreButton}
                onClick={() => {
                  window.open(selectedArticle.url, '_blank');
                }}
              >
                <span>Read Full Article</span>
                <IoOpenOutline size={16} style={{marginLeft: '8px'}} />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );

  // Explore Component
  const ExploreView = () => (
    <div style={styles.content}>
      <div style={styles.exploreHeader}>
        <h1 style={styles.exploreTitle}>Discover Gardening Wisdom</h1>
        <p style={styles.exploreSubtitle}>
          Curated tips from the best gardening experts on the web
        </p>
      </div>

      <div style={styles.categoryTabs}>
        <div style={styles.horizontalScroll}>
          {['All', 'Beginner', 'Advanced', 'Small Space', 'Seasonal'].map((category) => (
            <button
              key={category}
              style={{...styles.categoryTab, backgroundColor: '#f3f4f6'}}
            >
              <span style={{...styles.categoryText, color: '#6b7280'}}>
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={styles.articlesContainer}>
        {gardeningArticles.map((article) => (
          <div
            key={article.id}
            style={styles.articleCard}
            onClick={() => {
              setSelectedArticle(article);
              setShowArticleModal(true);
            }}
          >
            <img 
              src={article.image}
              style={styles.articleImage}
              alt={article.title}
            />
            <div style={styles.articleContent}>
              <div style={styles.articleHeader}>
                <p style={styles.articleCategory}>{article.category}</p>
                <p style={styles.articleReadTime}>{article.readTime}</p>
              </div>
              <h3 style={styles.articleTitle}>
                {article.title}
              </h3>
              <p style={styles.articleSummary}>
                {article.summary}
              </p>
              <p style={styles.articleSource}>by {article.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // My Garden component
  const MyGardenView = () => (
    <div style={styles.content}>
      <div style={styles.sectionHeader}>
        <h1 style={styles.sectionTitle}>
          My Garden ({myGarden.length} plants)
        </h1>
      </div>

      {myGarden.length === 0 ? (
        <div style={styles.emptyState}>
          <IoFlowerOutline size={64} color="#d1d5db" />
          <h2 style={styles.emptyTitle}>Your garden is empty</h2>
          <p style={styles.emptyDescription}>
            Tap on plants in the Home tab to add them to your garden.
          </p>
        </div>
      ) : (
        <div style={styles.plantsGrid}>
          {myGarden.map((plant, index) => (
            <div key={index} style={styles.plantCard}>
              <SmartPlantImage 
                plant={plant} 
                style={styles.imageContainer}
              >
                <button 
                  style={styles.removeButton}
                  onClick={() => removeFromGarden(plant.name)}
                >
                  <IoClose size={16} color="white" />
                </button>
              </SmartPlantImage>
              <div style={styles.cardContent}>
                <h3 style={styles.plantName}>{plant.name}</h3>
                <p style={styles.harvestInfo}>{plant.daysToHarvest} days to harvest</p>
                <p style={styles.plantDetails}>
                  Added {new Date(plant.addedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const PlantCard = ({ plant }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFallback, setShowFallback] = useState(false);

    const getDifficultyInfo = (category) => {
      if (['leafy', 'herb', 'root', 'allium', 'legume'].includes(category)) {
        return { label: 'Easy', color: '#22c55e', backgroundColor: '#dcfce7' };
      } else if (['fruit', 'brassica'].includes(category)) {
        return { label: 'Medium', color: '#eab308', backgroundColor: '#fef3c7' };
      } else {
        return { label: 'Hard', color: '#f97316', backgroundColor: '#fed7aa' };
      }
    };

    const difficulty = getDifficultyInfo(plant.category);

    const handleImageError = () => {
      console.log(`Image failed for ${plant.name}, trying next image (${currentImageIndex + 1}/${plant.images.length})`);
      
      if (currentImageIndex < plant.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        console.log(`All images failed for ${plant.name}, showing fallback`);
        setShowFallback(true);
      }
    };

    const handleImageLoad = () => {
      console.log(`Image loaded successfully for ${plant.name}`);
    };

    const getCurrentImageSource = () => {
      if (showFallback || !plant.images || plant.images.length === 0) {
        return null;
      }
      return plant.images[currentImageIndex];
    };

    return (
      <div 
        style={styles.plantCard} 
        onClick={() => {
          setSelectedPlant(plant);
          setShowAddModal(true);
        }}
      >
        <div style={styles.imageContainer}>
          {showFallback ? (
            <div style={styles.fallbackContainer}>
              <p style={styles.fallbackText}>{plant.name}</p>
              <p style={styles.fallbackSubtext}>
                {plant.season === 'cool' ? '❄️' : '☀️'}
              </p>
            </div>
          ) : (
            <img 
              src={getCurrentImageSource()}
              style={styles.plantImage}
              onError={handleImageError}
              onLoad={handleImageLoad}
              alt={plant.name}
            />
          )}
          
          <div style={{...styles.difficultyBadge, backgroundColor: difficulty.backgroundColor}}>
            <span style={{...styles.difficultyText, color: difficulty.color}}>
              {difficulty.label}
            </span>
          </div>
        </div>
        <div style={styles.cardContent}>
          <h3 style={styles.plantName}>{plant.name}</h3>
          <p style={styles.harvestInfo}>{plant.daysToHarvest} days to harvest</p>
          <p style={styles.plantDetails}>
            {plant.season === 'cool' ? 'Cool season crop' : 'Warm season crop'}. 
            Space {plant.spacing}" apart.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button 
          onClick={detectLocation}
          style={styles.locationButton}
          disabled={loading}
        >
          <IoLocationOutline size={16} color="#374151" />
          <div style={styles.locationTextContainer}>
            <span style={styles.locationText}>{location}</span>
            {zone && (
              <span style={styles.zoneText}>Zone {zone}</span>
            )}
          </div>
          <IoChevronForward size={16} color="#22c55e" />
        </button>
        <div style={styles.headerButtons}>
          <button style={{...styles.headerButton, ...styles.starButton}}>
            <IoStar size={20} color="#eab308" />
          </button>
          <button style={styles.headerButton}>
            <IoSettingsOutline size={20} color="#6b7280" />
          </button>
        </div>
      </div>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === 'Home' ? (
        <div style={{...styles.content, overflowY: 'auto', height: 'calc(100vh - 160px)'}}>
        {/* Search Section */}
        <div style={styles.searchSection}>
          <div style={styles.searchContainer}>
            <IoSearch size={20} color="#9ca3af" style={styles.searchIcon} />
            <input
              style={styles.searchInput}
              placeholder="Search vegetables"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button style={styles.addButton}>
            <span style={styles.addButtonText}>Add plant</span>
          </button>
        </div>

        {/* What to grow section */}
        <div style={styles.growSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>
              What to grow in{' '}
              <span style={styles.monthText}>{currentMonth}</span>
            </h2>
            <button>
              <IoEllipsisVertical size={20} color="#9ca3af" />
            </button>
          </div>

          {/* Category tabs */}
          <div style={styles.categoryContainer}>
            <div style={styles.horizontalScroll}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.categoryTab,
                    ...(selectedCategory === category ? styles.activeCategoryTab : {})
                  }}
                >
                  <span style={{
                    ...styles.categoryText,
                    ...(selectedCategory === category ? styles.activeCategoryText : {})
                  }}>
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Plants grid */}
          <div style={styles.plantsGrid}>
            {categoryFilteredPlants.map((plant, index) => (
              <PlantCard key={index} plant={plant} />
            ))}
          </div>

          {categoryFilteredPlants.length === 0 && (
            <div style={styles.emptyState}>
              <IoSearch size={64} color="#d1d5db" />
              <h2 style={styles.emptyTitle}>No plants found</h2>
              <p style={styles.emptyDescription}>
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
        </div>
      ) : activeTab === 'My Garden' ? (
        <MyGardenView />
      ) : activeTab === 'Explore' ? (
        <ExploreView />
      ) : (
        <MyGardenView />
      )}

      {/* Modals */}
      <AddToGardenModal />
      <CameraModal />
      <IdentificationModal />
      <LoadingModal />
      <ArticleModal />

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <button 
          style={styles.navItem}
          onClick={() => setActiveTab('Home')}
        >
          <IoHome 
            size={24} 
            color={activeTab === 'Home' ? "#22c55e" : "#9ca3af"} 
          />
          <span style={{
            ...styles.navText, 
            ...(activeTab === 'Home' ? styles.activeNavText : {})
          }}>Home</span>
        </button>
        <button 
          style={styles.navItem}
          onClick={() => setActiveTab('My Garden')}
        >
          {activeTab === 'My Garden' ? 
            <IoLeaf size={24} color="#22c55e" /> : 
            <IoLeafOutline size={24} color="#9ca3af" />
          }
          <span style={{
            ...styles.navText, 
            ...(activeTab === 'My Garden' ? styles.activeNavText : {})
          }}>My Garden</span>
        </button>
        <button 
          style={styles.addNavButton}
          onClick={() => setShowCameraModal(true)}
        >
          <IoCamera size={24} color="white" />
        </button>
        <button 
          style={styles.navItem}
          onClick={() => setActiveTab('Explore')}
        >
          {activeTab === 'Explore' ? 
            <IoBulb size={24} color="#22c55e" /> : 
            <IoBulbOutline size={24} color="#9ca3af" />
          }
          <span style={{
            ...styles.navText, 
            ...(activeTab === 'Explore' ? styles.activeNavText : {})
          }}>Explore</span>
        </button>
        <button style={styles.navItem}>
          <IoCheckmarkCircleOutline size={24} color="#9ca3af" />
          <span style={styles.navText}>Diagnose</span>
        </button>
      </div>
    </div>
  );
}

// Web-compatible styles using CSS-in-JS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '12px 16px',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  locationButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '20px',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#f1f5f9',
      borderColor: '#cbd5e1',
    },
  },
  locationTextContainer: {
    margin: '0 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1e293b',
    display: 'block',
    lineHeight: '1.2',
  },
  zoneText: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#22c55e',
    backgroundColor: '#dcfce7',
    padding: '2px 6px',
    borderRadius: '8px',
    marginTop: '2px',
    display: 'inline-block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  headerButtons: {
    display: 'flex',
    gap: '8px',
  },
  headerButton: {
    padding: '8px',
    borderRadius: '20px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
  },
  starButton: {
    backgroundColor: '#fef3c7',
  },
  content: {
    flex: 1,
    padding: '0 16px',
  },
  searchSection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '16px',
    gap: '12px',
  },
  searchContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '25px',
    border: '2px solid #bbf7d0',
    padding: '12px 16px',
  },
  searchIcon: {
    marginRight: '8px',
  },
  searchInput: {
    flex: 1,
    fontSize: '16px',
    color: '#374151',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  addButton: {
    backgroundColor: '#22c55e',
    padding: '12px 24px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
  },
  addButtonText: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
  },
  growSection: {
    marginTop: '24px',
    marginBottom: '100px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0,
  },
  monthText: {
    color: '#22c55e',
  },
  categoryContainer: {
    marginBottom: '16px',
  },
  horizontalScroll: {
    display: 'flex',
    overflowX: 'auto',
    gap: '8px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  categoryTab: {
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  activeCategoryTab: {
    backgroundColor: '#22c55e',
  },
  categoryText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7280',
  },
  activeCategoryText: {
    color: 'white',
  },
  plantsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  plantCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  imageContainer: {
    position: 'relative',
    height: '120px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    overflow: 'hidden',
  },
  plantImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  fallbackContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  fallbackText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
    marginBottom: '4px',
  },
  fallbackSubtext: {
    fontSize: '24px',
    textAlign: 'center',
  },
  difficultyBadge: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '4px 8px',
    borderRadius: '12px',
  },
  difficultyText: {
    fontSize: '12px',
    fontWeight: '500',
  },
  cardContent: {
    padding: '16px',
  },
  plantName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px',
    margin: '0 0 4px 0',
  },
  harvestInfo: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  plantDetails: {
    fontSize: '12px',
    color: '#9ca3af',
    lineHeight: '16px',
    margin: 0,
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '48px 0',
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginTop: '16px',
    marginBottom: '8px',
  },
  emptyDescription: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    margin: 0,
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTop: '1px solid #e5e7eb',
    padding: '8px 16px 20px 16px',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  navText: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#9ca3af',
    marginTop: '4px',
  },
  activeNavText: {
    color: '#22c55e',
  },
  addNavButton: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    backgroundColor: '#22c55e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  // Modal styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    margin: '0 32px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  modalPlantName: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#22c55e',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  modalDescription: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '24px',
    margin: '0 0 24px 0',
  },
  modalButtons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
  },
  modalButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    minWidth: '100px',
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
  },
  addToGardenButton: {
    backgroundColor: '#22c55e',
    color: 'white',
  },
  // Remove button for garden plants
  removeButton: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: 'rgba(239, 68, 68, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  // Camera modal styles
  cameraButtons: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
    justifyContent: 'center',
  },
  cameraButton: {
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
  },
  galleryButton: {
    backgroundColor: '#8b5cf6',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
  },
  // Plant identification modal styles
  identificationModal: {
    width: '90%',
    maxWidth: '500px',
    maxHeight: '80vh',
    overflow: 'auto',
  },
  identifiedImage: {
    width: '120px',
    height: '120px',
    borderRadius: '12px',
    marginBottom: '16px',
    objectFit: 'cover',
  },
  identifiedPlantName: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#22c55e',
    textAlign: 'center',
    marginBottom: '4px',
    margin: '0 0 4px 0',
  },
  scientificName: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  confidenceText: {
    fontSize: '14px',
    color: '#22c55e',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '16px',
    margin: '0 0 16px 0',
  },
  alternativeResults: {
    width: '100%',
    marginBottom: '16px',
  },
  alternativeTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  alternativeText: {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '4px',
    margin: '0 0 4px 0',
  },
  // Loading modal styles
  loadingModal: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  loadingText: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  loadingSubtext: {
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
    margin: 0,
  },
  // Explore page styles
  exploreHeader: {
    padding: '16px',
    textAlign: 'center',
  },
  exploreTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
    textAlign: 'center',
    margin: '0 0 8px 0',
  },
  exploreSubtitle: {
    fontSize: '16px',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: '22px',
    margin: 0,
  },
  categoryTabs: {
    padding: '0 16px',
    marginBottom: '16px',
  },
  articlesContainer: {
    padding: '0 16px 100px 16px',
  },
  articleCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  articleImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  articleContent: {
    padding: '16px',
  },
  articleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  articleCategory: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#22c55e',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  articleReadTime: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  articleTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    lineHeight: '24px',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  articleSummary: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '20px',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },
  articleSource: {
    fontSize: '12px',
    color: '#9ca3af',
    fontStyle: 'italic',
    margin: 0,
  },
  // Article modal styles
  articleModalContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f9fafb',
    zIndex: 1000,
  },
  articleModalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
  },
  closeButton: {
    padding: '8px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  articleModalTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
  },
  placeholder: {
    width: '40px',
  },
  articleModalContent: {
    overflowY: 'auto',
    height: 'calc(100vh - 80px)',
  },
  articleModalImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  articleModalTextContent: {
    padding: '20px',
  },
  articleModalCategory: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#22c55e',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
    display: 'block',
  },
  articleModalTitleLarge: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: '32px',
    marginBottom: '16px',
    margin: '0 0 16px 0',
  },
  articleModalMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e7eb',
  },
  articleModalSource: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    margin: 0,
  },
  articleModalReadTime: {
    fontSize: '14px',
    color: '#9ca3af',
    margin: 0,
  },
  articleModalSummary: {
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: '24px',
    marginBottom: '20px',
    fontStyle: 'italic',
    margin: '0 0 20px 0',
  },
  articleModalContentText: {
    fontSize: '16px',
    color: '#374151',
    lineHeight: '26px',
    marginBottom: '30px',
    margin: '0 0 30px 0',
  },
  readMoreButton: {
    backgroundColor: '#22c55e',
    padding: '12px 24px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
  },
};