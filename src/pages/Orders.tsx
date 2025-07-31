import { Package, Truck, CheckCircle, Clock, XCircle } from "lucide-react";

const OrderHistoryPage = () => {
  // Sample orders data
  const orders = [
    {
      id: "#ORD-789456",
      date: "May 15, 2023",
      status: "Delivered",
      items: [
        { name: "Handcrafted Resin Art", quantity: 1, price: 89.99 },
        { name: "Vintage Hot Wheels Set", quantity: 2, price: 129.99 },
      ],
      total: 349.97,
      tracking: "#TRK-78945612",
    },
    {
      id: "#ORD-123456",
      date: "April 28, 2023",
      status: "Shipped",
      items: [{ name: "Custom Wooden Sculpture", quantity: 1, price: 149.99 }],
      total: 179.99,
      tracking: "#TRK-12345678",
    },
    {
      id: "#ORD-987654",
      date: "April 10, 2023",
      status: "Cancelled",
      items: [{ name: "Ceramic Vase Collection", quantity: 3, price: 59.99 }],
      total: 179.97,
      tracking: null,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Shipped":
        return <Truck className="w-4 h-4 text-blue-500" />;
      case "Processing":
        return <Clock className="w-4 h-4 text-amber-500" />;
      default:
        return <XCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen py-20 bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Your Orders</h1>
          <p className="text-gray-600 mt-1">View and manage your orders</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <Package className="w-5 h-5 text-gray-600" />
                  <div>
                    <h2 className="font-medium">Order {order.id}</h2>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm">{order.status}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-100">
                <div>
                  {order.tracking && (
                    <p className="text-sm">
                      <span className="text-gray-600">Tracking:</span>{" "}
                      {order.tracking}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (uncomment if needed) */}
        {/* <div className="text-center py-12">
          <Package className="mx-auto w-12 h-12 text-gray-400" />
          <h3 className="mt-4 font-medium">No orders yet</h3>
          <p className="text-gray-600 mt-1">Your orders will appear here</p>
        </div> */}

        {/* Help Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-gray-100 p-2 rounded-full mr-4">
              <Truck className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Need help with an order?</h3>
              <p className="text-gray-600 text-sm">
                Contact our customer service team at support@artisan.com or call
                (555) 123-4567.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderHistoryPage;
