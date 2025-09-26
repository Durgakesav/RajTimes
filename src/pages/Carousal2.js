import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Courosal2 = () => {
  const brands = [
    { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Samsung", img: "https://www.bing.com/th/id/OIP.WfEmMWIV_I5jxZVCDMo7ZwHaD2?w=263&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { name: "Redmi", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Xiaomi_Redmi_Logo.svg/500px-Xiaomi_Redmi_Logo.svg.png" },
    { name: "OnePlus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/OP_LU_Reg_1L_RGB_red_copy-01.svg/500px-OP_LU_Reg_1L_RGB_red_copy-01.svg.png" },
    { name: "Lenovo", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/500px-Lenovo_%282015%29.svg.png" },
    { name: "Dell", img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { name: "HP", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/330px-HP_logo_2025.svg.png" },
    { name: "Asus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/500px-ASUS_Logo.svg.png" },
    { name: "Sony", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/500px-Sony_logo.svg.png" },
    { name: "JBL", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/JBL_logo.svg/500px-JBL_logo.svg.png" },
  ];

  return (
    <div className="brand-ticker-container">
      <div className="brand-ticker">
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.img} alt={brand.name} className="brand-logo" />
          </div>
        ))}
      </div>

      <style>{`
        .brand-ticker-container {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #ffffff, #f8f9fa, #ffffff); /* light clean bg */
          padding: 12px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .brand-ticker {
          display: inline-block;
          white-space: nowrap;
          animation: ticker-scroll 22s linear infinite;
        }

        .brand-item {
          display: inline-flex;
          align-items: center;
          margin: 0 35px; /* less spacing */
        }

        .brand-logo {
          width: 45px;
          height: 45px;
          object-fit: contain;
          background: #fff;
          padding: 6px;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .brand-logo:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Courosal2;
