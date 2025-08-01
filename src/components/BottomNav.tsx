import {
  Home,
  Package,
  ShoppingCart,
  Heart,
  User,
  Grid2x2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type NavItem = {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  path: string;
  showBadge?: boolean;
  badgeCount?: number;
};

export const MobileNavbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      activeIcon: <Home className="w-5 h-5 fill-current" />,
      label: "Home",
      path: "/",
    },
    {
      icon: <Grid2x2 className="w-5 h-5" />,
      activeIcon: <Grid2x2 className="w-5 h-5 stroke-[3]" />,
      label: "category",
      path: "/products",
    },

    {
      icon: <ShoppingCart className="w-5 h-5" />,
      activeIcon: <ShoppingCart className="w-5 h-5 fill-current" />,
      label: "Cart",
      path: "/cart",
      showBadge: true,
      badgeCount: 3,
    },
    {
      icon: <Heart className="w-5 h-5" />,
      activeIcon: <Heart className="w-5 h-5 fill-current" />,
      label: "Wishlist",
      path: "/wishlist",
    },

    {
      icon: <Package className="w-5 h-5" />,
      activeIcon: <Package className="w-5 h-5 stroke-[3]" />,
      label: "Orders",
      path: "/orders",
    },
  ];

  return (
    <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 safe-pb">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item, index) => (
          <button
            key={item.path}
            onClick={() => {
              setActiveItem(index);
              navigate(item.path); // 👈 Navigate to path
            }}
            className={`flex flex-col items-center justify-center w-full relative transition-colors duration-200 ${
              activeItem === index ? "text-primary" : "text-gray-500"
            }`}
          >
            {/* Active indicator */}
            {activeItem === index && (
              <div className="absolute -top-3 w-12 h-1 bg-primary rounded-full" />
            )}

            {/* Icon container with badge */}
            <div className="relative p-2 rounded-full transition-all duration-300 hover:bg-primary/10">
              {activeItem === index ? item.activeIcon : item.icon}

              {/* Badge */}
              {item.showBadge && item.badgeCount && item.badgeCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badgeCount > 9 ? "9+" : item.badgeCount}
                </div>
              )}
            </div>

            {/* Label */}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
