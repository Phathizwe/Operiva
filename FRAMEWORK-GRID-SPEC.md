# Operiva Business Capability Framework Grid - Technical Specification

## Overview

This document specifies the design and implementation of the "Operiva Business Capability Framework" - a periodic table-style interface for browsing all artifacts across the platform.

---

## Design Concept

### Visual Metaphor
The periodic table of elements organizes chemical elements by properties and relationships. Similarly, the Operiva Framework Grid organizes business capabilities by outcome and workflow progression.

### Key Principles
1. **See Everything at Once** - Users can view the entire capability landscape on one screen
2. **Visual Relationships** - Spatial proximity indicates logical connections
3. **Color-Coded Domains** - Each outcome library has a distinct color family
4. **Progressive Disclosure** - Hover for details, click for full artifact page
5. **Responsive Design** - Grid on desktop, list on mobile

---

## Information Architecture

### Hierarchy

```
Operiva Business Capability Framework
│
├── FOUNDATION (Row 1)
│   ├── Business Model Design
│   │   ├── Business Model Canvas (SA Edition)
│   │   ├── CHAT Framework (SA Edition)
│   │   └── Business Model Validation Checklist
│   └── Strategic Analysis
│       ├── SWOT Analysis Pack (SA Edition)
│       └── Competitive Intelligence Workbook
│
├── PLANNING (Row 2)
│   ├── Market Strategy
│   │   ├── Market Entry Playbook (SA Edition)
│   │   ├── Market Segmentation Workbook
│   │   └── Go-to-Market Strategy Template
│   └── Annual Planning
│       ├── Annual Strategic Planning Guide
│       ├── OKR Planning Template
│       └── Budget Planning Workbook
│
├── EXECUTION (Row 3)
│   ├── Cash Management
│   │   ├── Cash Flow Forecasting Tool
│   │   ├── Debtor Management Scripts
│   │   └── Funding Readiness Checklist
│   ├── Customer Acquisition
│   │   ├── Digital Marketing Playbook
│   │   ├── Sales Pitch Deck Template
│   │   └── Customer Journey Mapping Tool
│   └── Operations
│       ├── Load Shedding Continuity Plan
│       ├── Inventory Management SOP
│       └── Supplier Scorecard Template
│
└── OPTIMIZATION (Row 4)
    ├── Performance Tracking
    │   ├── KPI Dashboard Template
    │   ├── Financial Reporting Pack
    │   └── Customer Analytics Workbook
    └── Continuous Improvement
        ├── Process Optimization Guide
        ├── Quality Control Checklist
        └── Lean Six Sigma for SMMEs
```

### Capability Areas (Intermediate Layer)

| Library | Capability Areas |
|---------|------------------|
| **Strategy** | Business Model Design, Strategic Analysis, Market Strategy, Annual Planning |
| **Cash** | Cash Management, Financial Planning, Funding Readiness |
| **Customers** | Customer Acquisition, Marketing Strategy, Sales Effectiveness |
| **Control** | Operations Management, Supply Chain, Quality Control |
| **Compliance** | Regulatory Compliance, Risk Management, Governance |
| **Human Capital** | Leadership Development, Talent Management, Organizational Design |

---

## Visual Design Specification

### Grid Layout

**Desktop (1920×1080):**
- Grid container: 1400px wide, centered
- Tile size: 180px × 120px
- Gap: 16px horizontal, 12px vertical
- Columns: 7 tiles per row
- Rows: Variable (based on content)

**Tablet (768×1024):**
- Grid container: 720px wide
- Tile size: 160px × 110px
- Gap: 12px
- Columns: 4 tiles per row

**Mobile (375×667):**
- Falls back to list view (card-based)
- Full-width cards with preview image
- Vertical scrolling

### Color Palette by Library

| Library | Base Color | Light | Medium | Dark | Use Case |
|---------|------------|-------|--------|------|----------|
| **Strategy** | #1C2A4A (Navy) | #2C3E5F | #1C2A4A | #0F1829 | Foundation artifacts |
| **Cash** | #27AE60 (Green) | #52C77A | #27AE60 | #1E8449 | Financial artifacts |
| **Customers** | #E67E22 (Orange) | #F39C12 | #E67E22 | #CA6F1E | Marketing/sales artifacts |
| **Control** | #9B59B6 (Purple) | #AF7AC5 | #9B59B6 | #7D3C98 | Operations artifacts |
| **Compliance** | #3498DB (Blue) | #5DADE2 | #3498DB | #2874A6 | Compliance artifacts |
| **Human Capital** | #E74C3C (Red) | #EC7063 | #E74C3C | #C0392B | HR/leadership artifacts |

### Tile Design

```
┌────────────────────────────┐
│ 🎯                      💎 │  ← Icon (24×24) + Premium badge (if applicable)
│                            │
│                            │
│   Artifact Title Here      │  ← Title (14px, Sora Bold, white text)
│   Wraps to Two Lines       │
│                            │
│                            │
└────────────────────────────┘
```

**Tile States:**

1. **Default**
   - Background: Library color (medium shade)
   - Text: White
   - Border: None
   - Shadow: `0 2px 4px rgba(0,0,0,0.1)`

2. **Hover**
   - Background: Library color (light shade)
   - Text: White
   - Border: 2px solid library color (dark shade)
   - Shadow: `0 4px 12px rgba(0,0,0,0.15)`
   - Transform: `translateY(-2px)`
   - Cursor: pointer
   - **Tooltip appears** (see below)

3. **Active/Clicked**
   - Background: Library color (dark shade)
   - Text: White
   - Border: 2px solid library color (medium shade)
   - Shadow: `0 1px 2px rgba(0,0,0,0.2)` (inset)
   - Transform: `translateY(0)`

4. **Disabled** (coming soon)
   - Background: #95A5A6 (gray)
   - Text: White at 60% opacity
   - Border: None
   - Shadow: None
   - Cursor: not-allowed

### Tooltip Design

**Trigger**: Hover over tile for 300ms

**Content**:
```
┌─────────────────────────────────────┐
│ Artifact Title                      │
│ ─────────────────────────────────── │
│ One-sentence value proposition      │
│ describing the artifact's benefit.  │
│                                     │
│ 📦 Type: Guide                      │
│ ⏱️ Time: 45 minutes                 │
│ 💎 Premium                          │
└─────────────────────────────────────┘
```

**Styling**:
- Background: White
- Border: 1px solid #E0E0E0
- Shadow: `0 4px 16px rgba(0,0,0,0.1)`
- Padding: 16px
- Max width: 300px
- Font: Inter, 13px
- Position: Above tile (if space), otherwise below

### Domain Headers

**Placement**: Above each column of tiles

**Design**:
```
FOUNDATION          PLANNING           EXECUTION
──────────────      ────────────       ─────────────
```

**Styling**:
- Font: Sora, 12px, uppercase, bold
- Color: #6B7280 (gray)
- Letter spacing: 1px
- Margin bottom: 8px

### Section Labels

**Placement**: Left side of each row

**Design**:
```
Strategy
────────────
[Tiles...]

Cash
────────────
[Tiles...]
```

**Styling**:
- Font: Sora, 16px, semibold
- Color: Library color (dark shade)
- Margin right: 24px
- Vertical alignment: Center of row

---

## Component Architecture

### File Structure

```
src/
├── components/
│   ├── framework/
│   │   ├── FrameworkGrid.tsx          # Main container
│   │   ├── CapabilitySection.tsx      # One row of tiles
│   │   ├── CapabilityTile.tsx         # Individual tile
│   │   ├── TileTooltip.tsx            # Hover tooltip
│   │   ├── FrameworkLegend.tsx        # Color legend
│   │   └── FrameworkFilters.tsx       # Filter controls
│   └── ...
├── pages/
│   ├── Framework.tsx                   # New page
│   └── ...
├── hooks/
│   ├── useFrameworkData.ts            # Data fetching
│   └── ...
└── types/
    ├── framework.ts                    # TypeScript interfaces
    └── ...
```

### TypeScript Interfaces

```typescript
// src/types/framework.ts

export interface CapabilityArea {
  id: string;
  title: string;
  description: string;
  library: Outcome;
  order: number;
  artifactIds: string[];
}

export interface FrameworkSection {
  id: string;
  title: string; // "Foundation", "Planning", "Execution", "Optimization"
  order: number;
  capabilityAreas: CapabilityArea[];
}

export interface FrameworkData {
  sections: FrameworkSection[];
  artifacts: Artifact[];
}

export interface TilePosition {
  row: number;
  column: number;
}
```

### React Components

#### 1. FrameworkGrid.tsx

```typescript
import React, { useState, useEffect } from 'react';
import { useFrameworkData } from '../hooks/useFrameworkData';
import CapabilitySection from './CapabilitySection';
import FrameworkLegend from './FrameworkLegend';
import FrameworkFilters from './FrameworkFilters';

export default function FrameworkGrid() {
  const { sections, artifacts, loading } = useFrameworkData();
  const [filters, setFilters] = useState({
    library: 'all',
    premium: 'all',
    type: 'all'
  });

  if (loading) return <LoadingSpinner />;

  return (
    <div className="framework-container">
      {/* Header */}
      <div className="framework-header">
        <h1 className="text-4xl font-bold text-navy mb-4">
          Operiva Business Capability Framework
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Everything you need to build a resilient South African SMME
        </p>
      </div>

      {/* Filters */}
      <FrameworkFilters filters={filters} onChange={setFilters} />

      {/* Legend */}
      <FrameworkLegend />

      {/* Grid */}
      <div className="framework-grid">
        {sections.map(section => (
          <CapabilitySection
            key={section.id}
            section={section}
            artifacts={artifacts}
            filters={filters}
          />
        ))}
      </div>
    </div>
  );
}
```

#### 2. CapabilitySection.tsx

```typescript
import React from 'react';
import { FrameworkSection, Artifact } from '../../types/framework';
import CapabilityTile from './CapabilityTile';

interface Props {
  section: FrameworkSection;
  artifacts: Artifact[];
  filters: any;
}

export default function CapabilitySection({ section, artifacts, filters }: Props) {
  return (
    <div className="capability-section mb-12">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        {section.title}
      </h2>

      {/* Capability Areas */}
      <div className="grid grid-cols-7 gap-4">
        {section.capabilityAreas.map(area => {
          const areaArtifacts = artifacts.filter(a => 
            area.artifactIds.includes(a.id)
          );

          return areaArtifacts.map(artifact => (
            <CapabilityTile
              key={artifact.id}
              artifact={artifact}
              capabilityArea={area}
            />
          ));
        })}
      </div>
    </div>
  );
}
```

#### 3. CapabilityTile.tsx

```typescript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Artifact, CapabilityArea } from '../../types/framework';
import TileTooltip from './TileTooltip';
import { getLibraryColor } from '../../utils/colors';

interface Props {
  artifact: Artifact;
  capabilityArea: CapabilityArea;
}

export default function CapabilityTile({ artifact, capabilityArea }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const color = getLibraryColor(artifact.outcome);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        to={`/artifacts/${artifact.id}`}
        className={`
          capability-tile
          flex flex-col items-start justify-between
          p-4 rounded-lg
          transition-all duration-200
          hover:-translate-y-1 hover:shadow-lg
        `}
        style={{
          backgroundColor: color.medium,
          borderColor: color.dark,
        }}
      >
        {/* Icon and Premium Badge */}
        <div className="flex justify-between w-full mb-2">
          <span className="text-2xl">{getArtifactIcon(artifact.type)}</span>
          {artifact.isPremium && (
            <span className="text-yellow-400">💎</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-white leading-tight">
          {artifact.title}
        </h3>
      </Link>

      {/* Tooltip */}
      {showTooltip && <TileTooltip artifact={artifact} />}
    </div>
  );
}
```

#### 4. TileTooltip.tsx

```typescript
import React from 'react';
import { Artifact } from '../../types/framework';

interface Props {
  artifact: Artifact;
}

export default function TileTooltip({ artifact }: Props) {
  return (
    <div className="
      absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2
      bg-white rounded-lg shadow-xl border border-gray-200
      p-4 w-80
    ">
      {/* Title */}
      <h4 className="font-semibold text-navy mb-2">
        {artifact.title}
      </h4>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-2" />

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">
        {artifact.description}
      </p>

      {/* Metadata */}
      <div className="flex flex-col gap-1 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span>📦</span>
          <span>Type: {artifact.type}</span>
        </div>
        {artifact.isPremium && (
          <div className="flex items-center gap-2">
            <span>💎</span>
            <span>Premium</span>
          </div>
        )}
      </div>

      {/* Arrow */}
      <div className="
        absolute top-full left-1/2 transform -translate-x-1/2
        w-0 h-0
        border-l-8 border-l-transparent
        border-r-8 border-r-transparent
        border-t-8 border-t-white
      " />
    </div>
  );
}
```

---

## Data Structure Updates

### Firestore Schema Changes

**New Collection: `capabilityAreas`**

```javascript
{
  id: 'business-model-design',
  title: 'Business Model Design',
  description: 'Design and validate your business model with proven frameworks',
  library: 'Strategy',
  order: 1,
  artifactIds: ['s1', 's6'], // BMC and CHAT
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**New Collection: `frameworkSections`**

```javascript
{
  id: 'foundation',
  title: 'Foundation',
  description: 'Core frameworks for business model and strategy',
  order: 1,
  capabilityAreaIds: ['business-model-design', 'strategic-analysis'],
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Updated seed.js

```javascript
// New data structure
const frameworkSections = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'Core frameworks for business model and strategy',
    order: 1
  },
  {
    id: 'planning',
    title: 'Planning',
    description: 'Strategic planning and market analysis',
    order: 2
  },
  {
    id: 'execution',
    title: 'Execution',
    description: 'Operational implementation and customer acquisition',
    order: 3
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description: 'Performance tracking and continuous improvement',
    order: 4
  }
];

const capabilityAreas = [
  // Foundation
  {
    id: 'business-model-design',
    title: 'Business Model Design',
    description: 'Design and validate your business model',
    library: 'Strategy',
    section: 'foundation',
    order: 1,
    artifactIds: ['s1', 's6']
  },
  {
    id: 'strategic-analysis',
    title: 'Strategic Analysis',
    description: 'Analyze your competitive position',
    library: 'Strategy',
    section: 'foundation',
    order: 2,
    artifactIds: ['s2', 's4']
  },
  // Planning
  {
    id: 'market-strategy',
    title: 'Market Strategy',
    description: 'Plan your market entry and expansion',
    library: 'Strategy',
    section: 'planning',
    order: 1,
    artifactIds: ['s5']
  },
  // ... more capability areas
];
```

---

## Routing & Navigation

### New Route

```typescript
// src/App.tsx

<Route path="/framework" element={<Framework />} />
```

### Navigation Updates

```typescript
// src/components/DesktopNav.tsx

<NavLink to="/framework" className="nav-link">
  Framework
</NavLink>
```

### Home Page CTA

```typescript
// src/pages/Home.tsx

<Link 
  to="/framework"
  className="btn-primary"
>
  Browse All Capabilities
</Link>
```

---

## Responsive Behavior

### Desktop (≥1024px)
- Full grid layout (7 columns)
- Hover tooltips
- All interactions enabled

### Tablet (768px - 1023px)
- Reduced grid (4 columns)
- Smaller tiles (160×110px)
- Hover tooltips still work

### Mobile (<768px)
- **Falls back to list view**
- Full-width cards with preview images
- Tap to view artifact detail
- No tooltips (use card description instead)

---

## Accessibility

### Keyboard Navigation
- Tab through tiles in reading order
- Enter/Space to activate tile
- Escape to close tooltip
- Arrow keys to navigate grid

### Screen Readers
- Semantic HTML (`<nav>`, `<section>`, `<article>`)
- ARIA labels for icons
- Alt text for images
- Descriptive link text

### Color Contrast
- All text meets WCAG AA standards (4.5:1 contrast)
- Premium badge has sufficient contrast
- Focus indicators visible

---

## Performance Considerations

### Data Loading
- Fetch all artifacts and capability areas on mount
- Cache in React state (no re-fetching on filter changes)
- Use React.memo for tile components
- Lazy load images (if we add preview images to tiles)

### Rendering Optimization
- Virtualize grid if >100 tiles (use `react-window`)
- Debounce filter changes (300ms)
- Use CSS transforms for animations (GPU-accelerated)

### Bundle Size
- Code-split Framework page (lazy load)
- Tree-shake unused Tailwind classes
- Optimize SVG icons

---

## Testing Strategy

### Unit Tests
- Tile component renders correctly
- Tooltip shows/hides on hover
- Filters work correctly
- Color utility functions return correct values

### Integration Tests
- Framework page loads with data
- Clicking tile navigates to artifact detail
- Filters update visible tiles
- Responsive breakpoints work

### E2E Tests
- User can browse framework
- User can filter artifacts
- User can click tile and view artifact
- Mobile fallback to list view works

---

## Implementation Checklist

### Phase 1: Data Structure (Week 1)
- [ ] Create `frameworkSections` collection in Firestore
- [ ] Create `capabilityAreas` collection in Firestore
- [ ] Update seed.js with new data
- [ ] Update TypeScript types
- [ ] Create data fetching hook

### Phase 2: Components (Week 2)
- [ ] Build `FrameworkGrid` component
- [ ] Build `CapabilitySection` component
- [ ] Build `CapabilityTile` component
- [ ] Build `TileTooltip` component
- [ ] Build `FrameworkLegend` component
- [ ] Build `FrameworkFilters` component

### Phase 3: Styling (Week 3)
- [ ] Implement color system
- [ ] Style tiles with hover effects
- [ ] Style tooltips
- [ ] Implement responsive grid
- [ ] Add animations and transitions

### Phase 4: Integration (Week 4)
- [ ] Create Framework page
- [ ] Add route to App.tsx
- [ ] Update navigation components
- [ ] Add CTA on Home page
- [ ] Test all interactions

### Phase 5: Polish (Week 5)
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] User acceptance testing

---

## Future Enhancements

### Phase 2 Features
- **Search within framework** - Highlight matching tiles
- **Saved artifacts** - Bookmark tiles for later
- **Progress tracking** - Show completed artifacts
- **Personalized view** - Hide/show libraries based on user role

### Phase 3 Features
- **Learning paths** - Visual connections between tiles
- **Recommended next steps** - Suggest related artifacts
- **Community ratings** - Show popularity/ratings on tiles
- **Preview on hover** - Show actual slide preview in tooltip

---

**Next Action**: Should I start building the React components, or would you like to review/modify this specification first?

