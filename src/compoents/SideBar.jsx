import { Link } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
      { label: "Services",  path: "/",  active: true },
      { label: "all-round carefree services" ,path: "carefree",},
      { label: "services according to urgency",path: "urgency", },
      { label: "Service Submissions",path: "Submissions", },
      { label: "users",path: "/users", },
      { label: "Service areas", path: "areas", },
      { label: "accounting",path: "accounting", }
    ];
  
    return (
      <div className="w-64 bg-gray-100 min-h-screen p-4 shadow-md">

        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <Link to={item.path}>
            <li key={index} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition ${item.active ? 'bg-white border-l-4 border-yellow-500' : ''}`}>
              <span className={item.active ? "text-cyan-500 font-semibold" : "text-gray-700"}>{item.label}</span>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;