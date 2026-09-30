// Kuantan Coastal Vulnerability Index (CVI) & Marine Spatial Planning (MSP) Data
const locationsData = [
    {
        id: 1,
        name: "Pantai Cherating",
        cviRisk: "high",
        cviScore: 4.2,
        zoneType: "conservation",
        zoneName: "Zon Pemeliharaan & Ekopelancongan",
        lat: 4.1264,
        lng: 103.3942,
        desc: "Kawasan tarikan utama pelancongan dan tempat pendaratan penyu. Menghadapi ancaman hakisan monsun yang serius dengan kehilangan pesisir pantai sehingga 1.8m setahun.",
        metrics: {
            geom: "Pasir Halus (Sangat Rentan)",
            erosion: "-1.8m / tahun",
            slope: "0.4% (Landai)",
            wave: "1.1m (Tinggi)",
            tide: "1.9m (Sederhana)"
        },
        mspGuidelines: "Dilarang sebarang struktur pembangunan kekal dalam lingkungan 50 meter dari garis pasang surut maksimum. Diwartakan sebagai kawasan perlindungan penyu dan rizab hutan paya bakau."
    },
    {
        id: 2,
        name: "Pantai Balok",
        cviRisk: "medium",
        cviScore: 3.1,
        zoneType: "tourism",
        zoneName: "Zon Rekreasi & Sukan Air",
        lat: 3.9312,
        lng: 103.3768,
        desc: "Terkenal dengan aktiviti luncur angin. Mengalami hakisan bermusim pada tahap sederhana, sebahagian pantai dilindungi oleh gumuk pasir semula jadi.",
        metrics: {
            geom: "Pasir Kerikil (Sederhana)",
            erosion: "-0.5m / tahun",
            slope: "0.8% (Sederhana)",
            wave: "0.8m (Sederhana)",
            tide: "1.8m (Sederhana)"
        },
        mspGuidelines: "Dibenarkan untuk struktur pelancongan ringan bermusim. Sebarang benteng penahan ombak tegar (hard structure) perlu melalui penilaian impak hidrodinamik terperinci."
    },
    {
        id: 3,
        name: "Pelabuhan Kuantan",
        cviRisk: "low",
        cviScore: 1.4,
        zoneType: "industry",
        zoneName: "Zon Perindustrian & Port Logistik",
        lat: 3.9782,
        lng: 103.4288,
        desc: "Zon industri pelabuhan penting di Pantai Timur. Pantai sangat terlindung oleh benteng pemecah ombak (breakwater) konkrit yang kukuh, meminimumkan risiko hakisan fizikal.",
        metrics: {
            geom: "Batuan Konkrit / Tambak (Kebal)",
            erosion: "+1.2m / tahun (Akresi)",
            slope: "3.2% (Curam)",
            wave: "0.3m (Rendah)",
            tide: "1.8m (Sederhana)"
        },
        mspGuidelines: "Dikhaskan untuk peluasan infrastruktur pelabuhan dan logistik marin. Pemantauan berkala terhadap pemendapan pasir di kawasan alur pelayaran kapal adalah diwajibkan."
    },
    {
        id: 4,
        name: "Teluk Cempedak",
        cviRisk: "medium",
        cviScore: 2.8,
        zoneType: "tourism",
        zoneName: "Zon Pelancongan Utama & Komersial",
        lat: 3.8118,
        lng: 103.3732,
        desc: "Pantai rekreasi paling popular di bandar Kuantan. Gabungan batuan granit yang kukuh di bahagian utara memberi perlindungan, manakala bahagian pantai berpasir terdedah kepada hakisan kecil.",
        metrics: {
            geom: "Batuan Granit & Pasir (Sederhana)",
            erosion: "-0.3m / tahun",
            slope: "1.2% (Agak Curam)",
            wave: "0.7m (Sederhana)",
            tide: "1.8m (Sederhana)"
        },
        mspGuidelines: "Sesuai untuk pembangunan komersial pelancongan. Benteng pemecah ombak terapung atau pendekatan lembut (soft engineering) diutamakan untuk mengelakkan kehilangan pasir pantai."
    },
    {
        id: 5,
        name: "Tanjung Lumpur",
        cviRisk: "medium",
        cviScore: 3.4,
        zoneType: "fishery",
        zoneName: "Zon Perikanan Tradisional & Akuakultur",
        lat: 3.8052,
        lng: 103.3448,
        desc: "Terletak di muara Sungai Kuantan. Kawasan ini terdiri daripada hutan bakau dan flat lumpur yang luas. Sangat dipengaruhi oleh kenaikan aras laut semasa air pasang besar.",
        metrics: {
            geom: "Lumpur & Bakau (Sangat Rentan)",
            erosion: "-0.2m / tahun",
            slope: "0.1% (Sangat Landai)",
            wave: "0.2m (Rendah)",
            tide: "2.0m (Tinggi)"
        },
        mspGuidelines: "Dilarang sama sekali sebarang penebangan hutan bakau untuk projek pembangunan komersial. Pembangunan akuakultur kolam darat dihadkan bagi mengelakkan pencemaran muara."
    },
    {
        id: 6,
        name: "Pantai Kempadang",
        cviRisk: "high",
        cviScore: 4.0,
        zoneType: "tourism",
        zoneName: "Zon Pelancongan Ringan & Kediaman",
        lat: 3.7712,
        lng: 103.3282,
        desc: "Kawasan pantai berpasir halus yang mengalami hakisan kritikal akibat arus pesisir pantai. Beberapa struktur rumah kediaman di pinggir pantai kini terancam.",
        metrics: {
            geom: "Pasir Halus (Rentan)",
            erosion: "-1.5m / tahun",
            slope: "0.5% (Landai)",
            wave: "0.9m (Tinggi)",
            tide: "1.9m (Sederhana)"
        },
        mspGuidelines: "Keperluan mendesak untuk projek penambakan pasir pantai (beach nourishment) atau benteng pemecah ombak luar pesisir bagi menstabilkan garis pantai."
    },
    {
        id: 7,
        name: "Pantai Sepat",
        cviRisk: "high",
        cviScore: 4.4,
        zoneType: "fishery",
        zoneName: "Zon Nelayan & Pertanian Pesisir",
        lat: 3.7022,
        lng: 103.3212,
        desc: "Pantai berpasir yang sangat panjang dan terdedah terus kepada ombak Laut China Selatan. Kadar hakisan semasa Monsun Timur Laut amat tinggi, merosakkan jalan raya pesisir.",
        metrics: {
            geom: "Pasir Halus (Sangat Rentan)",
            erosion: "-2.1m / tahun",
            slope: "0.2% (Sangat Landai)",
            wave: "1.2m (Tinggi)",
            tide: "2.0m (Tinggi)"
        },
        mspGuidelines: "Pembangunan kediaman baharu dilarang dalam jarak 100 meter dari zon air pasang. Diutamakan bagi aktiviti bot nelayan tradisional berlabuh dan penanaman pokok rhu penahan angin."
    }
];

// Coastline coordinates generator helper for visualizing CVI colored segments
// In a real GIS, this would be GeoJSON. We define segments approximating the Kuantan coastline.
const coastlineSegments = [
    {
        name: "Cherating Segment",
        coords: [
            [4.1400, 103.4000],
            [4.1264, 103.3942],
            [4.1000, 103.3850]
        ],
        risk: "high"
    },
    {
        name: "Balok - Kuantan Port Segment",
        coords: [
            [4.0200, 103.4150],
            [3.9782, 103.4288],
            [3.9312, 103.3768],
            [3.8700, 103.3680]
        ],
        risk: "medium" // Mixed, Balok med, Port low but segment overall medium risk
    },
    {
        name: "Teluk Cempedak Segment",
        coords: [
            [3.8300, 103.3750],
            [3.8118, 103.3732],
            [3.8052, 103.3448] // connects to Tanjung Lumpur
        ],
        risk: "medium"
    },
    {
        name: "Kempadang - Sepat Segment",
        coords: [
            [3.8000, 103.3350],
            [3.7712, 103.3282],
            [3.7022, 103.3212],
            [3.6700, 103.3100]
        ],
        risk: "high"
    }
];

// MSP Spatial Polygon coordinates for shaded planning zones
const mspPolygonsData = [
    {
        name: "Zon Konservasi Penyu & Marin Cherating",
        coords: [
            [4.1500, 103.3900],
            [4.1500, 103.4200],
            [4.0900, 103.4100],
            [4.0900, 103.3700]
        ],
        type: "conservation"
    },
    {
        name: "Zon Rekreasi & Pelancongan Pantai Balok",
        coords: [
            [3.9500, 103.3600],
            [3.9500, 103.4000],
            [3.9000, 103.3900],
            [3.9000, 103.3500]
        ],
        type: "tourism"
    },
    {
        name: "Zon Perindustrian Pelabuhan Kuantan",
        coords: [
            [4.0100, 103.4100],
            [4.0100, 103.4500],
            [3.9600, 103.4400],
            [3.9600, 103.4000]
        ],
        type: "industry"
    },
    {
        name: "Zon Nelayan & Perikanan Sepat-Kempadang",
        coords: [
            [3.7800, 103.3100],
            [3.7800, 103.3600],
            [3.6800, 103.3400],
            [3.6800, 103.2900]
        ],
        type: "fishery"
    }
];

// Application state variables
let map;
let tileLayer;
let activeMode = "cvi"; // "cvi" or "msp"
let mapMarkers = [];
let mapPolylines = [];
let mapPolygons = [];
let communityReports = [
    {
        id: 101,
        reporter: "Mohd Fauzi",
        type: "Hakisan Pantai",
        severity: "Tinggi",
        desc: "Hakisan tebing pantai setinggi hampir 1.5 meter merosakkan pokok rhu berhampiran kedai makan Pantai Sepat.",
        coords: [3.7052, 103.3225],
        date: "2026-08-19"
    },
    {
        id: 102,
        reporter: "Sarah Amira",
        type: "Banjir Limpahan Air Pasang",
        severity: "Sederhana",
        desc: "Air pasang besar melimpah masuk ke kawasan parkir Teluk Cempedak malam tadi. Tinggi air paras buku lali.",
        coords: [3.8124, 103.3725],
        date: "2026-08-20"
    }
];
let reportMarkers = [];
let clickedLatLng = null;

// Initialize Map
function initMap() {
    // Kuantan center coordinate
    map = L.map('map', {
        zoomControl: false // custom position zoom control
    }).setView([3.9000, 103.3700], 11);

    // Leaflet Zoom Control positioned bottom-right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Dark Matter map tiles for premium aesthetic
    tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Map Click Handler for Crowdsourced reports
    map.on('click', function(e) {
        // Only trigger if we click near the coastline/water
        clickedLatLng = e.latlng;
        openReportModal(clickedLatLng.lat, clickedLatLng.lng);
    });

    // Initial render of spatial data layers
    renderSpatialLayers();
    renderCommunityReportMarkers();
}

// Render active map layers
function renderSpatialLayers() {
    // Clear existing overlay features
    mapPolylines.forEach(layer => map.removeLayer(layer));
    mapPolylines = [];
    mapPolygons.forEach(layer => map.removeLayer(layer));
    mapPolygons = [];
    mapMarkers.forEach(marker => map.removeLayer(marker));
    mapMarkers = [];

    const legendTitle = document.getElementById("legend-title");
    const legendContent = document.getElementById("legend-content");

    if (activeMode === "cvi") {
        legendTitle.innerText = "Indeks Kerentanan Pantai (CVI)";
        legendContent.innerHTML = `
            <div class="legend-row">
                <div class="legend-color-line bg-red"></div>
                <span>Kerentanan Tinggi</span>
            </div>
            <div class="legend-row">
                <div class="legend-color-line bg-orange"></div>
                <span>Kerentanan Sederhana</span>
            </div>
            <div class="legend-row">
                <div class="legend-color-line bg-green"></div>
                <span>Kerentanan Rendah</span>
            </div>
        `;

        // Render colored coastline segments
        coastlineSegments.forEach(segment => {
            let color = "#05f19b"; // low
            if (segment.risk === "high") color = "#ff3f56";
            else if (segment.risk === "medium") color = "#fbc531";

            const polyline = L.polyline(segment.coords, {
                color: color,
                weight: 5,
                opacity: 0.85,
                lineCap: 'round'
            }).addTo(map);
            
            mapPolylines.push(polyline);
        });

        // Render point markers
        locationsData.forEach(loc => {
            let colorClass = "cvi-marker-low";
            if (loc.cviRisk === "high") colorClass = "cvi-marker-high";
            else if (loc.cviRisk === "medium") colorClass = "cvi-marker-medium";

            const customIcon = L.divIcon({
                className: `custom-div-icon ${colorClass}`,
                html: `<div>${loc.cviScore.toFixed(1)}</div>`,
                iconSize: [28, 28]
            });

            const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);
            
            // Popup contents
            marker.bindPopup(`
                <div class="popup-details">
                    <h3>${loc.name}</h3>
                    <p>${loc.desc}</p>
                    <div class="popup-meta">
                        <span>Skor CVI: <strong>${loc.cviScore.toFixed(1)}</strong></span>
                        <span class="popup-badge risk-badge ${loc.cviRisk}">${loc.cviRisk} risk</span>
                    </div>
                </div>
            `);
            
            marker.on('click', () => selectLocationCard(loc.id));
            mapMarkers.push(marker);
        });

    } else if (activeMode === "msp") {
        legendTitle.innerText = "Zon Perancangan Spatial Marin (MSP)";
        legendContent.innerHTML = `
            <div class="legend-row">
                <div class="legend-color bg-green" style="opacity:0.35; border:1px solid var(--accent-emerald)"></div>
                <span>Zon Konservasi</span>
            </div>
            <div class="legend-row">
                <div class="legend-color bg-orange" style="opacity:0.35; border:1px solid var(--accent-cyan)"></div>
                <span>Zon Pelancongan</span>
            </div>
            <div class="legend-row">
                <div class="legend-color bg-red" style="opacity:0.35; border:1px solid var(--accent-amber)"></div>
                <span>Zon Perindustrian</span>
            </div>
            <div class="legend-row">
                <div class="legend-color bg-blue" style="opacity:0.35; border:1px solid var(--accent-blue)"></div>
                <span>Zon Perikanan</span>
            </div>
        `;

        // Render shaded polygons representing Marine Spatial planning zones
        mspPolygonsData.forEach(poly => {
            let fillColor = "#05f19b"; // conservation
            let borderColor = "#05f19b";
            if (poly.type === "tourism") { fillColor = "#00f2fe"; borderColor = "#00f2fe"; }
            else if (poly.type === "industry") { fillColor = "#fbc531"; borderColor = "#fbc531"; }
            else if (poly.type === "fishery") { fillColor = "#3b82f6"; borderColor = "#3b82f6"; }

            const polygon = L.polygon(poly.coords, {
                fillColor: fillColor,
                fillOpacity: 0.15,
                color: borderColor,
                weight: 1.5,
                dashArray: '4'
            }).addTo(map);

            polygon.bindPopup(`<strong>${poly.name}</strong><br><span style="font-size:11px;color:#94a3b8">Zon spatial di bawah perancangan spatial negeri Pahang.</span>`);
            mapPolygons.push(polygon);
        });

        // Render point markers
        locationsData.forEach(loc => {
            let colorClass = "msp-marker-con";
            let symbol = "<i class='fa-solid fa-leaf'></i>";
            if (loc.zoneType === "tourism") { colorClass = "msp-marker-tou"; symbol = "<i class='fa-solid fa-umbrella-beach'></i>"; }
            else if (loc.zoneType === "industry") { colorClass = "msp-marker-ind"; symbol = "<i class='fa-solid fa-industry'></i>"; }
            else if (loc.zoneType === "fishery") { colorClass = "msp-marker-fis"; symbol = "<i class='fa-solid fa-ship'></i>"; }

            const customIcon = L.divIcon({
                className: `custom-div-icon ${colorClass}`,
                html: `<div style="color:#040814; font-size:10px">${symbol}</div>`,
                iconSize: [28, 28]
            });

            const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);
            
            marker.bindPopup(`
                <div class="popup-details">
                    <h3>${loc.name}</h3>
                    <p style="font-size:11px; color:#94a3b8; margin-bottom:4px"><strong>Zon:</strong> ${loc.zoneName}</p>
                    <p>${loc.mspGuidelines}</p>
                </div>
            `);

            marker.on('click', () => selectLocationCard(loc.id));
            mapMarkers.push(marker);
        });
    }
}

// Render active community reports on map
function renderCommunityReportMarkers() {
    reportMarkers.forEach(m => map.removeLayer(m));
    reportMarkers = [];

    communityReports.forEach(rep => {
        const customIcon = L.divIcon({
            className: 'report-marker-pulse',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const marker = L.marker(rep.coords, { icon: customIcon }).addTo(map);
        marker.bindPopup(`
            <div class="popup-details">
                <h3 style="color:var(--accent-red)"><i class="fa-solid fa-triangle-exclamation"></i> Aduan Komuniti</h3>
                <p><strong>Jenis:</strong> ${rep.type}</p>
                <p>${rep.desc}</p>
                <div class="popup-meta">
                    <span>Pengadu: <strong>${rep.reporter}</strong></span>
                    <span class="popup-badge badge-high" style="margin-left:auto">${rep.severity}</span>
                </div>
            </div>
        `);

        reportMarkers.push(marker);
    });

    document.getElementById("report-count").innerText = communityReports.length;
}

// Render Sidebar Location Cards
function renderLocationCards() {
    const listContainer = document.getElementById("locations-list");
    listContainer.innerHTML = "";

    locationsData.forEach(loc => {
        const card = document.createElement("div");
        card.className = `location-card ${activeMode === 'cvi' ? 'risk-' + loc.cviRisk : 'zone-' + loc.zoneType}`;
        card.id = `loc-card-${loc.id}`;
        
        let headerBadge = "";
        let metaHtml = "";

        if (activeMode === "cvi") {
            headerBadge = `<span class="risk-badge ${loc.cviRisk}">${loc.cviRisk} Risk</span>`;
            metaHtml = `
                <div class="meta-item">
                    <i class="fa-solid fa-calculator"></i>
                    <span>CVI: <strong>${loc.cviScore.toFixed(1)}</strong></span>
                </div>
                <div class="meta-item">
                    <i class="fa-solid fa-mountain-sun"></i>
                    <span>Geom: <strong>${loc.metrics.geom.split(' ')[0]}</strong></span>
                </div>
                <div class="meta-item">
                    <i class="fa-solid fa-arrow-trend-down"></i>
                    <span>Erosion: <strong>${loc.metrics.erosion}</strong></span>
                </div>
            `;
        } else {
            headerBadge = `<span class="zone-tag" style="background:rgba(255,255,255,0.05); color:var(--accent-${loc.zoneType === 'tourism' ? 'cyan' : loc.zoneType === 'conservation' ? 'emerald' : loc.zoneType === 'industry' ? 'amber' : 'blue'})">${loc.zoneType}</span>`;
            metaHtml = `
                <div class="meta-item" style="flex:1">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>Panduan: <strong style="font-size:10px">${loc.zoneName}</strong></span>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-group">
                    <h3>${loc.name}</h3>
                    <span>Kuantan, Pahang</span>
                </div>
                ${headerBadge}
            </div>
            <p class="card-description">${loc.desc}</p>
            <div class="card-meta-metrics">
                ${metaHtml}
            </div>
        `;

        card.addEventListener("click", () => {
            // Fly to location coordinate
            map.flyTo([loc.lat, loc.lng], 13, {
                animate: true,
                duration: 1.5
            });

            // Highlight card
            document.querySelectorAll(".location-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            // Open marker popup after minor timeout
            setTimeout(() => {
                const markerIndex = locationsData.findIndex(l => l.id === loc.id);
                if (markerIndex !== -1 && mapMarkers[markerIndex]) {
                    mapMarkers[markerIndex].openPopup();
                }
            }, 1500);
        });

        listContainer.appendChild(card);
    });

    document.getElementById("location-count").innerText = locationsData.length;
}

// Function to handle map interaction and card sync
function selectLocationCard(id) {
    document.querySelectorAll(".location-card").forEach(c => c.classList.remove("active"));
    const selectedCard = document.getElementById(`loc-card-${id}`);
    if (selectedCard) {
        selectedCard.classList.add("active");
        selectedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Autocomplete Search Engine Setup
function setupSearchAutocomplete() {
    const searchInput = document.getElementById("search-input");
    const suggestionsDropdown = document.getElementById("search-suggestions");

    searchInput.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length === 0) {
            suggestionsDropdown.classList.remove("active");
            suggestionsDropdown.innerHTML = "";
            return;
        }

        // Filter locations matching query
        const matches = locationsData.filter(loc => 
            loc.name.toLowerCase().includes(query) ||
            loc.desc.toLowerCase().includes(query) ||
            loc.zoneName.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            suggestionsDropdown.innerHTML = `
                <div class="suggestion-item" style="color:var(--text-dim); cursor:default">
                    <i class="fa-solid fa-magnifying-glass-chart"></i>
                    <span class="suggestion-title">Tiada padanan ditemui</span>
                </div>
            `;
            suggestionsDropdown.classList.add("active");
            return;
        }

        suggestionsDropdown.innerHTML = "";
        matches.forEach(match => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            
            let badgeClass = "badge-low";
            let badgeText = "low cvi";
            if (activeMode === "cvi") {
                if (match.cviRisk === "high") { badgeClass = "badge-high"; badgeText = "high risk"; }
                else if (match.cviRisk === "medium") { badgeClass = "badge-med"; badgeText = "med risk"; }
            } else {
                badgeClass = `badge-${match.zoneType === 'tourism' ? 'med' : match.zoneType === 'conservation' ? 'low' : 'high'}`;
                badgeText = match.zoneType;
            }

            item.innerHTML = `
                <i class="fa-solid fa-location-dot"></i>
                <div>
                    <span class="suggestion-title">${match.name}</span>
                    <span class="suggestion-subtitle">Kuantan</span>
                </div>
                <span class="suggestion-badge ${badgeClass}">${badgeText}</span>
            `;

            item.addEventListener("click", () => {
                searchInput.value = match.name;
                suggestionsDropdown.classList.remove("active");
                
                // Fly to coordinate and select card
                map.flyTo([match.lat, match.lng], 14, {
                    animate: true,
                    duration: 1.5
                });

                selectLocationCard(match.id);
                
                setTimeout(() => {
                    const markerIndex = locationsData.findIndex(l => l.id === match.id);
                    if (markerIndex !== -1 && mapMarkers[markerIndex]) {
                        mapMarkers[markerIndex].openPopup();
                    }
                }, 1500);
            });

            suggestionsDropdown.appendChild(item);
        });

        suggestionsDropdown.classList.add("active");
    });

    // Close suggestions on outside click
    document.addEventListener("click", function(e) {
        if (!searchInput.contains(e.target) && !suggestionsDropdown.contains(e.target)) {
            suggestionsDropdown.classList.remove("active");
        }
    });
}

// Side tab navigation logic
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            // Toggle Active state on buttons
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Toggle active state on panels
            tabPanels.forEach(p => p.classList.remove("active"));
            document.getElementById(targetTab).classList.add("active");
        });
    });
}

// Toggle layers logic (CVI vs MSP)
function setupLayerToggles() {
    const btnCvi = document.getElementById("btn-cvi-layer");
    const btnMsp = document.getElementById("btn-msp-layer");

    btnCvi.addEventListener("click", () => {
        if (activeMode !== "cvi") {
            activeMode = "cvi";
            btnCvi.classList.add("active");
            btnMsp.classList.remove("active");
            renderSpatialLayers();
            renderLocationCards();
        }
    });

    btnMsp.addEventListener("click", () => {
        if (activeMode !== "msp") {
            activeMode = "msp";
            btnMsp.classList.add("active");
            btnCvi.classList.remove("active");
            renderSpatialLayers();
            renderLocationCards();
        }
    });
}

// Live HUD Metric Simulation
function runLiveHudSimulation() {
    const hudTide = document.getElementById("hud-tide");
    const hudWave = document.getElementById("hud-wave");
    const hudWind = document.getElementById("hud-wind");
    const alertBadge = document.getElementById("hud-alert-badge");
    const alertText = document.getElementById("hud-alert-text");

    // Live variables initially
    let tideVal = 1.45;
    let waveVal = 0.72;
    let windVal = 14;

    setInterval(() => {
        // Small random fluctuations to simulate a live sensor feed
        tideVal += (Math.random() - 0.5) * 0.05;
        waveVal += (Math.random() - 0.5) * 0.04;
        windVal += Math.floor((Math.random() - 0.5) * 3);

        // Keep values in range
        if (tideVal < 0.2) tideVal = 0.2;
        if (tideVal > 3.0) tideVal = 3.0;
        if (waveVal < 0.1) waveVal = 0.1;
        if (waveVal > 2.5) waveVal = 2.5;
        if (windVal < 2) windVal = 2;
        if (windVal > 40) windVal = 40;

        // Render values
        hudTide.innerText = `${tideVal.toFixed(2)}m`;
        hudWave.innerText = `${waveVal.toFixed(2)}m`;
        hudWind.innerText = `${windVal} knot`;

        // Update alert level based on limits
        if (tideVal > 2.2 || waveVal > 1.6 || windVal > 25) {
            alertBadge.className = "metric status-red";
            alertText.innerText = "AMARAN BAHAYA";
            alertBadge.style.color = "var(--accent-red)";
        } else if (tideVal > 1.8 || waveVal > 1.2 || windVal > 18) {
            alertBadge.className = "metric status-orange";
            alertText.innerText = "BERWASPADALAH";
            alertBadge.style.color = "var(--accent-amber)";
        } else {
            alertBadge.className = "metric status-green";
            alertText.innerText = "Selamat";
            alertBadge.style.color = "var(--accent-emerald)";
        }
    }, 4000);
}

// CVI Calculator simulation formula
function setupCviCalculator() {
    const calcGeom = document.getElementById("calc-geom");
    const calcErosion = document.getElementById("calc-erosion");
    const calcSlope = document.getElementById("calc-slope");
    const calcWave = document.getElementById("calc-wave");
    const btnCalculate = document.getElementById("btn-calculate-cvi");
    
    const resultCard = document.getElementById("calc-result");
    const resultBadge = document.getElementById("calc-result-badge");
    const resultScore = document.getElementById("calc-score-val");
    const resultDesc = document.getElementById("calc-result-desc");

    btnCalculate.addEventListener("click", () => {
        const geom = parseInt(calcGeom.value);
        const erosion = parseInt(calcErosion.value);
        const slope = parseInt(calcSlope.value);
        const wave = parseInt(calcWave.value);

        // Standard simplified formula for CVI: sqrt( (a*b*c*d)/4 )
        const product = geom * erosion * slope * wave;
        const score = Math.sqrt(product / 4);

        resultScore.innerText = score.toFixed(1);

        // Reset badge classes
        resultBadge.className = "cvi-badge-large";

        if (score >= 3.8) {
            resultBadge.classList.add("high");
            resultBadge.innerText = "Kerentanan Tinggi";
            resultDesc.innerText = "Pesisir pantai sangat terdedah kepada hakisan kritikal dan kerosakan struktur fizikal berhampiran garis pantai akibat parameter ombak besar dan geomorfologi berpasir/lumpur landai.";
        } else if (score >= 2.5) {
            resultBadge.classList.add("medium");
            resultBadge.innerText = "Kerentanan Sederhana";
            resultDesc.innerText = "Tahap pendedahan pantai stabil dengan kadar hakisan bermusim yang boleh dikawal secara semula jadi oleh pembentukan gumuk pasir.";
        } else {
            resultBadge.classList.add("low");
            resultBadge.innerText = "Kerentanan Rendah";
            resultDesc.innerText = "Pantai kukuh yang dilindungi oleh struktur geologi batuan keras atau sistem benteng pertahanan tegar (hard engineering). Tiada ancaman hakisan terdekat.";
        }

        resultCard.style.display = "block";
    });
}

// Crowdsourced Report Modals & Submissions
function openReportModal(lat, lng) {
    const modal = document.getElementById("report-modal");
    document.getElementById("modal-coords").innerText = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    
    // Clear form inputs
    document.getElementById("report-form").reset();
    
    modal.classList.add("active");
}

function closeReportModal() {
    const modal = document.getElementById("report-modal");
    modal.classList.remove("active");
}

function setupReportForm() {
    const btnClose = document.getElementById("btn-close-modal");
    const btnCancel = document.getElementById("btn-cancel-report");
    const reportForm = document.getElementById("report-form");

    btnClose.addEventListener("click", closeReportModal);
    btnCancel.addEventListener("click", closeReportModal);

    reportForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("report-name").value.trim();
        const type = document.getElementById("report-type").value;
        const severity = document.querySelector('input[name="severity"]:checked').value;
        const desc = document.getElementById("report-desc").value.trim();

        if (!clickedLatLng) return;

        const newReport = {
            id: Date.now(),
            reporter: name,
            type: type,
            severity: severity,
            desc: desc,
            coords: [clickedLatLng.lat, clickedLatLng.lng],
            date: new Date().toISOString().split('T')[0]
        };

        // Add to reports array
        communityReports.unshift(newReport);

        // Re-render report markers and list
        renderCommunityReportMarkers();
        renderReportsList();
        closeReportModal();

        // Automatically switch to reports tab to show new report
        document.querySelector('[data-tab="reports-tab"]').click();
        
        // Minor toast/notification
        alert(`Laporan aduan ${type} berjaya dihantar dan dipetakan. Terima kasih atas maklumat anda!`);
    });
}

// Render the reports list in the sidebar panel
function renderReportsList() {
    const listContainer = document.getElementById("reports-list");
    listContainer.innerHTML = "";

    if (communityReports.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-reports">
                <i class="fa-solid fa-clipboard-list"></i>
                <p>Tiada laporan komuniti aktif. Klik pada peta untuk mula melaporkan.</p>
            </div>
        `;
        return;
    }

    communityReports.forEach(rep => {
        const card = document.createElement("div");
        card.className = "report-card";
        
        let sevClass = "rendah";
        if (rep.severity === "Tinggi") sevClass = "tinggi";
        else if (rep.severity === "Sederhana") sevClass = "sederhana";

        card.innerHTML = `
            <div class="report-card-header">
                <span class="report-card-title">${rep.type}</span>
                <span class="report-sev-dot ${sevClass}">${rep.severity}</span>
            </div>
            <p class="report-card-desc">${rep.desc}</p>
            <div class="report-card-footer">
                <span>Pengadu: <strong>${rep.reporter}</strong></span>
                <span>Tarikh: ${rep.date}</span>
            </div>
        `;

        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            map.flyTo(rep.coords, 14, {
                animate: true,
                duration: 1.5
            });

            // Find corresponding report marker and open popup
            const markerIndex = communityReports.findIndex(r => r.id === rep.id);
            if (markerIndex !== -1 && reportMarkers[markerIndex]) {
                setTimeout(() => {
                    reportMarkers[markerIndex].openPopup();
                }, 1500);
            }
        });

        listContainer.appendChild(card);
    });
}

// Basemap state variable
let currentBasemap = "portal"; // 'portal', 'osm', or 'satellite'

// Update map tiles dynamically based on theme and selected basemap style
function updateMapTiles() {
    if (!map || !tileLayer) return;

    map.removeLayer(tileLayer);

    const isLight = document.body.classList.contains("light-theme");
    let url = "";
    let attribution = "";

    if (currentBasemap === "portal") {
        url = isLight 
            ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
        attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
    } else if (currentBasemap === "osm") {
        url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    } else if (currentBasemap === "satellite") {
        url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
    }

    tileLayer = L.tileLayer(url, {
        attribution: attribution,
        maxZoom: 20
    }).addTo(map);
}

// Setup Basemap Switcher (Portal theme vs OSM vs Esri Satellite)
function setupBasemapSelector() {
    const buttons = document.querySelectorAll(".basemap-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetBasemap = btn.getAttribute("data-basemap");

            // Toggle active visual states
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentBasemap = targetBasemap;
            updateMapTiles();
        });
    });
}

// Setup Theme Toggle logic (Dark vs Bright Mode)
function setupThemeToggle() {
    const btnTheme = document.getElementById("btn-theme-toggle");

    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");

        // Toggle icon visual
        if (isLight) {
            btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
            btnTheme.setAttribute("title", "Tukar Tema Gelap");
        } else {
            btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
            btnTheme.setAttribute("title", "Tukar Tema Terang");
        }

        // Dynamically update tiles
        updateMapTiles();

        // Re-render spatial components to apply color contrast adjustments
        renderSpatialLayers();
        renderCommunityReportMarkers();
    });
}

// Setup Sidebar Toggle logic (Expand / Collapse drawer)
function setupSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");
    const btnToggle = document.getElementById("btn-sidebar-toggle");

    if (btnToggle && sidebar) {
        btnToggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");

            // Leaflet needs to recalculate container bounds after css transition ends
            setTimeout(() => {
                if (map) {
                    map.invalidateSize({ animate: true });
                }
            }, 350); // 350ms ensures transition completes smoothly
        });
    }
}

// App bootstrapping
window.addEventListener("DOMContentLoaded", () => {
    initMap();
    renderLocationCards();
    setupSearchAutocomplete();
    setupTabNavigation();
    setupLayerToggles();
    setupCviCalculator();
    setupReportForm();
    renderReportsList();
    runLiveHudSimulation();
    setupThemeToggle();
    setupBasemapSelector();
    setupSidebarToggle();
});
