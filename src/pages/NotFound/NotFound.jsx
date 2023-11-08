/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Helmet>
                <title>Reservia | 404! Not Found!</title>
            </Helmet>
            <div className="mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12" y2="16" />
                </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">404 - Page Not Found</h1>
            <p className="text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="mt-4 text-blue-600 hover:underline">Go back to the homepage</a>
        </div>
    );
};

export default NotFoundPage;
