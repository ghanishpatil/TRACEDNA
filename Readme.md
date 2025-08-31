🛡️ Hoax Bomb Threat Tracing System (with TSDNA)
📌 Overview

This project detects, traces, and links hoax bomb threats across email, social media, and messaging platforms.
It uses AI models, metadata analysis, device fingerprinting, and a unique Threat Signature DNA (TSDNA) feature to reliably link repeat offenders — even if they change accounts or devices.

⚙️ Tech Stack

Frontend: HTML, CSS, JavaScript

Charts → Chart.js

Graph visualization → Cytoscape.js

Backend: Python (FastAPI or Flask)

ML/NLP Libraries: Hugging Face DistilBERT, spaCy, SentenceTransformers, SimHash (datasketch)

Fingerprinting: JA3 TLS, ua-parser

Database & Storage: Firebase Firestore + Firebase Cloud Storage

Auth: Firebase Authentication

Task Queue: Redis + Celery

🔄 System Workflow

Ingestion → Emails (.eml), Social JSON dumps, Messaging reports.

Filtering → Regex keyword rules.

Classification → DistilBERT threat detection.

Entity Extraction → spaCy (place, time, targets).

Fingerprinting → User-Agent + JA3 TLS fingerprints.

Stylometry → SimHash + SentenceTransformers embeddings.

TSDNA Linking → Composite fingerprint stored + matched in FAISS.

Risk Scoring → Weighted formula (content, metadata, re-offense).

Storage → Firestore + Cloud Storage.

Investigator Dashboard → Analysts review flagged threats, risk levels, and TSDNA links.

🎨 Dashboard Design
📍 Pages

Login Page

Firebase Auth (email/password or Google login)

Secure analyst access

Live Queue (Home Page)

Table of flagged threats

Columns: ID, Source (Email/Social), Risk Level, Timestamp

Risk Level shown as color chips: 🟢 Low | 🟡 Medium | 🔴 High

Threat Detail View

Raw Text Panel → full email/message content

Metadata Panel → sender IP, device info, headers

Entity Extraction Panel → time/place/target (from spaCy)

TSDNA Card → family ID, linked past events

Risk Breakdown → Chart.js donut chart (weights: severity, metadata, reoffense, etc.)

Link Graph View

Interactive Cytoscape.js graph showing connections:

Events ↔ Devices ↔ TSDNA Families

Helps analysts see repeat offenders visually

Case Management

Create case, merge events, add notes

Export evidence bundle (JSON + raw artifacts)

Audit Log

List of analyst actions (viewed event, created case, exported evidence)

📊 Risk Scoring (Factors)
Risk = w1*DistilBERT_Prob + w2*Severity + w3*MetadataCredibility 
     + w4*TSDNA_Reoffense + w5*Immediacy


Displayed as: High | Medium | Low with percentage.

🚀 Getting Started
1. Clone Repo
git clone <your-repo-url>
cd hoax-bomb-threat-system

2. Backend Setup
pip install -r requirements.txt
uvicorn main:app --reload

3. Frontend Setup

Open index.html in browser (static HTML/JS).

Or serve via Python’s http.server.

4. Firebase Setup

Create Firebase project → Enable Firestore + Authentication + Storage.

Add your Firebase config in config.js.

📌 Future Work

Multilingual threat detection (Hindi/Hinglish).

OSINT integration (AbuseIPDB, VirusTotal).

Neo4j-based advanced link graphs.