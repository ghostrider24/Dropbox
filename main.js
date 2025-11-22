<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal Product Manager - Media Workflows | Dropbox</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
    <script src="https://unpkg.com/splitting@1.0.6/dist/splitting.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/splitting@1.0.6/dist/splitting.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --dropbox-blue: #007EE5;
            --deep-charcoal: #2C3E50;
            --warm-gray: #7F8C8D;
            --muted-teal: #16A085;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            min-height: 100vh;
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, rgba(0,126,229,0.1) 0%, rgba(44,62,80,0.05) 100%);
        }
        
        .text-gradient {
            background: linear-gradient(135deg, var(--deep-charcoal) 0%, var(--dropbox-blue) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
            transform: translateY(-8px) rotateX(5deg);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .role-category {
            cursor: pointer;
            border-left: 4px solid transparent;
            transition: all 0.3s ease;
        }
        
        .role-category.active {
            border-left-color: var(--dropbox-blue);
            background: rgba(0,126,229,0.05);
        }
        
        .content-panel {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        
        .content-panel.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .floating-element {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .typing-cursor {
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <div class="text-2xl font-bold text-gray-900">Dropbox</div>
                    <div class="hidden md:flex space-x-6">
                        <a href="index.html" class="text-gray-900 font-medium">Overview</a>
                        <a href="role.html" class="text-gray-600 hover:text-gray-900 transition-colors">Role Details</a>
                        <a href="apply.html" class="text-gray-600 hover:text-gray-900 transition-colors">Apply</a>
                        <a href="culture.html" class="text-gray-600 hover:text-gray-900 transition-colors">Culture</a>
                    </div>
                </div>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 hero-gradient">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            <span class="text-gradient" id="hero-title">Principal Product Manager</span>
                        </h1>
                        <div class="text-xl text-gray-600">
                            <span id="hero-subtitle"></span><span class="typing-cursor">|</span>
                        </div>
                    </div>
                    
                    <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>Shape the future of media collaboration at Dropbox. Lead cross-functional teams to build transformative products that make work more intuitive and joyful for millions worldwide.</p>
                        <p>Join our Virtual First community where bold visionaries and resourceful doers design more enlightened ways of working.</p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium">
                            Explore Role
                        </button>
                        <button class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-all font-medium">
                            Take Culture Quiz
                        </button>
                    </div>
                </div>
                
                <div class="relative">
                    <div class="floating-element">
                        <img src="resources/hero-main.png" alt="Media collaboration workspace" class="w-full h-auto rounded-2xl shadow-2xl">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Role Explorer -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Discover Your Impact</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore different aspects of the Principal Product Manager role and see how your expertise aligns with our mission to design a more enlightened way of working.</p>
            </div>
            
            <div class="grid lg:grid-cols-4 gap-8">
                <!-- Left Panel - Role Categories -->
                <div class="lg:col-span-1">
                    <div class="space-y-4">
                        <div class="role-category p-6 rounded-xl bg-white shadow-sm border active" data-category="overview">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Overview</h3>
                                    <p class="text-sm text-gray-600">Role essence</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="role-category p-6 rounded-xl bg-white shadow-sm border" data-category="responsibilities">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Responsibilities</h3>
                                    <p class="text-sm text-gray-600">What you'll own</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="role-category p-6 rounded-xl bg-white shadow-sm border" data-category="requirements">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Requirements</h3>
                                    <p class="text-sm text-gray-600">What you bring</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="role-category p-6 rounded-xl bg-white shadow-sm border" data-category="culture">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Culture</h3>
                                    <p class="text-sm text-gray-600">How we work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Panel - Content Display -->
                <div class="lg:col-span-3">
                    <div class="content-panel active" id="overview-content">
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Role Overview</h3>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <p class="text-lg text-gray-700 leading-relaxed">As a Principal Product Manager focused on media workflows and collaboration, you'll be at the forefront of shaping how creative teams work together in the digital age.</p>
                                    <p class="text-gray-600">You'll own the product roadmap for media collaboration workflows including Dropbox Replay, working closely with engineering, design, and business strategy teams to deliver measurable impact at scale.</p>
                                </div>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="text-2xl font-bold text-blue-600">10+</div>
                                        <div class="text-sm text-gray-600">Years of PM experience</div>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="text-2xl font-bold text-green-600">Global</div>
                                        <div class="text-sm text-gray-600">Cross-functional teams</div>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div class="text-2xl font-bold text-purple-600">C-Suite</div>
                                        <div class="text-sm text-gray-600">Leadership exposure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-panel" id="responsibilities-content">
                        <div class="space-y-6">
                            <h3 class="text-2xl font-bold text-gray-900">Key Responsibilities</h3>
                            <div class="grid gap-4">
                                <div class="card-hover bg-white p-6 rounded-xl border">
                                    <div class="flex items-start space-x-4">
                                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900 mb-2">Product Strategy & Vision</h4>
                                            <p class="text-gray-600">Own and drive the end-to-end product roadmap for media collaboration workflows including Dropbox Replay, defining the future of creative collaboration.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-hover bg-white p-6 rounded-xl border">
                                    <div class="flex items-start space-x-4">
                                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900 mb-2">Data-Driven Decisions</h4>
                                            <p class="text-gray-600">Define, track, and analyze key product metrics to measure success and inform strategic decisions that drive business impact.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-hover bg-white p-6 rounded-xl border">
                                    <div class="flex items-start space-x-4">
                                        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900 mb-2">Cross-Functional Leadership</h4>
                                            <p class="text-gray-600">Collaborate with engineering, design, marketing, and business teams to align on goals and deliverables, driving consensus at all levels.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-panel" id="requirements-content">
                        <div class="space-y-6">
                            <h3 class="text-2xl font-bold text-gray-900">Requirements & Qualifications</h3>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <h4 class="font-semibold text-gray-900 text-lg">Required Experience</h4>
                                    <ul class="space-y-3">
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">10+ years of product management experience</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Ownership of major product initiatives end-to-end</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Strong analytical and metrics-driven approach</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Cross-functional team leadership</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="font-semibold text-gray-900 text-lg">Preferred Qualifications</h4>
                                    <ul class="space-y-3">
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Advanced degree in relevant field</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">High-growth tech company experience</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Media platform technical knowledge</span>
                                        </li>
                                        <li class="flex items-start space-x-3">
                                            <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span class="text-gray-600">Mentoring or leading other PMs</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-panel" id="culture-content">
                        <div class="space-y-6">
                            <h3 class="text-2xl font-bold text-gray-900">Our Culture & Values</h3>
                            <div class="grid md:grid-cols-3 gap-6">
                                <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                    <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <h4 class="font-semibold text-gray-900 mb-2">Make Work Human</h4>
                                    <p class="text-sm text-gray-600">Design compassionate culture and products that prioritize human needs and well-being.</p>
                                </div>
                                
                                <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                    <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                    </div>
                                    <h4 class="font-semibold text-gray-900 mb-2">Keep It Simple</h4>
                                    <p class="text-sm text-gray-600">Eliminate work about work. Build products that do a few things really well.</p>
                                </div>
                                
                                <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                                    <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                        </svg>
                                    </div>
                                    <h4 class="font-semibold text-gray-900 mb-2">Be Worthy of Trust</h4>
                                    <p class="text-sm text-gray-600">Integrity is our foundation. We protect data and maintain the highest security standards.</p>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-6 rounded-xl">
                                <h4 class="font-semibold text-gray-900 mb-3">Virtual First Principles</h4>
                                <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                                    <div>• Everything is a prototype</div>
                                    <div>• Go async by default</div>
                                    <div>• Make (virtual) work human</div>
                                    <div>• Design for joy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Matcher Preview -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Quick Skills Assessment</h2>
                <p class="text-lg text-gray-600">See how your experience aligns with this role</p>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-4">Select your experience level</h3>
                        <div class="space-y-3">
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="w-5 h-5 text-blue-600 rounded">
                                <span class="text-gray-700">Product Management (10+ years)</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="w-5 h-5 text-blue-600 rounded">
                                <span class="text-gray-700">Media/Creative Industry</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="w-5 h-5 text-blue-600 rounded">
                                <span class="text-gray-700">Cross-functional Leadership</span>
                            </label>
                            <label class="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" class="w-5 h-5 text-blue-600 rounded">
                                <span class="text-gray-700">Data-Driven Decision Making</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-center">
                        <div class="text-center">
                            <div class="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-blue-600" id="match-score">0%</div>
                                    <div class="text-sm text-gray-600">Match</div>
                                </div>
                            </div>
                            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Complete Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold text-white mb-6">Ready to Shape the Future of Work?</h2>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join Dropbox as a Principal Product Manager and help us design more enlightened ways of working for millions of people worldwide.</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium">
                    Start Application
                </button>
                <button class="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all font-medium">
                    Learn More About Culture
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center">
                <div class="text-2xl font-bold mb-4">Dropbox</div>
                <p class="text-gray-400 mb-6">Designing a more enlightened way of working</p>
                <div class="text-sm text-gray-500">
                    © 2024 Dropbox, Inc. All rights reserved.
                </div>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>