import { copyrightSign } from "../assets/icons";
import logo from "../assets/images/sneaker.png";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className=" text-white-500 flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <div className="flex items-end gap-1">
            <img src={logo} alt="logo" width={65} height={65} />
            <a
              href="#home"
              className="text-4xl text-fuchsia-600 bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text"
            >
              {" "}
              Sneakers
            </a>
          </div>
          <p className="text-white-400 mt-6 text-base leading-6 font-montserrat sm:max-w-sm">
            Prepare for the new term with shoes from your nearest Sneakers
            store. Discover your perfect size in-store and earn rewards!
          </p>
          <div className="flex mt-8 items-center gap-5">
            {socialMedia.map((item) => (
              <div
                key={item.src}
                className="flex justify-center items-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-300 to-white"
              >
                {" "}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold font-montserrat text-2xl leading-normal mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((i) => (
                  <li
                    key={i.name}
                    className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={i.link}>{i.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="text-2xl flex flex-1 font-montserrat cursor-pointer justify-start items-center gap-2">
          <img
            src={copyrightSign}
            alt="copyRightSign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />{" "}
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="text-white-400  font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
