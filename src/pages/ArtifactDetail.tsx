// src/pages/ArtifactDetail.tsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Artifact } from '../types';
import { getArtifact } from '../services/firestore';
import { ArrowDownTrayIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

// Seed data removed. Using live data from Firestore.

export default function ArtifactDetail() {
  const { id } = useParams<{ id: string }>();
  // Remove unused variable
  const { hasMembership } = useAuth();
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtifact = async () => {
      if (!id) return;

      try {
        const fetchedArtifact = await getArtifact(id);
        if (fetchedArtifact) {
=======
          // Convert Firestore Timestamp to Date object for consistency
          if (fetchedArtifact.lastUpdated && typeof fetchedArtifact.lastUpdated.toDate === 'function') {
