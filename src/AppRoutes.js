import React, { Component, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard_page/Dashboard'));
const LoginPage = lazy(() => import('./pages/login_page/LoginPage'));
const ItemPage = lazy(() => import('./pages/product_page/Product'));
const CategoryPage = lazy(() => import('./pages/category_page/Category'));
const AdminPage = lazy(() => import('./pages/admin_page/Admin'));
const AdminDetailPage = lazy(() => import('./pages/admin_page/AdminDetails'));
const Error404 = lazy(() => import('./pages/error_page/Error404'));

class AppRoutes extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route exact path="/" element={ <Navigate replace to="/login" /> } />
                    <Route path="/login" exact element={ <LoginPage /> } />
                    <Route path="/dashboard" exact element={ <Dashboard /> } />
                    <Route path="/item" exact element={ <ItemPage /> } />
                    <Route path="/category" exact element={ <CategoryPage /> } />
                    <Route path="/manage-admin" exact element={ <AdminPage /> } />
                    <Route path="/manage-admin/:admin_id" exact element={ <AdminDetailPage /> } />
                    <Route path="*" element={ <Error404 /> } />
                </Routes >
            </Suspense>
        )
    }
}

export default AppRoutes;