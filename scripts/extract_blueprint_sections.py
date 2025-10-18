#!/usr/bin/env python3.11
"""
Extract key sections from the blueprint documents
"""

import re

def extract_sections(filepath, output_file):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by common section markers
    sections = {}
    
    # Try to find major sections
    patterns = [
        r'(\d+\.\s+[A-Z][^.]+)',  # Numbered sections
        r'([A-Z][A-Z\s]+:)',  # ALL CAPS headings
    ]
    
    # Extract first 5000 chars for overview
    sections['Overview'] = content[:5000]
    
    # Extract last 2000 chars for conclusions
    sections['Conclusion'] = content[-2000:]
    
    # Write to output
    with open(output_file, 'w', encoding='utf-8') as f:
        for section, text in sections.items():
            f.write(f"\n{'='*80}\n")
            f.write(f"{section}\n")
            f.write(f"{'='*80}\n\n")
            f.write(text)
            f.write("\n\n")
    
    print(f"✓ Extracted sections to {output_file}")
    print(f"  Total content length: {len(content)} chars")

# Extract from both files
extract_sections(
    '/home/ubuntu/upload/pasted_content_13.txt',
    '/home/ubuntu/Operiva/OWNER-MANAGER-BLUEPRINT-EXTRACT.txt'
)

extract_sections(
    '/home/ubuntu/upload/pasted_content_14.txt',
    '/home/ubuntu/Operiva/CASHFLOW-BLUEPRINT-EXTRACT.txt'
)

print("\n✅ Blueprint extraction complete!")

