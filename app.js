// Sample Blog Posts Database
const posts = [
    {
        id: 1,
        title: "Mastering JavaScript Array Methods",
        slug: "mastering-javascript-array-methods",
        author: "Tunde Adebayo",
        category: "article",
        subCategory: "word", 
        tags: ["JavaScript", "ES6", "Tutorial"],
        excerpt: "Learn how to use map, filter, reduce and other powerful array methods to write cleaner, more efficient JavaScript code.",
        content: `
            <p>JavaScript array methods are essential tools for modern web development. In this comprehensive guide, we'll explore the most important array methods that every developer should know.</p>
            
            <h3>The Big Three: Map, Filter, Reduce</h3>
            <p>These three methods form the foundation of functional programming in JavaScript. They allow you to transform, filter, and aggregate data with ease.</p>
            
            <h3>Map - Transform Every Element</h3>
            <p>The map method creates a new array by transforming each element. It's perfect for converting data from one format to another.</p>
            
            <h3>Filter - Select What You Need</h3>
            <p>Filter creates a new array containing only elements that pass a test. It's ideal for searching and filtering data.</p>
            
            <h3>Reduce - Combine Into One</h3>
            <p>Reduce is the most powerful array method. It can combine all array elements into a single value - whether that's a number, string, object, or even another array.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
        publishedDate: "2024-01-15",
        readTime: 8,
        views: 1234,
        featured: false
    },
    {
        id: 2,
        title: "JavaScript: The Definitive Guide (7th Edition)",
        slug: "javascript-definitive-guide",
        author: "David Flanagan",
        category: "book",
        tags: ["JavaScript", "Reference", "Book"],
        excerpt: "The comprehensive reference guide for JavaScript developers. Covers everything from basics to advanced topics.",
        content: `
            <p>This comprehensive guide has been the go-to resource for JavaScript developers for over two decades.</p>
            <h3>What's Inside:</h3>
            <ul>
                <li>Core JavaScript language features</li>
                <li>ES6, ES7, ES8 and beyond</li>
                <li>Asynchronous programming</li>
                <li>Modules and namespaces</li>
                <li>And much more!</li>
            </ul>
        `,
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
        price: 15000,
        inStock: true,
        publishedDate: "2023-11-20",
        rating: 4.8,
        pages: 706,
        featured: true
    },
    {
        id: 3,
        title: "Building Real-World Applications with React",
        slug: "building-apps-with-react",
        author: "Ada Okafor",
        category: "article",
        subCategory: "lifestyle",
        tags: ["React", "JavaScript", "Web Development"],
        excerpt: "A practical guide to building production-ready React applications with hooks, context, and modern patterns.",
        content: `
            <p>React has become the most popular library for building user interfaces. This guide will teach you how to build real-world applications.</p>
            <h3>Topics Covered:</h3>
            <p>We'll cover component design, state management, routing, API integration, and deployment strategies.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        publishedDate: "2024-02-10",
        readTime: 12,
        views: 2890,
        featured: false
    },
    {
        id: 4,
        title: "JavaScript Crash Course - Complete Tutorial",
        slug: "js-crash-course-video",
        author: "CodeWithMosh",
        category: "video",
        tags: ["JavaScript", "Tutorial", "Beginner"],
        excerpt: "Complete JavaScript tutorial for beginners. Learn everything from variables to async/await in one comprehensive video.",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        duration: "2:30:00",
        publishedDate: "2024-02-01",
        views: 45000,
        featured: true
    },
    {
        id: 5,
        title: "Eloquent JavaScript (4th Edition)",
        slug: "eloquent-javascript",
        author: "Marijn Haverbeke",
        category: "book",
        tags: ["JavaScript", "Programming", "Book"],
        excerpt: "A modern introduction to programming with JavaScript. Perfect for beginners and intermediate developers.",
        content: `
            <p>Eloquent JavaScript teaches you to write beautiful, effective code through engaging examples and challenging exercises.</p>
            <h3>Why This Book?</h3>
            <p>It goes beyond syntax to teach you how to think like a programmer.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
        price: 12000,
        inStock: true,
        publishedDate: "2023-12-05",
        rating: 4.9,
        pages: 472,
        featured: false
    },
    {
        id: 6,
        title: "Understanding Asynchronous JavaScript",
        slug: "understanding-async-js",
        author: "Chidi Nwosu",
        category: "article",
        subCategory: "marriage", 
        tags: ["JavaScript", "Async", "Promises"],
        excerpt: "Deep dive into callbacks, promises, and async/await. Master asynchronous programming in JavaScript.",
        content: `
            <p>Asynchronous programming is one of the most important concepts in JavaScript. This article breaks it down step by step.</p>
            <h3>From Callbacks to Async/Await</h3>
            <p>We'll trace the evolution of async patterns in JavaScript and show you the best practices for 2024.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        publishedDate: "2024-01-28",
        readTime: 15,
        views: 3200,
        featured: false
    },
    {
        id: 7,
        title: "The JavaScript Podcast - Episode 42: ES6 Features",
        slug: "js-podcast-es6",
        author: "JS Party",
        category: "audio",
        tags: ["JavaScript", "ES6", "Podcast"],
        excerpt: "Join us as we discuss the most important ES6 features and how they've changed JavaScript development.",
        audioUrl: "https://example.com/podcast-es6.mp3",
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
        duration: "45:00",
        publishedDate: "2024-01-25",
        views: 8900,
        featured: false
    },
    {
        id: 8,
        title: "Next.js 14 - Complete Developer Guide",
        slug: "nextjs-14-guide-video",
        author: "Traversy Media",
        category: "video",
        tags: ["Next.js", "React", "Tutorial"],
        excerpt: "Learn Next.js 14 from scratch. Build full-stack applications with the latest features including Server Components and Actions.",
        videoUrl: "https://www.youtube.com/embed/example",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        duration: "3:15:00",
        publishedDate: "2024-02-05",
        views: 52000,
        featured: true
    },
    {
        id: 9,
        title: "You Don't Know JS Yet (Book Series)",
        slug: "you-dont-know-js",
        author: "Kyle Simpson",
        category: "book",
        tags: ["JavaScript", "Deep Dive", "Book"],
        excerpt: "The definitive deep dive into JavaScript. This series covers scope, closures, objects, prototypes, and more.",
        content: `
            <p>Go beyond surface-level understanding and truly master JavaScript with this acclaimed book series.</p>
            <h3>Complete Series Includes:</h3>
            <ul>
                <li>Get Started</li>
                <li>Scope & Closures</li>
                <li>Objects & Classes</li>
                <li>Types & Grammar</li>
                <li>Sync & Async</li>
                <li>ES.Next & Beyond</li>
            </ul>
        `,
        thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
        price: 25000,
        inStock: true,
        publishedDate: "2023-10-15",
        rating: 5.0,
        pages: 1200,
        featured: true
    },
    {
        id: 10,
        title: "CSS Grid vs Flexbox: When to Use Each",
        slug: "css-grid-vs-flexbox",
        author: "Ngozi Eze",
        category: "article",
        subCategory: "parenting",
        tags: ["CSS", "Layout", "Web Design"],
        excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each for optimal layouts.",
        content: `
            <p>Both Grid and Flexbox are powerful layout tools, but they excel in different scenarios.</p>
            <h3>Flexbox: One-Dimensional Layouts</h3>
            <p>Perfect for navigation bars, card layouts, and centering content.</p>
            <h3>Grid: Two-Dimensional Layouts</h3>
            <p>Ideal for page layouts, image galleries, and complex designs.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
        publishedDate: "2024-02-08",
        readTime: 6,
        views: 1560,
        featured: false
    },
    {
        id: 11,
        title: "Web Development Podcast - Career Tips for Junior Devs",
        slug: "webdev-podcast-career-tips",
        author: "Syntax FM",
        category: "audio",
        tags: ["Career", "Web Development", "Podcast"],
        excerpt: "Practical advice for junior developers looking to advance their careers and build impressive portfolios.",
        audioUrl: "https://example.com/career-tips.mp3",
        thumbnail: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800",
        duration: "52:00",
        publishedDate: "2024-02-12",
        views: 6700,
        featured: false
    },
    {
        id: 12,
        title: "TypeScript for JavaScript Developers",
        slug: "typescript-for-js-devs-video",
        author: "Net Ninja",
        category: "video",
        tags: ["TypeScript", "JavaScript", "Tutorial"],
        excerpt: "Make the transition from JavaScript to TypeScript. Learn types, interfaces, generics, and more.",
        videoUrl: "https://www.youtube.com/embed/example2",
        thumbnail: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800",
        duration: "1:45:00",
        publishedDate: "2024-01-20",
        views: 28000,
        featured: false
    }
];

// Load saved posts from localStorage
const loadPostsFromStorage = () => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
        try {
            const parsedPosts = JSON.parse(savedPosts);
            // Replace posts array with saved posts
            posts.length = 0; // Clear existing
            posts.push(...parsedPosts);
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }
};

// Initialize
loadPostsFromStorage();

// Application State
let currentSubCategory = 'all';
let currentFilter = 'all';
let currentSort = 'newest';
let searchTerm = '';
let cart = []; // For books shopping cart

// TODO: Your tasks start here!
const getPostByCategory = (category, postsArray) => category === 'all' ? postsArray : postsArray.filter(post => post.category === category);

const searchPost = (searchTerm, postsArray) => {
    const term = searchTerm.toLowerCase().trim();

    if(term === '') return postsArray;

    return postsArray.filter(({title, excerpt, author, tags}) => title.toLowerCase().includes(term) || excerpt.toLowerCase().includes(term) || author.toLowerCase().includes(term) || tags.some(tag => tag.toLowerCase().includes(term)));
};

const getFeaturedPosts = () => posts.filter(({featured}) => featured);

const sortPosts = (postsArray, sortType) => {
    const copyPosts = [...postsArray];

    if (sortType === 'newest') return copyPosts.sort((a,b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    else if ( sortType === 'oldest') return copyPosts.sort((a,b) => new Date(a.publishedDate) - new Date(b.publishedDate));

    else if (sortType === 'popular') return copyPosts.sort((a,b) => b.views - a.views );

    else if (sortType === 'title') return copyPosts.sort((a,b) => a.title.localeCompare(b.title));

    else return copyPosts;

};

const createPostCardHtml = ({id, title, slug, author, category, excerpt,thumbnail, publishedDate, price, duration, readTime, views, rating, featured, subCategory}) => {
    if (category === 'article') {
        
        return `
        <div class="post-card" onclick="viewPost('${slug}')">
            <div class="post-thumbnail-wrapper">
                ${featured ? '<span class="featured-badge">Featured</span>' : ''}
                <img src="${thumbnail}" alt="${title}" class="post-thumbnail" />
                ${subCategory ? `<span class="subcategory-badge">${subCategory}</span>` : ''}
            </div>

            <div class="post-content">
            <span class="post-category article">Article</span>

            <h3 class="post-title">${title}</h3>

            <div class="post-meta">
                <span class="post-author">👤 ${author}</span>
                <span class="post-date">📅 ${publishedDate}</span>
            </div>

            <p class="post-excerpt">${excerpt}</p>

            <div class="post-footer">
                <div class="post-stats">
                <span>⏱ ${readTime} min</span>
                <span>👁 ${views}</span>
                </div>
            </div>

            <button class="read-more-btn">Read More</button>
            </div>
        </div>
        `;
    }
    else if (category === 'book') {
        return `
        <div class="post-card" onclick="viewPost('${slug}')">
            <div class="post-thumbnail-wrapper">
                ${featured ? '<span class="featured-badge">Featured</span>' : ''}
                <img src="${thumbnail}" alt="${title}" class="post-thumbnail" />
            </div>

            <div class="post-content">
                <span class="post-category book">Book</span>

                <h3 class="post-title">${title}</h3>

                <div class="post-meta">
                    <span class="post-author">👤 ${author}</span>
                    <span class="post-date">📅 ${publishedDate}</span>
                </div>

                <p class="post-excerpt">${excerpt}</p>

                <div class="book-price">₦${price.toLocaleString()}</div>

                <div class="book-rating">
                    ⭐ ${rating} / 5.0
                </div>

                <button 
                    class="add-to-cart-btn" 
                    onclick="addToCart(${id}); event.stopPropagation();"
                >
                    🛒 Add to Cart
                </button>
            </div>
        </div>
        `;
    }
    else if (category === 'video' || category === 'audio') {
        return `
        <div class="post-card" onclick="viewPost('${slug}')">
            <div class="post-thumbnail-wrapper">
                ${featured ? '<span class="featured-badge">Featured</span>' : ''}
                <img src="${thumbnail}" alt="${title}" class="post-thumbnail" />
                <span class="duration-badge">⏱️ ${duration}</span>
            </div>

            <div class="post-content">
            <span class="post-category ${category}">${category}</span>

            <h3 class="post-title">${title}</h3>

            <div class="post-meta">
                <span class="post-author">👤 ${author}</span>
                <span class="post-date">📅 ${publishedDate}</span>
            </div>

            <p class="post-excerpt">${excerpt}</p>

            <div class="post-footer">
                <div class="post-stats">
                <span>👁 ${views.toLocaleString()}</span>
                </div>
            </div>

            <button class="read-more-btn">${category === 'video' ? '▶️ Watch Now' : '🎧 Listen Now'}</button>
            </div>
        </div>
        `;
    };
};

const renderPosts = () => {
    let result = posts;
    result = getPostByCategory(currentFilter, result);

    // Apply subcategory filter (only relevant for articles)
    if (currentSubCategory !== 'all') {
        result = result.filter(post => post.subCategory === currentSubCategory);
    }

    if(searchTerm && searchTerm.trim() !== '') {
        result = searchPost(searchTerm, result);
    }
    result = sortPosts(result, currentSort);

    const displayPost = document.getElementById('posts-grid');
    const html = result.map(post => createPostCardHtml(post)).join('');

    displayPost.innerHTML = html;

    const displayEmptyState = document.getElementById('empty-state');
    if( result.length === 0 ) {
        displayEmptyState.style.display = 'block';
        displayPost.style.display = 'none';
    }
    else{
        displayEmptyState.style.display = 'none';
        displayPost.style.display = 'grid';
    }

    updateStats(result)
};

const updateStats = (postsArray) => {
    const totalPosts = postsArray.length;
    const totalArticles = postsArray.filter(post => post.category === 'article').length;
    const totalBooks = postsArray.filter(post => post.category === 'book').length;
    const totalVideos = postsArray.filter(post => post.category === 'video').length;

    document.getElementById('total-posts').textContent = totalPosts;
    document.getElementById('total-articles').textContent = totalArticles;
    document.getElementById('total-books').textContent = totalBooks;
    document.getElementById('total-videos').textContent = totalVideos;

};

const filterByCategory = (category, clickedbtn) => {
    currentFilter = category;
    currentSubCategory = 'all'; // reset subcategory when switching main filter

    const allFilterbtns = document.getElementsByClassName('filter-btn');
    for (let btn of allFilterbtns) {
        btn.classList.remove('active');
    }
    clickedbtn.classList.add('active');

    // Show subcategory buttons only for articles
    const subCatButtons = document.getElementById('subcategory-buttons');
    if (subCatButtons) {
        subCatButtons.style.display = category === 'article' ? 'flex' : 'none';
    }

    // Reset subcategory button to 'All Articles'
    const allSubBtns = document.getElementsByClassName('subcategory-btn');
    for (let btn of allSubBtns) {
        btn.classList.remove('active');
    }
    if (allSubBtns[0]) allSubBtns[0].classList.add('active');

    renderPosts();
};

const handleSearch = (value) => {
    searchTerm = value;
    renderPosts();
};

const handleSort = (value) => {
    currentSort = value;
    renderPosts();
};

const findBookById = (bookId) => posts.find(post => post.id === bookId);

const findCartItem = (bookId) => {
    return cart.find(item => item.book.id === bookId);
};
// i added a toast and i added this to my html just before the body tag <div id="toast" class="toast"></div>

const showToast = (message) => {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
};

const addToCart = (bookId) => {
    const findBook = findBookById(bookId);
    if (!findBook || !findBook.inStock) return;
    const existingBook = findCartItem(bookId);
    if(existingBook) {
        cart = cart.map(item => item.book.id === bookId ? {...item, quantity:item.quantity + 1} : item );
    }
    else {
        cart = [ ...cart, {book: findBook, quantity: 1}]
    }
    renderCart();
    updateCartCount();

    showToast(`${findBook.title} added to cart 🛒`);

};

const updateQuantity = (bookId, newQuantity) => {
    if(newQuantity <= 0) {
        removeFromCart(bookId);
        return;
    }
    cart = cart.map(item => item.book.id === bookId ? {...item, quantity:newQuantity}: item);
    renderCart();
    updateCartCount();
};

const removeFromCart = (bookId) => {
    cart = cart.filter(item => item.book.id !== bookId);
    renderCart();
    updateCartCount();
}

const calculateCartTotals = () => {
    if (cart.length === 0) {
        return { subtotal: 0, tax: 0, total: 0}
    }
    const subtotal = cart.reduce((total, {book, quantity}) => total + (book.price * quantity), 0);
    const tax = subtotal * 0.075;
    const total = subtotal + tax;
    return { subtotal, tax, total };
};

const formatCurrency = (number) => `₦${(number ?? 0).toLocaleString('en-NG')}`

const createCartItemHTML = ( {book, quantity} ) => {
    const {id, title, price, thumbnail} = book;
    const itemTotal = price * quantity;
    
    return `
        <div class="cart-item">
            <img src="${thumbnail}" alt="${title}" class="cart-item-image" />
            <div class="cart-item-details">
                <div class="cart-item-name">${title}</div>
                <div class="cart-item-price">${formatCurrency(price)} each</div>
                
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${id}, ${quantity - 1})">-</button>
                    <span class="cart-item-quantity">${quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${id}, ${quantity + 1})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                
                <div class="cart-item-total">Total: ${formatCurrency(itemTotal)}</div>
            </div>
        </div>
    `;
};

const renderCart = () => {
    const emptyCart = document.getElementById('cart-empty');
    const cartItems = document.getElementById('cart-items'); 
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartItems.style.display = 'none';
    }
    else {
        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';
    };
    let html = cart.map(item => createCartItemHTML(item)).join('');
    cartItems.innerHTML = html;

    const totals = calculateCartTotals();
    const { subtotal, tax, total } = totals;
    document.getElementById('cart-subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('cart-tax').textContent = formatCurrency(tax);
    document.getElementById('cart-total').textContent = formatCurrency(total);

};

const updateCartCount = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = totalItems;
};

const toggleCart = () => {
    const cartSidebar = document.getElementById('cart-sidebar')
    cartSidebar.classList.toggle('active');
};

const createArticleViewHTML = (post) => {
    const { title, author, category, publishedDate, readTime, views, thumbnail, content, tags} = post;

    return `
        <div class="post-view-header">
            <span class="post-view-category ${category}">📝 ${category}</span>
            <h1 class="post-view-title">${title}</h1>
            
            <div class="post-view-meta">
                <div class="post-view-meta-item">
                    <span>✍️</span>
                    <span>${author}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>📅</span>
                    <span>${publishedDate}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>⏱</span>
                    <span>${readTime} min read</span>
                </div>
                <div class="post-view-meta-item">
                    <span>👁</span>
                    <span>${views.toLocaleString()} views</span>
                </div>
            </div>
        </div>
        
        <img src="${thumbnail}" alt="${title}" class="post-view-thumbnail" />
        
        <div class="post-view-content">
            ${content}
        </div>
        
        <div class="post-view-tags">
            ${tags.map(tag => `<span class="post-view-tag">#${tag}</span>`).join('')}
        </div>
    `;
};

const createBookViewHTMl = (post) => {
    const { id, title, author, category, publishedDate, thumbnail, content, tags, price, rating, pages, inStock } = post;
    
    return `
        <div class="post-view-header">
            <span class="post-view-category ${category}">📚 ${category}</span>
            <h1 class="post-view-title">${title}</h1>
            
            <div class="post-view-meta">
                <div class="post-view-meta-item">
                    <span>✍️</span>
                    <span>${author}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>📅</span>
                    <span>${publishedDate}</span>
                </div>
            </div>
        </div>
        
        <img src="${thumbnail}" alt="${title}" class="post-view-thumbnail" />
        
        <div class="book-view-info">
            <div class="book-view-price-section">
                <div class="book-view-price">${formatCurrency(price)}</div>
                <div class="book-view-rating">⭐ ${rating} / 5.0</div>
            </div>
            
            <div class="book-view-details">
                <div class="book-view-detail">
                    <div class="book-view-detail-label">Pages</div>
                    <div class="book-view-detail-value">${pages}</div>
                </div>
                <div class="book-view-detail">
                    <div class="book-view-detail-label">Author</div>
                    <div class="book-view-detail-value">${author}</div>
                </div>
                <div class="book-view-detail">
                    <div class="book-view-detail-label">Availability</div>
                    <div class="book-view-detail-value">${inStock ? '✅ In Stock' : '❌ Out of Stock'}</div>
                </div>
            </div>
            
            <div class="book-view-actions">
                <button class="book-buy-btn" onclick="addToCart(${id}); event.stopPropagation();">
                    🛒 Add to Cart - ${formatCurrency(price)}
                </button>
            </div>
        </div>
        
        <div class="post-view-content">
            ${content}
        </div>
        
        <div class="post-view-tags">
            ${tags.map(tag => `<span class="post-view-tag">#${tag}</span>`).join('')}
        </div>
    `;
};

const createVideoViewHTML = (post) => {
    const { title, author, category, publishedDate, duration, views, videoUrl, excerpt, tags } = post;
    
    return `
        <div class="post-view-header">
            <span class="post-view-category ${category}">🎥 ${category}</span>
            <h1 class="post-view-title">${title}</h1>
            
            <div class="post-view-meta">
                <div class="post-view-meta-item">
                    <span>👤</span>
                    <span>${author}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>📅</span>
                    <span>${publishedDate}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>⏱</span>
                    <span>${duration}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>👁</span>
                    <span>${views.toLocaleString()} views</span>
                </div>
            </div>
        </div>
        
        <iframe 
            class="video-player" 
            src="${videoUrl}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        
        <div class="post-view-content">
            <p>${excerpt}</p>
        </div>
        
        <div class="post-view-tags">
            ${tags.map(tag => `<span class="post-view-tag">#${tag}</span>`).join('')}
        </div>
    `;
};

const createAudioViewHTML = (post) => {
    const { title, author, category, publishedDate, duration, views, audioUrl, excerpt, tags, thumbnail } = post;
    
    return `
        <div class="post-view-header">
            <span class="post-view-category ${category}">🎧 ${category}</span>
            <h1 class="post-view-title">${title}</h1>
            
            <div class="post-view-meta">
                <div class="post-view-meta-item">
                    <span>👤</span>
                    <span>${author}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>📅</span>
                    <span>${publishedDate}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>⏱</span>
                    <span>${duration}</span>
                </div>
                <div class="post-view-meta-item">
                    <span>👁</span>
                    <span>${views.toLocaleString()} views</span>
                </div>
            </div>
        </div>
        
        <img src="${thumbnail}" alt="${title}" class="post-view-thumbnail" />
        
        <audio class="audio-player" controls>
            <source src="${audioUrl}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        
        <div class="post-view-content">
            <p>${excerpt}</p>
        </div>
        
        <div class="post-view-tags">
            ${tags.map(tag => `<span class="post-view-tag">#${tag}</span>`).join('')}
        </div>
    `;
};


//i am using showToast() and upgrade to alert()
const viewPost = (slug) => {
    const post = posts.find(post => post.slug === slug);
    if (!post) {
        showToast(`Post not found`);
        return;
    }

    let html = '';

    if (post.category === 'article') {
        html = createArticleViewHTML(post);
    }
    else if (post.category === 'book') {
        html = createBookViewHTMl(post);
    }
    else if (post.category === 'video') {
        html = createVideoViewHTML(post);
    }
    else if (post.category === 'audio') {
        html = createAudioViewHTML(post);
    }

    document.getElementById('post-modal-body').innerHTML = html;
    document.getElementById('post-modal').classList.add('active');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

};

const closePostModal = () => {
    document.getElementById('post-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
};

// CREATE POST FUNCTIONS //

const handleCategoryChange = (value) => {
    // All field section IDs
    const sections = [
        'article-fields',
        'book-fields',
        'video-fields',
        'audio-fields'
    ];
    // Hide all sections first
    for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    }
    // If no category selected, stop here
    if (!value) return;

    const targetElement = document.getElementById(`${value}-fields`);
    if (targetElement) {
        targetElement.style.display = 'block';
    }
};
// i dont know regex yet
const generateSlug = (title) => {
  return title
    .toLowerCase()                 //lowercase
    .trim()                        //remove extra spaces at start/end
    .replace(/\s+/g, '-')         //spaces → hyphens
    .replace(/[^a-z0-9-]/g, '')   //remove special characters
    .replace(/-+/g, '-');         //remove duplicate hyphens
};

const validateForm = (formData) => {
  const errors = [];

    const requiredFields = [
        'category',
        'title',
        'author',
        'excerpt',
        'thumbnail'
    ];

  for (let field of requiredFields) {
    if (!formData[field]) {
      errors.push(`${field} is required`);
    }
  };

  // Validate excerpt length
  if (formData.excerpt) {
    const length = formData.excerpt.trim().length;
    if (length < 50 || length > 300) {
      errors.push('Excerpt must be between 150 and 300 characters');
    }
  };

  // Validate tag count
  if (formData.tags) {
    const tagCount = formData.tags.length;
    if (tagCount < 2 || tagCount > 5) {
      errors.push('Please enter between 2 and 5 tags');
    }
  };

  if (!formData.category) {
    errors.push('Please select a category');
  } 
  else if (formData.category === 'article') {
    if (!formData.content) {
      errors.push('Article content is required');
    }
    if (!formData.readTime) {
      errors.push('Reading time is required');
    }
  } 
  else if (formData.category === 'book') {
    const bookFields = ['content', 'price', 'pages', 'rating'];
    for (const field of bookFields) {
      if (!formData[field]) {
        errors.push(`${field} is required for books`);
      }
    }
  } 
  else if (formData.category === 'video') {
    const videoFields = ['videoUrl', 'duration'];
    for (const field of videoFields) {
      if (!formData[field]) {
        errors.push(`${field} is required for videos`);
      }
    }
  } 
  else if (formData.category === 'audio') {
    const audioFields = ['audioUrl', 'duration'];
    for (const field of audioFields) {
      if (!formData[field]) {
        errors.push(`${field} is required for audio`);
      }
    }
  }

  // Return validation result
  return {
    valid: errors.length === 0,
    errors
  };
};

const getFormData = () => {
    // Get form values
  const category = document.getElementById('category').value;

  const rawTags = document.getElementById('tags').value;
  const tags = rawTags.split(',') // split by comma
  .map(tag => tag.trim()) // remove space
  .filter(tag => tag !== ''); // remove empty string

  const title = document.getElementById('title').value;
  const slug = generateSlug(title);

    // Construct post object
  const post = {
    id: posts.length + 1,
    category,
    title,
    author: document.getElementById('author').value.trim(),
    excerpt: document.getElementById('excerpt').value.trim(),
    tags,
    thumbnail:document.getElementById('thumbnail').value.trim(),
    featured: document.getElementById('featured').checked,
    slug,
    publishedDate: new Date().toLocaleDateString('en-CA'),
    views: 0

  };

  // category-specific fields
  if (category === 'article') {
    post.content = document.getElementById('content').value.trim();
    post.readTime = Number(document.getElementById('readTime').value);
    post.subCategory = document.getElementById('subCategory').value;
  }
  else if (category === 'book') {
    post.content = document.getElementById('book-content').value.trim();
    post.price = Number(document.getElementById('price').value);
    post.pages = Number(document.getElementById('pages').value);
    post.rating = Number(document.getElementById('rating').value);
    post.inStock = document.getElementById('inStock').checked;
  }
  else if (category === 'video') {
    post.videoUrl = document.getElementById('videoUrl').value.trim();
    post.duration = document.getElementById('video-duration').value.trim();
  }
  else if (category === 'audio') {
    post.audioUrl = document.getElementById('audioUrl').value.trim();
    post.duration = document.getElementById('audio-duration').value.trim();
  }

  return post;

  
};

const handleFormSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Get form data
    const formData = getFormData();

    // Validate form
    const { valid, errors } = validateForm(formData);

    // If invalid → show errors using for...of
   if (!valid) {
    showToast(errors[0]);
    console.log('Validation errors:', errors);
    return;
    }

    // 5. Add new post
    posts.push(formData);

    // 6. Save to localStorage, i dont understand this yet
    localStorage.setItem('posts', JSON.stringify(posts));

    // 7. Success message
    showToast('Post created successfully 🎉');

    // 8. Reset form
    const form = document.getElementById('create-post-form');
    form.reset();

    // Optional: reset category fields
    handleCategoryChange('');

    // 9. Redirect after 2 seconds, i dont understand this yet
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
};

const resetForm = () => {
  // Reset the form fields
  const form = document.getElementById('create-post-form');
  form.reset();

  // Hide all category-specific sections
  handleCategoryChange('');
  

  // Hide image preview
  const imagePreviewContainer = document.getElementById('image-preview-container');
  if (imagePreviewContainer) {
    imagePreviewContainer.style.display = 'none';
  }
};

const updateExcerptCount = () => {
  // Get the textarea and count display
  const textarea = document.getElementById('excerpt');
  const countDisplay = document.getElementById('excerpt-count');

  // Get current length
  const length = textarea.value.length;

  // Update the display text
  countDisplay.textContent = `${length} / 300 characters`;
  // I Add an oninput event to your excerpt textarea so it updates live as the user types

  // Change color based on length
  if (length < 150) {
    countDisplay.style.color = 'gray'; // normal
  } 
  else if (length <= 300) {
    countDisplay.style.color = 'green'; // success
  } 
  else {
    countDisplay.style.color = 'red'; // warning/error
  }
};

const previewThumbnail = () => {
  // Get the thumbnail input and preview elements
  const urlInput = document.getElementById('thumbnail');
  const container = document.getElementById('image-preview-container');
  const previewImage = document.getElementById('thumbnail-preview');

  const url = urlInput.value.trim();

  // If URL is empty, hide preview
  if (!url) {
    container.style.display = 'none';
    previewImage.src = '';
    return;
  }

  // Try to display the image
  previewImage.src = url;

  // Handle invalid image URLs
  previewImage.onerror = () => {
    container.style.display = 'none';
    previewImage.src = '';
  };

  // Show preview if valid URL
  previewImage.onload = () => {
    container.style.display = 'block';
  };

  //i add an oninput event to your thumbnail input
};

// Initialize form if on create.html page
if (document.getElementById('create-post-form')) {
    // Handle form submission
    document.getElementById('create-post-form')
        .addEventListener('submit', handleFormSubmit);

    // Update excerpt character count as user types
    document.getElementById('excerpt')
        .addEventListener('input', updateExcerptCount);

    // Show thumbnail preview as user types/pastes URL
    document.getElementById('thumbnail')
        .addEventListener('input', previewThumbnail);
};

const filterBySubCategory = (subCategory, clickedBtn) => {
    currentSubCategory = subCategory;
    const allBtns = document.getElementsByClassName('subcategory-btn');
    for (let btn of allBtns) {
        btn.classList.remove('active');
    }
    clickedBtn.classList.add('active');
    renderPosts();
};

if (document.getElementById('posts-grid')) {
    renderPosts();
};
if (document.getElementById('cart-items')) {
    renderCart();
    updateCartCount();
};

// Hero Carousel
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 0) {
    let currentSlide = 0;

    setInterval(() => {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }, 4000);
}