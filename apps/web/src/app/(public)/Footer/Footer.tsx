import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  const footerLinks = [
    {
      column1: [
        { id: 1, title: "About", url: "#" },
        { id: 2, title: "Contact", url: "#" },
        { id: 3, title: "Blog", url: "#" },
        { id: 4, title: "Story", url: "#" },
      ],
      column2: [
        { id: 5, title: "Company", url: "#" },
        { id: 6, title: "Product", url: "#" },
        { id: 7, title: "Press", url: "#" },
        { id: 8, title: "More", url: "#" },
      ],
      column3: [
        { id: 9, title: "Press", url: "#" },
        { id: 10, title: "Careers", url: "#" },
        { id: 11, title: "Newsletters", url: "#" },
        { id: 12, title: "More", url: "#" },
      ],
    },
  ];

  return (
    <section className="footer__section bg-[#161C28] pb-20">
      <div className="footer-headline mx-auto max-w-5xl pt-10 flex flex-col md:flex-row md:items-center md:justify-between px-8 lg:px-20 xl:px-0">
        <div className="left-footer-part md:w-1/2 flex flex-col justify-start items-start">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <h2 className="text-3xl text-white font-bold ">Multi</h2>
            </div>
          </button>
          <p className="text-white/80 text-sm mt-5 max-w-xs font-[400]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="text-white text-sm mt-10">All rights reserved.</p>
        </div>

        <div className="right-footer-part pt-5 md:w-1/2">
          <div className="flex gap-x-3 items-center justify-between px-0 lg:px-10">
            {Object.keys(footerLinks[0]).map((columnKey) => (
              <ul
                key={columnKey}
                className="footer-link-list text-white/70 text-sm font-semibold flex flex-col gap-y-2"
              >
                {footerLinks[0][columnKey].map((link) => (
                  <li
                    className="footer-link-item hover:text-white"
                    key={link.id}
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
