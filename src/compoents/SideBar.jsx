import { Link } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
      { label: "Services",  path: "/",  active: true },
      { label: "all-round carefree" ,path: "carefree",},
      { label: "services according to urgency",path: "urgency", },
      { label: "Service Submissions",path: "Submissions", },
      { label: "users",path: "/users", },
      { label: "Service areas", path: "areas", },
      { label: "accounting",path: "accounting", }
    ];
  
    return (
      <div className="md:w-64 overflow-scroll bg-white md:min-h-screen p-4 shadow-md">

        <ul className="flex flex-row md:flex-col gap-2">
          {menuItems.map((item, index) => (
            <Link to={item.path}>
            <li key={index} className="flex whitespace-nowrap items-center bg-gray-100 gap-3 p-3 rounded-sm">
              <span>{item.label}</span>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  

//   <div className="w-1/5 bg-gray-100 p-4">
//   <ul className="space-y-4">
//     <li className="p-2 bg-white rounded shadow">Dienste</li>
//     <li className="p-2 bg-white rounded shadow">Rundum Sorglos Dienste</li>
//     <li className="p-2 bg-white rounded shadow">Dienste nach Dringlichkeit</li>
//     <li className="p-2 bg-white rounded shadow">Dienst Submissions</li>
//     <li className="p-2 bg-white rounded shadow">Nutzer</li>
//     <li className="p-2 bg-white rounded shadow">Dienstgebiete</li>
//     <li className="p-2 bg-white rounded shadow">Buchhaltung</li>
//     <li className="p-2 bg-white rounded shadow">Reporting</li>
//   </ul>
// </div>

  export default Sidebar;