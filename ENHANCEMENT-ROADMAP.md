# Operiva Artifact Enhancement Roadmap

**Last Updated:** October 18, 2025  
**Status:** Phase 1 Complete (Excel Worksheets Enhanced)

---

## 🎨 Brand Identity

### **Operiva Colors**
- **Navy Blue:** `#1C2A4A` - Primary color for headers, backgrounds
- **Green:** `#27AE60` - Accent color for highlights, CTAs, progress indicators
- **Supporting Colors:**
  - Blue: `#3498DB` (Strengths, Level 2)
  - Orange: `#E67E22` (Weaknesses, Level 3)
  - Red: `#C0392B` (Threats, Level 4)
  - Purple: `#9B59B6` (Customer)
  - Yellow: `#F39C12` (Differentiator)
  - Gray: `#7F8C8D` (Key Activities)

### **Logo**
- Location: `/home/ubuntu/Operiva/artifacts/operiva-logo.png`
- Features: Navy "Operiva" text with green dot on "i" and green swoosh underline
- Tagline: "BUSINESS-READY KITS"

### **Typography**
- Font: Calibri (professional, clean, readable)
- Headers: Bold, Navy or White (on colored backgrounds)
- Body: Regular, Dark Gray (#2C3E50)

---

## ✅ Phase 1: Excel Worksheets (COMPLETED)

### **What Was Enhanced:**

#### **1. SWOT Analysis Worksheet (11KB)**
**File:** `03-SWOT-Analysis-Worksheet.xlsx`

**Enhancements:**
- ✅ Professional headers with Operiva colors (Navy + Green)
- ✅ Color-coded sections:
  - Strengths: Blue (#3498DB) with light blue fill
  - Weaknesses: Orange (#E67E22) with light orange fill
  - Opportunities: Green (#27AE60) with light green fill
  - Threats: Red (#C0392B) with light red fill
- ✅ Bordered cells for clear structure
- ✅ Emoji icons (💪 ⚠️ 🌟 ⚡) for visual appeal
- ✅ SA-specific guided questions (loadshedding, B-BBEE, SEDA, crime)
- ✅ TOWS Action Matrix with 4 strategy types
- ✅ Example tab with Sourdough Sanctuary case study

**Tabs:**
1. 📋 Instructions
2. 💪 Guided SWOT
3. 🎯 TOWS Matrix
4. 📖 Example

---

#### **2. CHAT Framework Worksheet (9.3KB)**
**File:** `03-CHAT-Framework-Worksheet.xlsx`

**Enhancements:**
- ✅ Professional headers with Operiva colors
- ✅ Color-coded 7 components:
  - Subject: Blue (#3498DB)
  - Object: Orange (#E67E22)
  - Outcome: Green (#27AE60)
  - Differentiator: Yellow (#F39C12)
  - Barriers to Entry: Red (#E74C3C)
  - Customer: Purple (#9B59B6)
  - Key Activities: Gray (#7F8C8D)
- ✅ Emoji icons (🔵 🟠 🟢 🟡 🔴 🟣 ⚫) matching colors
- ✅ Guided questions for each component
- ✅ Example tab with Sourdough Sanctuary

**Tabs:**
1. 📋 Instructions
2. 🔺 CHAT Components
3. 📖 Example

---

#### **3. Levels of Work Worksheet (9.4KB)**
**File:** `03-Levels-of-Work-Worksheet.xlsx`

**Enhancements:**
- ✅ Professional headers with Operiva colors
- ✅ Color-coded 4 levels:
  - Level 4 (Strategy): Red (#C0392B)
  - Level 3 (Management): Orange (#E67E22)
  - Level 2 (Supervision): Blue (#3498DB)
  - Level 1 (Operations): Green (#2ECC71)
- ✅ Emoji icons (🔴 🟠 🔵 🟢) for levels
- ✅ Activity Mapping worksheet with bordered tables
- ✅ Role Design worksheet organized by level
- ✅ Example tab with furniture business case study

**Tabs:**
1. 📋 Instructions
2. 🗂️ Activity Mapping
3. 👥 Role Design
4. 📖 Example

---

## ⏳ Phase 2: PowerPoint README Files (PENDING)

### **What Needs Enhancement:**

#### **Files to Enhance:**
1. `01-README-SWOT.pptx` (38KB)
2. `01-README-CHAT.pptx` (38KB)
3. `01-README-LOW.pptx` (38KB)

#### **Required Enhancements:**

**1. Add Operiva Logo**
- Insert logo on title slide (top-right corner)
- Size: ~2 inches wide
- Ensure it's visible but not overwhelming

**2. Improve Visual Appeal**
- Add icons for each file type:
  - 📄 PDF icon for guides
  - 📊 Excel icon for worksheets
  - 🎤 PowerPoint icon for presentations
- Use Operiva green for highlights and CTAs
- Add subtle green swoosh design element

**3. Better Workflow Diagrams**
- Create visual flow: 01 → 02 → 03 → 04
- Use arrows and numbered circles
- Color-code each step with Operiva green

**4. Enhance Typography**
- Use larger, bolder headers (Navy #1C2A4A)
- Add white space for breathing room
- Highlight key action items in green

#### **Step-by-Step Instructions:**

```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor

# Open existing presentation
prs = Presentation('01-README-SWOT.pptx')

# Operiva colors
NAVY = RGBColor(28, 42, 74)
GREEN = RGBColor(39, 174, 96)

# Add logo to title slide
slide = prs.slides[0]
logo = slide.shapes.add_picture(
    'operiva-logo.png',
    Inches(8), Inches(0.3),  # Top-right position
    width=Inches(1.8)
)

# Enhance title formatting
for shape in slide.shapes:
    if shape.has_text_frame:
        for paragraph in shape.text_frame.paragraphs:
            if "SWOT" in paragraph.text:
                paragraph.font.size = Pt(44)
                paragraph.font.bold = True
                paragraph.font.color.rgb = NAVY

# Add green accent bar
accent = slide.shapes.add_shape(
    1,  # Rectangle
    Inches(0), Inches(5.3),
    Inches(10), Inches(0.3)
)
accent.fill.solid()
accent.fill.fore_color.rgb = GREEN
accent.line.color.rgb = GREEN

prs.save('01-README-SWOT-Enhanced.pptx')
```

---

## ⏳ Phase 3: PowerPoint Main Presentations (PENDING)

### **What Needs Enhancement:**

#### **Files to Enhance:**
1. `04-SWOT-Analysis-Presentation.pptx` (40KB)
2. `04-CHAT-Framework-Presentation.pptx` (42KB)
3. `04-Levels-of-Work-Presentation.pptx` (40KB)

**Note:** These already have visual diagrams and color-coding. Enhancement needed:

#### **Required Enhancements:**

**1. Add Operiva Logo**
- Insert logo on every slide (top-right corner, smaller)
- Size: ~1 inch wide
- Consistent placement across all slides

**2. Add Footer with Branding**
- Bottom of each slide: "Operiva | Business-Ready Kits"
- Small text (10pt), Navy color
- Green separator line above footer

**3. Refine Diagram Aesthetics**
- Add subtle gradients to shapes (Navy → lighter navy)
- Improve spacing and alignment
- Add drop shadows for depth (subtle, not overdone)

**4. Enhance Individual Component Slides**
- Add small visual icons next to large letters/numbers
- Improve text hierarchy with better font sizing
- Add green accent lines for emphasis

#### **Step-by-Step Instructions:**

```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor

prs = Presentation('04-SWOT-Analysis-Presentation.pptx')

NAVY = RGBColor(28, 42, 74)
GREEN = RGBColor(39, 174, 96)

# Add logo and footer to all slides
for slide in prs.slides:
    # Add logo (top-right)
    logo = slide.shapes.add_picture(
        'operiva-logo.png',
        Inches(8.8), Inches(0.2),
        width=Inches(1)
    )
    
    # Add footer line
    footer_line = slide.shapes.add_shape(
        1,  # Rectangle
        Inches(0.5), Inches(5.2),
        Inches(9), Inches(0.02)
    )
    footer_line.fill.solid()
    footer_line.fill.fore_color.rgb = GREEN
    footer_line.line.color.rgb = GREEN
    
    # Add footer text
    footer_box = slide.shapes.add_textbox(
        Inches(0.5), Inches(5.25),
        Inches(9), Inches(0.3)
    )
    footer_frame = footer_box.text_frame
    footer_frame.text = "Operiva | Business-Ready Kits"
    footer_frame.paragraphs[0].font.size = Pt(10)
    footer_frame.paragraphs[0].font.color.rgb = NAVY

prs.save('04-SWOT-Analysis-Presentation-Enhanced.pptx')
```

---

## ⏳ Phase 4: PDF Guides (PENDING)

### **What Needs Enhancement:**

#### **Files to Enhance:**
1. `02-SWOT-Analysis-Guide.pdf` (generated from Markdown)
2. `02-CHAT-Framework-Guide.pdf` (generated from Markdown)
3. `02-Levels-of-Work-Guide.pdf` (generated from Markdown)

#### **Required Enhancements:**

**1. Better Typography**
- Larger, bolder headers (Navy)
- Better line spacing (1.5x)
- Professional font (Calibri or similar)

**2. Pull-Out Boxes for Key Concepts**
- Green-bordered boxes for important tips
- Light green background (#D5F4E6)
- Icon in top-left corner

**3. Visual Callouts**
- ⚠️ Warning boxes (light red background)
- 💡 Tip boxes (light yellow background)
- ✅ Success boxes (light green background)

**4. Better Page Headers/Footers**
- Operiva logo in header (small)
- Page numbers in footer
- Green accent line separating header from content

**5. Improved Diagrams**
- Convert text-based diagrams to visual SVG/PNG
- Add to Markdown before PDF conversion
- Use Operiva colors

#### **Step-by-Step Instructions:**

**Option A: Enhance Markdown Before Conversion**

Edit the `.md` files (e.g., `swot-analysis-guide-sa-edition.md`) to add:

```markdown
<div style="border-left: 4px solid #27AE60; background-color: #D5F4E6; padding: 15px; margin: 20px 0;">
<strong>💡 Tip:</strong> Be specific! Instead of "good customer service," write "respond to all emails within 2 hours."
</div>
```

Then convert to PDF with better CSS:

```bash
manus-md-to-pdf input.md output.pdf --css custom-operiva-style.css
```

**Option B: Use WeasyPrint with Custom CSS**

Create `operiva-pdf-style.css`:

```css
@page {
    margin: 1.5cm;
    @top-right {
        content: url('operiva-logo.png');
        width: 3cm;
    }
    @bottom-center {
        content: "Page " counter(page);
        font-size: 10pt;
        color: #1C2A4A;
    }
}

h1, h2, h3 {
    color: #1C2A4A;
    font-family: 'Calibri', sans-serif;
}

h1 {
    font-size: 28pt;
    border-bottom: 3px solid #27AE60;
    padding-bottom: 10px;
}

.tip-box {
    border-left: 4px solid #27AE60;
    background-color: #D5F4E6;
    padding: 15px;
    margin: 20px 0;
}

.warning-box {
    border-left: 4px solid #C0392B;
    background-color: #FADBD8;
    padding: 15px;
    margin: 20px 0;
}
```

Then convert:

```bash
weasyprint input.md output.pdf --stylesheet operiva-pdf-style.css
```

---

## 📋 Enhancement Checklist

### **Completed:**
- [x] SWOT Excel Worksheet
- [x] CHAT Excel Worksheet
- [x] Levels of Work Excel Worksheet
- [x] All artifacts re-packaged and uploaded
- [x] Database re-seeded with new URLs
- [x] Enhancement roadmap created

### **Pending:**
- [ ] SWOT README PowerPoint (01-README-SWOT.pptx)
- [ ] CHAT README PowerPoint (01-README-CHAT.pptx)
- [ ] Levels of Work README PowerPoint (01-README-LOW.pptx)
- [ ] SWOT Main Presentation (04-SWOT-Analysis-Presentation.pptx)
- [ ] CHAT Main Presentation (04-CHAT-Framework-Presentation.pptx)
- [ ] Levels of Work Main Presentation (04-Levels-of-Work-Presentation.pptx)
- [ ] SWOT PDF Guide (02-SWOT-Analysis-Guide.pdf)
- [ ] CHAT PDF Guide (02-CHAT-Framework-Guide.pdf)
- [ ] Levels of Work PDF Guide (02-Levels-of-Work-Guide.pdf)

---

## 🎯 Priority Order for Future Enhancements

### **High Priority:**
1. **README PowerPoints** - First thing users see, sets expectations
2. **Main Presentations** - Most visible, used for team presentations

### **Medium Priority:**
3. **PDF Guides** - Comprehensive but less frequently accessed

---

## 💡 Design Principles

**"Form, but still function"** - Visual appeal that enhances usability

### **Do:**
- ✅ Use Operiva colors consistently
- ✅ Add logo for brand recognition
- ✅ Use icons and emojis for visual interest
- ✅ Create clear visual hierarchy
- ✅ Add white space for breathing room
- ✅ Use borders and fills to organize content
- ✅ Make interactive elements obvious (buttons, links)

### **Don't:**
- ❌ Overuse animations or transitions
- ❌ Add decorative elements that don't serve a purpose
- ❌ Use too many colors (stick to brand palette)
- ❌ Make text too small or hard to read
- ❌ Clutter slides with too much information
- ❌ Use generic stock photos

---

## 📦 Current Package Status

| Artifact | ZIP Size | Excel | README PPT | Main PPT | PDF | Status |
|----------|----------|-------|------------|----------|-----|--------|
| SWOT Analysis | 350 KB | ✅ Enhanced | ⏳ Basic | ✅ Enhanced | ⏳ Basic | 50% |
| CHAT Framework | 340 KB | ✅ Enhanced | ⏳ Basic | ✅ Enhanced | ⏳ Basic | 50% |
| Levels of Work | 337 KB | ✅ Enhanced | ⏳ Basic | ✅ Enhanced | ⏳ Basic | 50% |

---

## 🚀 How to Continue Enhancements

### **Step 1: Set Up Environment**
```bash
cd /home/ubuntu/Operiva/artifacts
cp operiva-logo.png /tmp/  # Make logo accessible
```

### **Step 2: Choose a File to Enhance**
Start with README PowerPoints (highest priority)

### **Step 3: Follow Instructions Above**
Use the Python code examples provided for each phase

### **Step 4: Test the Enhancement**
Open the file and verify:
- Logo is visible and properly sized
- Colors match Operiva brand
- Text is readable
- Layout is clean and professional

### **Step 5: Replace Old File**
```bash
mv 01-README-SWOT-Enhanced.pptx 01-README-SWOT.pptx
```

### **Step 6: Re-Package and Upload**
```bash
zip -q SWOT-Analysis-Pack.zip \
  01-README-SWOT.pptx \
  02-SWOT-Analysis-Guide.pdf \
  03-SWOT-Analysis-Worksheet.xlsx \
  04-SWOT-Analysis-Presentation.pptx

manus-upload-file SWOT-Analysis-Pack.zip
# Update seed.js with new URL
# Re-seed database
# Push to GitHub
```

---

## 📞 Questions or Issues?

If you encounter any problems or need clarification:
1. Review the Python code examples above
2. Check existing enhanced files for reference (Excel worksheets)
3. Refer to Operiva brand colors at the top of this document
4. Test incrementally - enhance one slide at a time

---

**Remember:** The goal is professional, branded, easy-to-use artifacts that help South African SMMEs succeed. Every enhancement should serve that purpose!

