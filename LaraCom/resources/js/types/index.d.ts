import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export type Customer = {
    id: string;
    name: string;
    email: string;
    password: string;
    billing_address?: string;
    country?: string;
    phone?: string;
};

export type Cart = {
    id: string;
    itemsCount: string;
};

export type Flash = {
    message: string;
    customer: Customer;
    cart: Cart;
};

export type CartProduct = {
    name: string;
    image: string;
    price: string;
    quantity: string;
    id: string;
    category?: string;
};

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash: Flash;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export type Product = {
    id: string;
    image: string;
    name: string;
    sku: string;
    price: string;
    description: string;
    category: 'Headphones' | 'Earbuds' | 'Tablets' | 'Laptops' | 'Mobiles';
    status: 'In Stock' | 'Out of Stock';
    date: string;
};
