import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  ChevronRight,
} from "lucide-react";

const OrderHistoryPage = () => {
  // Sample orders data
  const orders = [
    {
      id: "#ART-78945",
      date: "May 15, 2023",
      status: "Delivered",
      items: [
        { name: "Handcrafted Ceramic Vase", quantity: 1, price: 89.99 },
        { name: "Artisan Throw Pillow", quantity: 2, price: 35.5 },
      ],
      total: 160.99,
      tracking: "UPS #1Z2345X6789123456",
      deliveryDate: "May 18, 2023",
    },
    {
      id: "#ART-78123",
      date: "June 22, 2023",
      status: "Shipped",
      items: [
        { name: "Premium Leather Journal", quantity: 1, price: 42.0 },
        {
          name: "Hand-blown Glass Tumblers (Set of 2)",
          quantity: 1,
          price: 65.0,
        },
      ],
      total: 107.0,
      tracking: "FedEx #987654321012",
      estimatedDelivery: "June 28, 2023",
    },
    {
      id: "#ART-77654",
      date: "April 5, 2023",
      status: "Cancelled",
      items: [{ name: "Wooden Serving Board", quantity: 1, price: 54.99 }],
      total: 54.99,
    },
  ];
  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "Shipped":
        return <Truck className="w-4 h-4 text-blue-500" />;
      case "Processing":
        return <Clock className="w-4 h-4 text-amber-500" />;
      case "Cancelled":
        return <XCircle className="w-4 h-4 text-rose-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 pt-14 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Order History
              </h1>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                Your artisan purchases
              </p>
            </div>
            <button className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>Filter</span>
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-2 pt-2 pb-24 md:py-8">
        {/* Orders List */}
        <div className="space-y-4 md:space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-gray-200"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <Package className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="font-medium text-gray-900">{order.id}</h2>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                </div>
                <div
                  className={`flex items-center text-sm px-3 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-emerald-50 text-emerald-700"
                      : order.status === "Shipped"
                      ? "bg-blue-50 text-blue-700"
                      : order.status === "Cancelled"
                      ? "bg-rose-50 text-rose-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {getStatusIcon(order.status)}
                  <span className="ml-1.5">{order.status}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="bg-gray-100 rounded-lg w-14 h-14 flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <div>
                  {order.tracking && (
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-700">
                        {order.tracking}
                      </span>
                    </div>
                  )}
                  {order.deliveryDate && (
                    <p className="text-xs text-gray-500 mt-1">
                      Delivered on {order.deliveryDate}
                    </p>
                  )}
                  {order.estimatedDelivery && (
                    <p className="text-xs text-gray-500 mt-1">
                      Est. delivery {order.estimatedDelivery}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="font-medium text-gray-900">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <button title="View Order" className="text-gray-400 hover:text-gray-700">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-8 md:mt-12 bg-white rounded-xl p-4 border border-gray-100 shadow-xs">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-50 p-3 rounded-full">
              <Truck className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Need help with an order?
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                Our artisan support team is here to help with any questions
                about your purchases.
              </p>
              <div className="flex space-x-3">
                <button className="text-xs font-medium px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                  Contact Support
                </button>
                <button className="text-xs font-medium px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  FAQ Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderHistoryPage;
