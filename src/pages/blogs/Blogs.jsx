
import { Helmet } from "react-helmet-async";
import SeparatorBlack from "../../components/separator/SeparatorBlack";

const BlogPage = () => {
    //fetch blog content from an API or use static data



    const blogPosts = [
        {
            id: 1,
            title: "What is One way data binding?",
            content: "LOne-way data binding is a data flow pattern in which data flows from a source to a user interface (UI) but not in the reverse direction. It's commonly used in UI frameworks like React and Angular, where data changes in the source automatically update the UI, and the UI is typically read- only, allowing updates to be made through other means.",
            date: 'November 06, 2023',
        },

        {
            id: 2,
            title: "What is NPM in node.js?",
            content: "NPM (Node Package Manager) is a package manager for Node.js. It helps Node.js developers discover, install, and manage JavaScript packages and libraries, facilitating modular development and sharing of code. NPM is a command-line tool and an online repository of packages, making it an essential part of Node.js development.",
            date: 'November 06, 2023',
        },

        {
            id: 3,
            title: "Different between Mongodb database vs mySQL database.",
            content: "MongoDB is a NoSQL database with a flexible, schema-less, document-based data model, suitable for unstructured or semi-structured data and scalable applications. MySQL is a relational database with a structured, table-based data model, ideal for structured data and complex relationships between tables. The choice depends on your data requirements, scalability needs, and familiarity with the technology.",
            date: 'November 06, 2023',
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto my-20">
            <Helmet>
                <title>Reservia | Blogs</title>
            </Helmet>
            <div className="w-fit mx-auto text-center">
                <h6 className="text-primary font-playBall text-lg">Our Food Blogs</h6>
                <h1 className="text-4xl font-bold mb-4">Blogs</h1>
                <p className="font-medium">Our written blogs are here</p>
                <SeparatorBlack />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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