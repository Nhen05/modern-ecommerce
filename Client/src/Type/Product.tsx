export interface Category {
    name: string;
    description: string;
    href: string;
    icon: React.ComponentType;

}
interface Rate {
    rate: number;
    count: number;
}
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rate
} 