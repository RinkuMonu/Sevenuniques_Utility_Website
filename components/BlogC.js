"use client"
import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar as CalendarIcon } from 'lucide-react';
import Link from 'next/link';

// --- MOCK DATA ---
const posts = [
  {
    id: 1,
    category: 'Technology',
    date: '2025-04-20',
    title: 'The Future of AI in Web Development',
    description: 'Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.',
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    category: 'Design',
    date: '2025-04-18',
    title: 'Mastering Component Design in React',
    description: 'Stay updated with our latest insights and industry trends. Explore expert articles, tips, and thought leadership.',
    imageUrl: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    category: 'Business',
    date: '2025-03-15',
    title: 'The Rise of E-Commerce in 2025',
    description: 'Explore expert articles, tips, and thought leadership on how to grow your online business effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    category: 'Technology',
    date: '2025-02-28',
    title: 'Quantum Computing: A New Era',
    description: 'A deep dive into the world of quantum computing and its potential to revolutionize technology.',
    imageUrl: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    category: 'Lifestyle',
    date: '2025-01-10',
    title: 'Minimalism and Mindful Living',
    description: 'Discover how embracing minimalism can lead to a more fulfilling and intentional life.',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    category: 'Design',
    date: '2024-12-22',
    title: 'The Psychology of Color in Branding',
    description: 'Learn how different colors evoke emotions and how to use them effectively in your brand identity.',
    imageUrl: 'https://images.unsplash.com/photo-1522881193457-31ae824a80a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// --- COMPONENTS ---

const Header = () => (
  <header className="text-center mb-12">
    <span className="text-[#018EDE] font-semibold">Latest Posts</span>
    <h3 className="text-2xl md:text-4xl font-bold text-[#0C3D4C]">
      Fresh ideas, real stories, and smart insights
    </h3>
  </header>
);

const FilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, selectedDate, setSelectedDate, categories }) => {
  return (
    <div className=" py-4 rounded-lg mb-8 flex flex-col md:flex-row items-center gap-4">
      <div className="relative w-full md:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 " size={20} />
        <input
          type="text"
          placeholder="Search Articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#018EDE] bg-[#E6F6FF]"
        />
      </div>

      <div className="relative w-full md:w-auto md:min-w-[200px]">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full appearance-none pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#018EDE] bg-[#E6F6FF]"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="relative w-full md:w-auto">
         <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#018EDE] bg-[#E6F6FF]"
        />
      </div>
    </div>
  );
};

const PostCard = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className=" rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative rounded-2xl">
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-2xl" />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300">
          <Link href="#" className="text-white text-lg font-semibold bg-[#018EDE] px-3 py-1 rounded-md flex items-center gap-2 ">
            Read more
          </Link>
        </div>
      </div>
      <div className="px-3 py-6">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="text-[#018EDE] font-semibold">{post.category}</span>
          <span>{formattedDate}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600">{post.description}</p>
      </div>
    </div>
  );
};

const PostGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {posts.length > 0 ? (
      posts.map(post => <PostCard key={post.id} post={post} />)
    ) : (
      <p className="text-center text-gray-500 md:col-span-2">No articles found. Try adjusting your filters.</p>
    )}
  </div>
);


// --- MAIN APP COMPONENT ---
export default function BlogC() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const categories = useMemo(() => [...new Set(posts.map(p => p.category))], []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
      
      const dateMatch = selectedDate ? post.date === selectedDate : true;

      return searchMatch && categoryMatch && dateMatch;
    });
  }, [searchTerm, selectedCategory, selectedDate]);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-16">
        <Header />
        <FilterBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          categories={categories}
        />
        <PostGrid posts={filteredPosts} />
      </div>
    </div>
  );
}
