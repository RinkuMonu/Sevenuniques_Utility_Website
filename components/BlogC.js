"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

/* -------------------- UI COMPONENTS -------------------- */

const Header = () => (
  <header className="text-center mb-12">
    <span className="text-[#018EDE] font-semibold">Latest Posts</span>
    <h3 className="text-2xl md:text-4xl font-bold text-[#0C3D4C]">
      Fresh ideas, real stories, and smart insights
    </h3>
  </header>
);

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDate,
  setSelectedDate,
  categories,
}) => (
  <div className="py-4 rounded-lg mb-8 flex flex-col md:flex-row items-center gap-4">
    {/* Search */}
    <div className="relative w-full md:flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search Articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md bg-[#E6F6FF] focus:ring-2 focus:ring-[#018EDE]"
      />
    </div>

    {/* Category */}
    <div className="relative w-full md:min-w-[200px]">
      <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full appearance-none pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#018EDE] bg-[#E6F6FF]"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>

    {/* Date */}
    <div className="relative w-full md:w-auto">
      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-md bg-[#E6F6FF] focus:ring-2 focus:ring-[#018EDE]"
      />
    </div>
  </div>
);

const PostCard = ({ post }) => {
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
      <div className="relative rounded-2xl">
        <Image
          src={post?.image || "/RA.webp"}
          alt={post?.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-2xl"
        />

        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
          <Link
            href={`/blog/${post?.slug}`}
            className="bg-[#018EDE] text-white px-3 py-1 rounded-md"
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="px-3 py-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#018EDE] font-semibold">{post?.category}</span>
          <span className="text-gray-500">{formattedDate}</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{post?.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post?.short_description}</p>
      </div>
    </div>
  );
};

const PostGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {posts?.length ? (
      posts?.map((post) => <PostCard key={post?.id} post={post} />)
    ) : (
      <p className="md:col-span-2 text-center text-gray-500">
        No articles found.
      </p>
    )}
  </div>
);

/* -------------------- MAIN COMPONENT -------------------- */

export default function BlogC() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=6&status=2&page=1&limit=10",
          {
            headers: {
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );
        setBlogs(res.data?.data || []);
        console.log("Fetched blogs:", res.data?.data || []);
      } catch (error) {
        console.error("Blog fetch error:", error);
      }
    };

    fetchBlogs();
  }, []);

  /* Dynamic Categories */
  const categories = useMemo(() => {
    return [...new Set(blogs.map((b) => b.category).filter(Boolean))];
  }, [blogs]);

  /* Filtering */
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const searchMatch =
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.short_description?.toLowerCase().includes(searchTerm.toLowerCase());

      const categoryMatch = selectedCategory
        ? blog.category === selectedCategory
        : true;

      const dateMatch = selectedDate
        ? blog.created_at?.slice(0, 10) === selectedDate
        : true;

      return searchMatch && categoryMatch && dateMatch;
    });
  }, [blogs, searchTerm, selectedCategory, selectedDate]);

  return (
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
      <PostGrid posts={filteredBlogs} />
    </div>
  );
}
