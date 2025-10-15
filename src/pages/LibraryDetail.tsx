// src/pages/LibraryDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Artifact, Track, Outcome } from '../types';
import ArtifactCard from '../components/ArtifactCard';
=======
import { getArtifactsByOutcome, getTracksByOutcome } from '../services/firestore';
=======
