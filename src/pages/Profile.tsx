import { useState } from "react";
import {
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiPackage,
  FiHelpCircle,
  FiClock,
  FiLogOut,
  FiEdit,
  FiChevronRight,
} from "react-icons/fi";

type Order = {
  id: string;
  date: string;
  status: "Delivered" | "Processing" | "Cancelled";
  total: number;
};

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  cartCount: number;
  wishlistCount: number;
  orders: Order[];
  recentlyViewed: Product[];
};

const ProfilePage = () => {
  const [user, setUser] = useState<UserData>({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Apt 4B, New York, NY 10001",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    cartCount: 3,
    wishlistCount: 7,
    orders: [
      {
        id: "#ORD-78945",
        date: "2023-05-15",
        status: "Delivered",
        total: 125.99,
      },
      {
        id: "#ORD-78123",
        date: "2023-06-22",
        status: "Processing",
        total: 89.5,
      },
      {
        id: "#ORD-77654",
        date: "2023-04-05",
        status: "Delivered",
        total: 210.75,
      },
    ],
    recentlyViewed: [
      {
        id: "prod-1",
        name: "Wireless Headphones",
        image: "https://via.placeholder.com/80",
        price: 99.99,
      },
      {
        id: "prod-2",
        name: "Smart Watch",
        image: "https://via.placeholder.com/80",
        price: 199.99,
      },
      {
        id: "prod-3",
        name: "Bluetooth Speaker",
        image: "https://via.placeholder.com/80",
        price: 59.99,
      },
      {
        id: "prod-4",
        name: "Fitness Tracker",
        image: "https://via.placeholder.com/80",
        price: 79.99,
      },
    ],
  });

  const [activeTab, setActiveTab] = useState<"orders" | "recentlyViewed">(
    "orders"
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-6">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm md:shadow-md">
        <h1 className="text-xl font-semibold text-center md:text-2xl md:text-left md:px-6">
          My Profile
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="md:container md:mx-auto md:max-w-6xl md:px-6 md:py-6">
        <div className="md:flex md:space-x-6">
          {/* Left Column - Profile & Quick Actions */}
          <div className="md:w-1/3 md:space-y-6">
            {/* Profile Section */}
            <div className="bg-white p-6 mb-4 shadow-sm md:rounded-lg md:p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={user.image}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 md:w-20 md:h-20"
                  />
                  <button title="Edit" className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full md:p-1.5">
                    <FiEdit size={12} className="md:w-4 md:h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold md:text-xl">
                    {user.name}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Phone</span>
                  <span>{user.phone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500">Address</span>
                  <span className="text-right max-w-[60%] md:max-w-[70%]">
                    {user.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions - Desktop Version */}
            <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition">
                  <span className="flex items-center text-gray-700">
                    <div className="relative mr-3">
                      <FiShoppingCart size={20} />
                      {user.cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {user.cartCount}
                        </span>
                      )}
                    </div>
                    My Cart
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition">
                  <span className="flex items-center text-gray-700">
                    <div className="relative mr-3">
                      <FiHeart size={20} />
                      {user.wishlistCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {user.wishlistCount}
                        </span>
                      )}
                    </div>
                    Wishlist
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition">
                  <span className="flex items-center text-gray-700">
                    <FiPackage size={20} className="mr-3" />
                    My Orders
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition">
                  <span className="flex items-center text-gray-700">
                    <FiHelpCircle size={20} className="mr-3" />
                    Help Center
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Logout Button - Desktop */}
            <button className="hidden md:flex w-full py-3 bg-red-50 text-red-500 rounded-lg font-medium items-center justify-center hover:bg-red-100 transition">
              <FiLogOut className="mr-2" size={18} />
              Logout
            </button>
          </div>

          {/* Right Column - Main Content */}
          <div className="md:w-2/3 md:space-y-6">
            {/* Quick Actions - Mobile */}
            <div className="grid grid-cols-4 gap-2 px-4 mb-6 md:hidden">
              <button className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition">
                <div className="relative">
                  <FiShoppingCart size={20} className="text-gray-700" />
                  {user.cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {user.cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Cart</span>
              </button>
              <button className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition">
                <div className="relative">
                  <FiHeart size={20} className="text-gray-700" />
                  {user.wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {user.wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Wishlist</span>
              </button>
              <button className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition">
                <FiPackage size={20} className="text-gray-700" />
                <span className="text-xs mt-1">Orders</span>
              </button>
              <button className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center hover:bg-gray-50 transition">
                <FiHelpCircle size={20} className="text-gray-700" />
                <span className="text-xs mt-1">Help</span>
              </button>
            </div>

            {/* Tabs Section */}
            <div className="bg-white p-4 mb-4 shadow-sm md:rounded-lg md:p-6">
              <div className="flex border-b border-gray-200">
                <button
                  className={`pb-2 px-4 text-sm md:text-base ${
                    activeTab === "orders"
                      ? "text-blue-500 border-b-2 border-blue-500 font-medium"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  My Orders
                </button>
                <button
                  className={`pb-2 px-4 text-sm md:text-base ${
                    activeTab === "recentlyViewed"
                      ? "text-blue-500 border-b-2 border-blue-500 font-medium"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("recentlyViewed")}
                >
                  Recently Viewed
                </button>
              </div>

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="mt-4 space-y-4 md:space-y-6">
                  {user.orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium md:text-lg">
                          {order.id}
                        </span>
                        <span
                          className={`text-sm md:text-base ${
                            order.status === "Delivered"
                              ? "text-green-500"
                              : order.status === "Processing"
                              ? "text-blue-500"
                              : "text-red-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mb-1 md:text-base">
                        <span>Order Date</span>
                        <span>{order.date}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 md:text-base">
                        <span>Total</span>
                        <span className="font-medium text-gray-900">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                      <button className="mt-3 w-full py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition md:py-2.5 md:text-base">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Recently Viewed Tab */}
              {activeTab === "recentlyViewed" && (
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {user.recentlyViewed.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition md:p-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-24 object-contain mb-2 md:h-32"
                      />
                      <h3 className="text-sm font-medium line-clamp-2 md:text-base">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold mt-1 md:text-base">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Help Center - Mobile */}
            <div className="bg-white p-4 mb-4 shadow-sm md:hidden">
              <h3 className="font-medium mb-3">Help Center</h3>
              <div className="space-y-3">
                <button className="w-full flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded">
                  <span className="flex items-center text-gray-700">
                    <FiHelpCircle className="mr-2" size={18} />
                    FAQs
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded">
                  <span className="flex items-center text-gray-700">
                    <FiPackage className="mr-2" size={18} />
                    Track Order
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded">
                  <span className="flex items-center text-gray-700">
                    <FiClock className="mr-2" size={18} />
                    Return Policy
                  </span>
                  <FiChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Logout Button - Mobile */}
            <div className="px-4 md:hidden">
              <button className="w-full py-3 bg-red-50 text-red-500 rounded-lg font-medium flex items-center justify-center hover:bg-red-100 transition">
                <FiLogOut className="mr-2" size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
