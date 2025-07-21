import React from 'react'

const BlogPage = async () => {

    const res = await fetch('http://localhost:3000/api/blog')
    const posts = await res.json();
    console.log(posts);
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className='text-3xl mb-4 font-bold'>Blog Post</h1>
        <ul>
            {posts.map((post)=>(
                <li key={post.id} className='mb-6 p-4 border rounded-lg shadow-sm'>
                    <h2 className='text-xl'> {post.title}</h2>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    </div>

    
  )
}

export default BlogPage