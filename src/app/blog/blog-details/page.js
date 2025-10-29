

import Image from "next/image"
import Link from "next/link"
import {
    Calendar,
    User,
    Tag,
    ArrowLeft,
    TrendingUp,
    Clock,
    Folder,
} from "lucide-react"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { MdShare } from "react-icons/md"
import { MdArrowOutward } from "react-icons/md"

const post = {
    title: "The Future of Web Development in 2025",
    slug: "future-of-web-development",
    created_at: "2025-09-05",
    image: "/home/RA.avif",
    categoryName: "Technology",
    content: `
    <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
    <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
    <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
        <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
    <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
        <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
    <p>Expect more serverless, edge computing, and immersive experiences 
    powered by WebGPU and WASM.</p>   <p>Web development is evolving rapidly with AI-powered tools, frameworks, 
    and better performance optimization. In this article, we explore the 
    latest trends shaping the industry.</p>
  
  `,
}

// Example related posts with full data
const relatedPosts = [
    {
        id: 1,
        title: "Why Tailwind CSS is Taking Over",
        slug: "blog-details",
        created_at: "2025-08-15",
        image: "/home/RA.avif",
        categoryName: "Design",
        author: "Jane Doe",
        description: "Discover why Tailwind CSS has become the go-to utility framework for developers.",
    },
    {
        id: 2,
        title: "Mastering Next.js in 2025",
           slug: "blog-details",
        created_at: "2025-07-30",
        image: "/home/RA.avif",
        categoryName: "Development",
        author: "John Smith",
        description: "Learn the latest Next.js features and best practices for high-performance apps.",
    },
]


const trendingPosts = [
    { title: "10 AI Tools Every Dev Should Know", id:1,       slug: "blog-details", created_at: "2025-08-20", image: "/home/RA.avif", categoryName: "AI" },
    { title: "React Server Components Explained",  id:2,     slug: "blog-details",created_at: "2025-07-18", image: "/home/RA.avif", categoryName: "Development" },
]

const recentPosts = [
    { title: "Building Apps with Bun.js",    id:1,   slug: "blog-details", created_at: "2025-09-01", image: "/home/RA.avif", categoryName: "JavaScript" },
    { title: "CSS Tricks for Responsive Design",   id:2,    slug: "blog-details",created_at: "2025-08-25", image: "/home/RA.avif", categoryName: "Design" },
]

const categories = {
    Technology: 5,
    Design: 3,
    Development: 7,
    AI: 4,
}
export default function BlogPostPage() {
    return (
        <div className="bg-gray-50 ">
            {/* Hero */}
            <div className="relative h-[50vh] md:h-[75vh]">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center text-white">
                            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {new Date(post.created_at).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-1" />
                                    Admin
                                </div>
                                <div className="flex items-center">
                                    <Tag className="h-4 w-4 mr-1" />
                                    {post.categoryName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-0 pt-16 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-[#115d8e] mb-8 hover:underline"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blog
                        </Link>

                        <article
                            className="prose prose-lg max-w-none mb-12"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share */}
                        <div className="border-t border-b border-gray-400 py-6">
                            <div className="flex justify-between items-center flex-wrap gap-4">
                                <div className="font-medium">Share this article</div>
                                <div className="flex gap-2">
                                    <Link href="" className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100">
                                        <FaFacebookF className="h-4 w-4 text-[#115D8E]" />
                                    </Link>
                                    <Link href="" className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100">
                                        <FaTwitter className="h-4 w-4 text-[#115D8E]" />
                                    </Link>
                                    <Link href="" className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100">
                                        <FaLinkedinIn className="h-4 w-4 text-[#115D8E]" />
                                    </Link>
                                    <Link href="" className="p-2 rounded-full border border-[#115D8E]/50 hover:bg-gray-100">
                                        <MdShare className="h-4 w-4 text-[#115D8E]" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map((related) => (
                                    <div
                                        key={related.id}
                                        className="group relative min-h-[300px] rounded-2xl overflow-hidden bg-white"
                                    >
                                        {/* image */}
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(min-width:1024px) 25vw, 100vw"
                                        />
                                        {/* dark-to-transparent overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                                        {/* content */}
                                        <div className="relative z-10 h-full p-5 flex flex-col justify-end text-white">
                                            <div className="mb-2 flex items-center justify-between text-xs opacity-90">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-2.5 py-1">
                                                    <span className="inline-block h-2 w-2 rounded-full bg-sky-400"></span>
                                                    {related.author}
                                                </span>
                                                <span>{new Date(related.created_at).toLocaleDateString()}</span>
                                            </div>

                                            <h4 className="text-xl font-semibold leading-snug">{related.title}</h4>
                                            <p className="mt-2 text-white/80 line-clamp-2">{related.description}</p>

                                            <div className="mt-4">
                                                <Link
                                                    href={`/blog/${related.slug}`}
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 text-gray-900 px-3 py-1.5 text-xs font-semibold hover:bg-white transition"
                                                >
                                                    Read more <MdArrowOutward />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* small shine */}
                                        <span className="absolute left-0 top-0 h-full w-1/5 translate-x-[-60%] bg-white/10 blur-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-[180%] transition-all duration-[900ms]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* sticky wrapper */}
                        <div className="sticky top-24 space-y-8">
                            {/* Trending Posts */}
                            <div className="bg-white shadow-md rounded-lg p-5">
                                <h3 className="flex items-center gap-2 font-semibold mb-4">
                                    <TrendingUp className="h-5 w-5 text-[#115d8e]" /> Trending Posts
                                </h3>
                                <div className="space-y-4">
                                    {trendingPosts.map((trend, index) => (
                                        <Link 
                                       href="/blog/blog-details"
                                        key={trend.id} 
                                        className="flex gap-3">
                                            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                                                <Image src={trend.image} alt={trend.title} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs font-bold text-[#115d8e] bg-[#115d8e]/10 px-2 py-1 rounded">
                                                    #{index + 1}
                                                </span>
                                                <h4 className="text-sm font-medium line-clamp-2 mt-1">{trend.title}</h4>
                                                <p className="text-xs text-gray-500 mt-1 flex items-center">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    {new Date(trend.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white shadow-md rounded-lg p-5">
                                <h3 className="flex items-center gap-2 font-semibold mb-4">
                                    <Clock className="h-5 w-5 text-[#115D8E]" /> Recent Posts
                                </h3>
                                <div className="space-y-4">
                                    {recentPosts.map((recent) => (
                                        <Link href="/blog/blog-details" key={recent.id} className="flex gap-3">
                                            <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                                                <Image src={recent.image} alt={recent.title} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded mb-1">
                                                    {recent.categoryName}
                                                </span>
                                                <h4 className="text-sm font-medium line-clamp-2">{recent.title}</h4>
                                                <p className="text-xs text-gray-500 mt-1 flex items-center">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    {new Date(recent.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            {/* <div className="bg-white shadow-md rounded-lg p-5">
                                <h3 className="flex items-center gap-2 font-semibold mb-4">
                                    <Folder className="h-5 w-5 text-[#115D8E]" /> Categories
                                </h3>
                                <div className="space-y-2">
                                       {Object.entries(categories)
                    .sort(([, a], [, b]) => b - a)
                    .map(([category, count]) => (
                      <Link
                        key={category}
                        href={`/blog`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <span className="text-sm font-medium group-hover:text-[#ab6545] dark:group-hover:text-[#e8ab8f] transition-colors">
                          {category}
                        </span>
                          <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-1">
                                                {count}
                                            </span>
                      </Link>
                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
