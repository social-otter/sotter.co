import React from 'react';
import Sidebar from '../components/sidebar/index';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
};

export default Layout;
