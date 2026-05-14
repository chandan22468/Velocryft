import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const framesDir = path.join(process.cwd(), 'public', 'frames', 'bmw-hero');
    const files = fs.readdirSync(framesDir)
      .filter(f => f.match(/\.(jpg|jpeg|JPG|JPEG)$/i))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    return NextResponse.json({ totalFrames: files.length, files });
  } catch (error) {
    console.error('Error reading frames directory:', error);
    return NextResponse.json({ totalFrames: 0, files: [] }, { status: 500 });
  }
}
