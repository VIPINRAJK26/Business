import React, { useState } from "react";
import { Heart, ShoppingCart, Zap, X, Filter } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface WishlistPageProps {}

const Wishlist: React.FC<WishlistPageProps> = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      brand: "TechSound",
      price: 89.99,
      originalPrice: 129.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Electronics",
      inStock: true,
    },
    {
      id: "2",
      name: "Premium Cotton T-Shirt",
      brand: "StyleCo",
      price: 24.99,
      originalPrice: 39.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Fashion",
      inStock: true,
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      brand: "FitTech",
      price: 199.99,
      originalPrice: 249.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      category: "Electronics",
      inStock: false,
    },
    {
      id: "4",
      name: "Minimalist Sneakers",
      brand: "WalkFree",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      category: "Fashion",
      inStock: true,
    },
    {
      id: "5",
      name: "Portable Phone Charger",
      brand: "PowerMax",
      price: 29.99,
      originalPrice: 44.99,
      image:
        "https://images.unsplash.com/photo-1609592909637-5b8ff770a3b0?w=400&h=400&fit=crop",
      category: "Electronics",
      inStock: true,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const categories = ["All", "Electronics", "Fashion"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const removeFromWishlist = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    showToast("Removed from wishlist", "success");
  };

  const addToCart = (product: Product) => {
    if (!product.inStock) {
      showToast("Product out of stock", "error");
      return;
    }
    showToast("Added to cart", "success");
  };

  const buyNow = (product: Product) => {
    if (!product.inStock) {
      showToast("Product out of stock", "error");
      return;
    }
    showToast("Redirecting to checkout...", "success");
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const calculateDiscount = (original: number, current: number): number => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}

      {/* Main Content */}
      <main className="pt-20 pb-24 px-2 md:max-w-7xl mx-auto">
        <div className="mb-6 md:flex hidden justify-end">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center gap-2">
            My Wishlist
          </h1>
        </div>

        {products.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="w-16 h-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-black mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 text-sm">
              Start adding products you love!
            </p>
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="flex justify-between">
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="pt-1 text-rose-600">
                <Heart className="fill-rose-600" />
              </div>
            </div>
            {/* Product Grid */}
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-2">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      title="Remove from wishlistF"
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-2">
                    <div className="text-xs flex justify-between text-gray-500  tracking-wide mb-1">
                      <h1>{product.brand}</h1>
                      <span className="bg-red-500 text-white  font-extralight px-2 rounded">
                        {calculateDiscount(
                          product.originalPrice,
                          product.price
                        )}
                        % off
                      </span>
                    </div>
                    <h3 className="font-semibold text-xs text-black mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className=" text-xs font-bold text-black">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className=" text-xs text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                      <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className={`w-full flex text-xs items-center justify-center gap-2 py-2 px-3 rounded-xl font-semibold transition-all ${
                          product.inStock
                            ? "bg-gray-100 text-black hover:bg-gray-200 active:scale-95"
                            : "bg-gray-50 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => buyNow(product)}
                        disabled={!product.inStock}
                        className={`w-full text-xs flex items-center justify-center gap-2 py-2 px-3 rounded-xl  font-semibold transition-all ${
                          product.inStock
                            ? "bg-black text-white hover:bg-gray-800 active:scale-95"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        <Zap className="w-4 h-4" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Bottom Action Bar */}
      {products.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-4">
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Clear All
            </button>
            <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Add All to Cart
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-28 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium text-white animate-in slide-in-from-bottom duration-300 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
