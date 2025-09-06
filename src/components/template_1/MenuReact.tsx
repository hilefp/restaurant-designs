import React, { useState } from 'react';
import { templates } from '../../config/templates';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isLimited?: boolean;
  isTopPick?: boolean;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuProps {
  categories?: MenuCategory[];
}

const defaultCategories: MenuCategory[] = templates['papariccos'].categories;

const MenuReact: React.FC<MenuProps> = ({ categories = defaultCategories }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || 'food');

  const handleTabClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto pb-1">
      {/* Menu Header */}
      <div className="text-center mb-12">
        <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wider">
          MENU
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 mb-12 px-4">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`menu-tab px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-base md:text-lg font-medium tracking-wide transition-colors duration-300 border-b-2 whitespace-nowrap ${
                activeCategory === category.id ? 'active border-accent' : 'border-transparent'
              }`}
              onClick={() => handleTabClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Menu Category */}
      {activeCategoryData && (
        <div className="menu-category active">
          {/* Category Title */}
          <div className="text-center mb-12">
            <h3 className="hero-subtitle text-2xl md:text-3xl font-bold tracking-wider mb-2">
              {activeCategoryData.name}
            </h3>
            {activeCategoryData.id === 'food' && (
              <div className="text-center mt-8 mb-12">
                <h4 className="hero-description text-xl md:text-2xl font-medium tracking-wider">
                  SMALL
                </h4>
              </div>
            )}
          </div>
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activeCategoryData.items.map((item, index) => (
              <div key={index} className="menu-item flex justify-between items-start space-x-4">
                <div className="flex-1">
                  <h4 className="hero-title text-lg font-medium tracking-wide mb-2 flex flex-wrap items-center gap-2">
                    <span>{item.name}</span>
                    <div className="flex gap-1">
                      {item.isVegetarian && <span className="text-xs bg-green-600 px-2 py-1 rounded">(V)</span>}
                      {item.isTopPick && <span className="text-xs bg-accent px-2 py-1 rounded text-black font-medium">TOP PICK</span>}
                      {item.isPopular && <span className="text-xs bg-secondary-color px-2 py-1 rounded">POPULAR</span>}
                    </div>
                  </h4>
                  <p className="hero-description text-sm leading-relaxed">
                    {item.description}
                    {item.isLimited && <span className="text-xs ml-2 bg-red-600 px-2 py-1 rounded">(LIMITED)</span>}
                  </p>
                </div>
                <div className="hero-subtitle text-lg font-medium">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .menu-tab {
          color: var(--text-color);
          min-width: fit-content;
          text-align: center;
        }
        
        .menu-tab:hover {
          color: var(--accent-color);
        }
        
        .menu-tab.active {
          color: var(--accent-color);
        }
        
        .border-accent {
          border-color: var(--accent-color);
        }
        
        .bg-accent {
          background-color: var(--accent-color);
        }
        
        .bg-secondary-color {
          background-color: var(--secondary-color);
        }
        
        .menu-item {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .menu-item:last-child {
          border-bottom: none;
        }
        
        .menu-category {
          transition: opacity 0.3s ease-in-out;
          opacity: 1;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .menu-tab {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
          }
        }
        
        @media (max-width: 480px) {
          .menu-tab {
            font-size: 0.8rem;
            padding: 0.4rem 0.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuReact;