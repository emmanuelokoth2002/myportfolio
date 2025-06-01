import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optimizeImage = async () => {
  const inputPath = 'src/assets/profile.jpg';
  const outputPath = 'src/assets/profile.webp';
  
  try {
    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
};

optimizeImage(); 