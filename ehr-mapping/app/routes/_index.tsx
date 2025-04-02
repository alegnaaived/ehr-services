import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "EHR Mapping Remix App" },
    { name: "POC", content: "Created by Angela Devia, using create-remix@2.16.4" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to EHR-Mapping<span className="sr-only">EHR-Mapping</span>
            
          </h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            Mapping options for EHR systems
          </p>
          <ul>
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Symptoms",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="21. Clipboard" id="_21._Clipboard"> <path className="cls-1" d="M19,6H18a2,2,0,0,0-2-2H15V3A3,3,0,0,0,9,3V4H8A2,2,0,0,0,6,6H5A3,3,0,0,0,2,9V29a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM11,3a1,1,0,0,1,2,0V4H11ZM8,6h8V7h0V8H8ZM20,29a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H6a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2h1a1,1,0,0,1,1,1Z"></path> <path className="cls-1" d="M27,6a3,3,0,0,0-3,3V28a1,1,0,0,0,.17.55l2,3a1,1,0,0,0,1.66,0l2-3A1,1,0,0,0,30,28V9A3,3,0,0,0,27,6Zm0,2a1,1,0,0,1,1,1v2H26V9A1,1,0,0,1,27,8Zm0,21.2-1-1.5V13h2V27.7Z"></path> <path className="cls-2" d="M14,26H10a1,1,0,0,1-1-1V23H7a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1H9V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v2h2a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H15v2A1,1,0,0,1,14,26Zm-3-2h2V22a1,1,0,0,1,1-1h2V19H14a1,1,0,0,1-1-1V16H11v2a1,1,0,0,1-1,1H8v2h2a1,1,0,0,1,1,1Z"></path> </g> </g></svg>
    ),
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Family history",
    icon: (
      <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="16. Laptop Drug" id="_16._Laptop_Drug"> <rect className="cls-1" height="4" rx="1" width="8" x="12" y="22"></rect> <path className="cls-2" d="M31,22V5a3,3,0,0,0-3-3H4A3,3,0,0,0,1,5V22a1,1,0,0,0-1,1v2a5,5,0,0,0,5,5H27a5,5,0,0,0,5-5V23A1,1,0,0,0,31,22ZM3,5A1,1,0,0,1,4,4H28a1,1,0,0,1,1,1V22H3ZM30,25a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V24H30Z"></path> <path className="cls-1" d="M23,10.53a4.53,4.53,0,0,0-7.74-3.2l-4.93,4.93A4.54,4.54,0,0,0,13.53,20h0a4.49,4.49,0,0,0,3.2-1.33l2.46-2.46h0l2.46-2.46A4.47,4.47,0,0,0,23,10.53Zm-7.67,6.73a2.52,2.52,0,0,1-1.79.74h0A2.53,2.53,0,0,1,11,15.46a2.56,2.56,0,0,1,.74-1.79l1.76-1.76,3.59,3.59ZM21,10.54a2.56,2.56,0,0,1-.74,1.79L18.5,14.09,14.91,10.5l1.76-1.76A2.54,2.54,0,0,1,21,10.53Z"></path> </g> </g></svg>
    ),
  },
];
