import { Link } from "react-router-dom"

const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to LearnStreak</h2>
                <p className="text-center text-gray-600 mb-4">
                    This is your dashboard where you can track your learning progress.
                </p>
                <p className="text-center text-gray-600 mb-4">
                    Use the navigation links to explore different features of the app.
                </p>
                <p className="text-center text-gray-600 mb-4">
                    If you have any questions, feel free to reach out to our support team.
                </p>
                <p className="text-center text-gray-600 mb-4">
                    Happy Learning!
                </p>

                <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;