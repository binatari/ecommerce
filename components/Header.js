import Link from "next/link";
import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";

import LogoSVG from "../svg/Frame 2.svg";

function Header() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div className="py-3 lg:py-5 flex items-center justify-between px-4">
        <Link href="/">
          <a title="Return to Homepage">back</a>
        </Link>
        <Link href="/">
        <a title="Return to ChopChop" className="font-bold md:hidden">
        <svg
              className="mr-3 h-10"
              viewBox="0 0 282 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138.768 155.201L163.87 202.431C175.773 224.826 199.457 231.197 216.77 216.66L191.667 169.431C179.765 147.035 156.081 140.664 138.768 155.201Z"
                fill="#76A9FA"
              />
              <path
                d="M84.1322 171.057L66.2889 227.929C84.8316 237.12 105.296 227.257 111.997 205.898L129.84 149.026C112.065 140.414 92.7125 151.118 84.1322 171.057Z"
                fill="#A4CAFE"
              />
              <path
                d="M56 75.8965L81.6854 118.604C93.8649 138.855 115.292 144.294 129.544 130.753L103.858 88.0456C91.6787 67.7944 70.2517 62.3551 56 75.8965Z"
                fill="#1C64F2"
              />
              <path
                d="M139.045 134.875L174.418 106.689C191.192 93.3233 197.227 67.4951 187.899 49L152.526 77.1863C135.752 90.5518 129.717 116.38 139.045 134.875Z"
                fill="#1C64F2"
              />
            </svg>
        </a>
      </Link>
        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
              <a href="#" role="button" class="relative flex" onClick={openModal}>
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {total_unique_items}
                </span>
              </a>
            </li>
      </div>

      <Link href="/">
        <a title="Return to ChopChop">
          <LogoSVG className="w-full hidden md:block" />
        </a>
      </Link>
    </header>
  );
}

export default Header;
