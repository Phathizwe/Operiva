import asyncio
from playwright.async_api import async_playwright
import os

async def convert_html_to_png(html_file, png_file, width=1200, height=None):
    """Convert HTML file to PNG using Playwright"""
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Load HTML file
        file_path = f"file://{os.path.abspath(html_file)}"
        await page.goto(file_path)
        
        # Wait for page to load
        await page.wait_for_load_state("networkidle")
        
        # Take screenshot
        await page.screenshot(path=png_file, full_page=True)
        
        await browser.close()
        print(f"✓ Converted {html_file} → {png_file}")

async def main():
    flowcharts = [
        ("market-entry-4-phase-process.html", "market-entry-4-phase-process.png"),
        ("swot-to-tows-process.html", "swot-to-tows-process.png"),
        ("business-model-canvas-process.html", "business-model-canvas-process.png"),
    ]
    
    for html_file, png_file in flowcharts:
        await convert_html_to_png(html_file, png_file)
    
    print("\n✅ All flowcharts converted to PNG!")

if __name__ == "__main__":
    asyncio.run(main())
