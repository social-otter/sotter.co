import React from 'react';
import Layout from '../layout';

const Dashboard = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
