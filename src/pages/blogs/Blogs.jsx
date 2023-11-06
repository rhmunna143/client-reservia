
const BlogPage = () => {
    // You can fetch your blog content from an API or use static data here
    const blogPosts = [
        {
            id: 1,
            title: 'The Art of Cooking',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            date: 'October 15, 2023',
        },
        {
            id: 2,
            title: 'Exploring Culinary Delights',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            date: 'September 30, 2023',
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-2">{post.date}</p>
                        <p className="text-gray-800">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
