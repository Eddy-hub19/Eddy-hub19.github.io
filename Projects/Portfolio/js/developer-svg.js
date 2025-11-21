// Animated Developer SVG Generator
function createDeveloperSVG() {
    return `
<svg class="developer-illustration" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.8" />
        </linearGradient>
        
        <linearGradient id="codeLines" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#22c55e;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#22c55e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0" />
            <animate attributeName="x1" values="-100%;100%" dur="3s" repeatCount="indefinite" />
            <animate attributeName="x2" values="0%;200%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
        
        <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    
    <!-- Background circles -->
    <circle cx="100" cy="80" r="60" fill="rgba(102, 126, 234, 0.1)">
        <animate attributeName="r" values="60;70;60" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite"/>
    </circle>
    
    <circle cx="400" cy="320" r="80" fill="rgba(118, 75, 162, 0.1)">
        <animate attributeName="r" values="80;90;80" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="5s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Laptop -->
    <g class="laptop">
        <!-- Laptop base -->
        <rect x="120" y="240" width="260" height="15" rx="5" fill="#2d3748" opacity="0.8"/>
        
        <!-- Laptop screen -->
        <rect x="150" y="120" width="200" height="130" rx="5" fill="#1a202c" stroke="#4a5568" stroke-width="3"/>
        
        <!-- Screen content -->
        <rect x="160" y="130" width="180" height="110" rx="3" fill="url(#screenGlow)" opacity="0.3"/>
        
        <!-- Code lines -->
        <g class="code-lines">
            <!-- Line 1 -->
            <rect x="170" y="145" width="120" height="3" fill="#22c55e" opacity="0.8">
                <animate attributeName="width" values="0;120;120" dur="2s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Line 2 -->
            <rect x="170" y="160" width="90" height="3" fill="#3b82f6" opacity="0.8">
                <animate attributeName="width" values="0;90;90" dur="2s" begin="0.3s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Line 3 -->
            <rect x="170" y="175" width="140" height="3" fill="#8b5cf6" opacity="0.8">
                <animate attributeName="width" values="0;140;140" dur="2s" begin="0.6s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Line 4 -->
            <rect x="170" y="190" width="80" height="3" fill="#f59e0b" opacity="0.8">
                <animate attributeName="width" values="0;80;80" dur="2s" begin="0.9s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Line 5 -->
            <rect x="170" y="205" width="110" height="3" fill="#ec4899" opacity="0.8">
                <animate attributeName="width" values="0;110;110" dur="2s" begin="1.2s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Line 6 -->
            <rect x="170" y="220" width="95" height="3" fill="#06b6d4" opacity="0.8">
                <animate attributeName="width" values="0;95;95" dur="2s" begin="1.5s" repeatCount="indefinite"/>
            </rect>
        </g>
        
        <!-- Cursor blink -->
        <rect x="290" y="220" width="8" height="3" fill="#22c55e" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        </rect>
    </g>
    
    <!-- Floating code symbols -->
    <g class="floating-symbols" opacity="0.6">
        <!-- HTML tag -->
        <text x="80" y="180" font-family="monospace" font-size="20" fill="#e34c26">
            &lt;/&gt;
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-20; 0,0" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
        </text>
        
        <!-- CSS brackets -->
        <text x="380" y="140" font-family="monospace" font-size="20" fill="#264de4">
            { }
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-15; 0,0" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
        </text>
        
        <!-- JS function -->
        <text x="390" y="240" font-family="monospace" font-size="18" fill="#f7df1e">
            fn( )
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-18; 0,0" dur="3.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
        </text>
        
        <!-- React logo style -->
        <circle cx="100" cy="280" r="8" fill="none" stroke="#61dafb" stroke-width="2">
            <animateTransform attributeName="transform" type="rotate" from="0 100 280" to="360 100 280" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="280" r="3" fill="#61dafb"/>
    </g>
    
    <!-- Particles -->
    <g class="particles">
        <circle cx="50" cy="150" r="2" fill="#667eea" opacity="0.5">
            <animate attributeName="cy" values="150;120;150" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="420" cy="200" r="2" fill="#764ba2" opacity="0.5">
            <animate attributeName="cy" values="200;170;200" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="70" cy="300" r="2" fill="#22c55e" opacity="0.5">
            <animate attributeName="cy" values="300;270;300" dur="3.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="430" cy="280" r="2" fill="#f59e0b" opacity="0.5">
            <animate attributeName="cy" values="280;250;280" dur="4.5s" repeatCount="indefinite"/>
        </circle>
    </g>
    
    <!-- Coffee cup -->
    <g class="coffee-cup" transform="translate(360, 260)">
        <rect x="0" y="10" width="30" height="25" rx="2" fill="#8b4513" opacity="0.8"/>
        <path d="M 30 20 Q 40 20 40 28 Q 40 35 30 35" fill="none" stroke="#8b4513" stroke-width="2" opacity="0.8"/>
        
        <!-- Steam -->
        <path d="M 8 5 Q 10 0 12 5" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6">
            <animate attributeName="d" values="M 8 5 Q 10 0 12 5;M 8 5 Q 10 8 12 5;M 8 5 Q 10 0 12 5" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 15 5 Q 17 0 19 5" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6">
            <animate attributeName="d" values="M 15 5 Q 17 8 19 5;M 15 5 Q 17 0 19 5;M 15 5 Q 17 8 19 5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </path>
    </g>
</svg>
    `;
}

// Insert SVG on page load
document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.querySelector('.hero-illustration');
    if (svgContainer && !svgContainer.querySelector('svg')) {
        svgContainer.innerHTML = createDeveloperSVG();
    }
});

