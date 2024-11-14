"use client"
import React, { useState , useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../untils/Fetchdata";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const router = useParams();
  const slug = router.slug;
  const [Newslater, setNewslater] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await fetchHomedata(slug || 'home');
        setNewslater(result.global_acf_options);
      } catch (err) {
        setError("Failed to load home page data.");
      }
    };
    loadHomeData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <header>
      <div className="navigtion">
        <div className="loction">
          <a href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_192_6605)">
                <path
                  d="M10.0004 9.5807C11.8082 9.5807 13.279 8.11012 13.279 6.30254C13.279 4.49496 11.8082 3.02441 10.0004 3.02441C8.19258 3.02441 6.7218 4.49496 6.7218 6.30254C6.7218 8.11012 8.19258 9.5807 10.0004 9.5807ZM10.0004 4.19613C11.162 4.19613 12.1071 5.14109 12.1071 6.30254C12.1071 7.46402 11.1621 8.40898 10.0004 8.40898C8.83872 8.40898 7.89368 7.46402 7.89368 6.30254C7.89368 5.14109 8.83876 4.19613 10.0004 4.19613Z"
                  fill="white"
                />
                <path
                  d="M6.43016 12.1926C7.31824 13.3948 6.96144 12.9273 9.51945 16.5795C9.75195 16.9127 10.2464 16.9143 10.4802 16.58C13.0498 12.9105 12.6962 13.3752 13.5698 12.1926C14.4548 10.9945 15.37 9.75555 15.8714 8.30375C16.5973 6.20215 16.2835 4.12273 14.9881 2.44852C14.988 2.44852 14.988 2.44848 14.988 2.44848C13.8014 0.915313 11.9367 0 10 0C8.06332 0 6.19863 0.915313 5.01195 2.44855C3.71652 4.12277 3.40277 6.20223 4.12863 8.30383C4.63004 9.75559 5.54519 10.9945 6.43016 12.1926ZM5.93875 3.16559C6.90508 1.91711 8.42332 1.17172 10 1.17172C11.5767 1.17172 13.0949 1.91711 14.0612 3.16559L14.0612 3.16555C15.1068 4.5168 15.3562 6.20578 14.7637 7.92133C14.3208 9.20367 13.4598 10.3693 12.6272 11.4965C11.9789 12.3741 12.1729 12.1057 10 15.2204C7.82934 12.1088 8.0209 12.3738 7.37281 11.4965C6.5402 10.3693 5.67922 9.20363 5.23629 7.92133C4.64379 6.20574 4.89324 4.5168 5.93875 3.16559Z"
                  fill="white"
                />
                <path
                  d="M6.9118 14.733C6.73899 14.4595 6.37711 14.3777 6.10352 14.5506L4.4375 15.6028C4.07407 15.8324 4.07372 16.3637 4.4375 16.5934L9.6875 19.9094C9.87864 20.0301 10.1222 20.0301 10.3133 19.9094L15.5633 16.5934C15.9268 16.3639 15.9271 15.8326 15.5633 15.6028L13.8973 14.5506C13.6236 14.3778 13.2618 14.4595 13.089 14.733C12.9162 15.0066 12.9979 15.3684 13.2715 15.5412L14.1533 16.0981L10.0004 18.7211L5.84754 16.0981L6.72934 15.5412C7.00293 15.3684 7.08461 15.0066 6.9118 14.733Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_192_6605">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {Newslater?.address.title}
          </a>
        </div>
        <div className="tel-info">
          <div className="call">
            <a href={Newslater?.phone_number.url}>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1726 3.58812C12.1938 3.5088 12.2304 3.43444 12.2804 3.36929C12.3304 3.30413 12.3927 3.24946 12.4638 3.2084C12.5349 3.16733 12.6134 3.14068 12.6948 3.12996C12.7762 3.11925 12.8589 3.12467 12.9382 3.14594C14.0969 3.44824 15.154 4.05394 16.0007 4.90065C16.8474 5.74736 17.4531 6.80448 17.7554 7.96312C17.7767 8.04243 17.7821 8.12515 17.7714 8.20655C17.7607 8.28796 17.734 8.36645 17.6929 8.43755C17.6519 8.50866 17.5972 8.57097 17.5321 8.62093C17.4669 8.6709 17.3925 8.70753 17.3132 8.72875C17.2604 8.74264 17.2061 8.74973 17.1515 8.74984C17.0138 8.74984 16.8799 8.70434 16.7707 8.62042C16.6615 8.5365 16.5831 8.41886 16.5476 8.28578C16.301 7.33994 15.8067 6.47696 15.1155 5.7858C14.4244 5.09464 13.5614 4.6003 12.6156 4.35375C12.5362 4.33262 12.4617 4.29604 12.3965 4.24611C12.3312 4.19618 12.2765 4.13388 12.2353 4.06277C12.1942 3.99166 12.1675 3.91314 12.1567 3.8317C12.1459 3.75025 12.1513 3.66748 12.1726 3.58812ZM11.9906 6.85375C13.0679 7.14125 13.7601 7.83344 14.0476 8.91078C14.0831 9.04386 14.1615 9.1615 14.2707 9.24542C14.3799 9.32934 14.5138 9.37484 14.6515 9.37484C14.7061 9.37473 14.7604 9.36764 14.8132 9.35375C14.8925 9.33253 14.9669 9.2959 15.0321 9.24593C15.0972 9.19597 15.1519 9.13366 15.1929 9.06255C15.234 8.99145 15.2607 8.91296 15.2714 8.83155C15.2821 8.75015 15.2767 8.66743 15.2554 8.58812C14.8554 7.09125 13.8101 6.04594 12.3132 5.64594C12.153 5.60315 11.9824 5.62574 11.8389 5.70874C11.6954 5.79174 11.5908 5.92835 11.548 6.08851C11.5052 6.24868 11.5278 6.41928 11.6108 6.56279C11.6938 6.7063 11.8304 6.81096 11.9906 6.85375ZM18.3921 14.303C18.2528 15.3616 17.7329 16.3333 16.9295 17.0366C16.1262 17.7399 15.0942 18.1268 14.0265 18.1248C7.82337 18.1248 2.7765 13.078 2.7765 6.87484C2.77458 5.8071 3.16141 4.77517 3.86473 3.97179C4.56804 3.16841 5.53975 2.64852 6.59837 2.50922C6.86607 2.47653 7.13716 2.5313 7.37117 2.66534C7.60519 2.79939 7.78957 3.00552 7.89681 3.25297L9.54681 6.93656V6.94594C9.62891 7.13535 9.66281 7.34215 9.6455 7.54787C9.62819 7.75359 9.56019 7.95181 9.44759 8.12484C9.43353 8.14594 9.41868 8.16547 9.40306 8.185L7.7765 10.1131C8.36165 11.3022 9.6054 12.535 10.8101 13.1217L12.7117 11.5037C12.7303 11.488 12.7499 11.4734 12.7702 11.46C12.9431 11.3447 13.142 11.2743 13.349 11.2552C13.5559 11.2361 13.7643 11.2689 13.9554 11.3506L13.9656 11.3553L17.646 13.0045C17.8939 13.1114 18.1006 13.2956 18.235 13.5297C18.3695 13.7637 18.4246 14.035 18.3921 14.303ZM17.1515 14.1467H17.1429L13.471 12.5022L11.5687 14.1202C11.5503 14.1358 11.531 14.1505 11.5109 14.1639C11.331 14.2839 11.1231 14.3552 10.9074 14.3708C10.6917 14.3864 10.4757 14.3458 10.2804 14.253C8.81712 13.5459 7.35853 12.0983 6.65071 10.6506C6.55699 10.4568 6.51493 10.242 6.52862 10.0271C6.5423 9.81218 6.61127 9.60447 6.72884 9.42406C6.74206 9.40285 6.75695 9.38274 6.77337 9.3639L8.4015 7.43344L6.76087 3.76156C6.76056 3.75844 6.76056 3.7553 6.76087 3.75219C6.00326 3.85101 5.30765 4.22263 4.80432 4.79743C4.30099 5.37224 4.02445 6.11081 4.0265 6.87484C4.02939 9.52612 5.08389 12.068 6.95863 13.9427C8.83336 15.8174 11.3752 16.8719 14.0265 16.8748C14.7901 16.8775 15.5284 16.6019 16.1036 16.0997C16.6787 15.5974 17.0512 14.9029 17.1515 14.1459V14.1467Z"
                  fill="#EE0000"
                />
              </svg>
             {Newslater?.phone_number.title}
            </a>
          </div>
          <div className="mail">
            <a href={Newslater?.email_address.url}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_192_6618)">
                  <path
                    d="M17.7778 3.33301H2.2222C1.92751 3.33301 1.64489 3.45007 1.43652 3.65844C1.22815 3.86682 1.11108 4.14943 1.11108 4.44412V15.5552C1.11108 15.8499 1.22815 16.1325 1.43652 16.3409C1.64489 16.5493 1.92751 16.6663 2.2222 16.6663H17.7778C18.0724 16.6663 18.3551 16.5493 18.5634 16.3409C18.7718 16.1325 18.8889 15.8499 18.8889 15.5552V4.44412C18.8889 4.14943 18.7718 3.86682 18.5634 3.65844C18.3551 3.45007 18.0724 3.33301 17.7778 3.33301ZM16.9222 15.5552H3.14442L7.03331 11.533L6.23331 10.7608L2.2222 14.9108V5.28856L9.12775 12.1608C9.33593 12.3677 9.61755 12.4839 9.91109 12.4839C10.2046 12.4839 10.4862 12.3677 10.6944 12.1608L17.7778 5.11634V14.8386L13.6889 10.7497L12.9055 11.533L16.9222 15.5552ZM2.94997 4.44412H16.8778L9.91109 11.3719L2.94997 4.44412Z"
                    fill="#EE0000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_192_6618">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {Newslater?.email_address.title}
            </a>
          </div>
        </div>
      </div>
      <div className={`h-wrapper ${isSticky ? "sticky" : ""}`}>
        <div className="logo">
          <a href="/">
          {
            Newslater?.footer_logo.url &&
            <Image src={Newslater?.footer_logo.url} width={150} height={100} alt="logo" />
          }
          </a>
        </div>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link href="./product">Product</Link>
            </li>
            <li>
              <Link href="/services">
                services
              </Link>
            </li>
            <li>
            <Link href="javascript:;;">
                About US
                <svg
                  width="7"
                  height="4"
                  viewBox="0 0 7 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.36119 0.466625C6.27219 0.381483 6.15155 0.333659 6.02577 0.333659C5.89998 0.333659 5.77934 0.381483 5.69034 0.466625L3.49429 2.57016L1.29823 0.466625C1.20825 0.386315 1.08925 0.342593 0.966279 0.344671C0.843312 0.346749 0.725987 0.394465 0.639022 0.477766C0.552058 0.561066 0.502244 0.673448 0.500074 0.791234C0.497904 0.909021 0.543549 1.02302 0.627391 1.1092L3.15887 3.53403C3.24787 3.61917 3.36851 3.66699 3.49429 3.66699C3.62007 3.66699 3.74071 3.61917 3.82971 3.53403L6.36119 1.1092C6.45007 1.02395 6.5 0.908398 6.5 0.787914C6.5 0.66743 6.45007 0.551873 6.36119 0.466625Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/industries">INDUSTRIES</Link>
                </li>
                <li>
                <Link href="/faq">FAQ</Link>
              </li>
              </ul>
            </li>
            {/* <li>
              <a href="#">blog</a>
            </li> */}
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                d="M342.6 150.6a32 32 0 0 0-45.3-45.3L192 210.7 86.6 105.4a32 32 0 0 0-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0 0 45.3 45.3L192 301.3l105.4 105.3a32 32 0 0 0 45.3-45.3L237.3 256l105.3-105.4z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </nav>
        <div className="h-btn">
          <div className="search-btn">
            {/* <div className="search">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 0.96875C9.57227 0.96875 10.8825 1.32682 12.0869 2.04297C13.2751 2.72656 14.2109 3.66243 14.8945 4.85059C15.6107 6.05501 15.9688 7.36523 15.9688 8.78125C15.9688 9.70898 15.8141 10.596 15.5049 11.4424C15.1956 12.2725 14.7643 13.0293 14.2109 13.7129L20.4365 19.9385L19.3135 21.0615L13.0879 14.8359C12.4043 15.3893 11.6475 15.8206 10.8174 16.1299C9.97103 16.4391 9.08398 16.5938 8.15625 16.5938C6.74023 16.5938 5.43001 16.2357 4.22559 15.5195C3.03743 14.8359 2.10156 13.9001 1.41797 12.7119C0.701823 11.5075 0.34375 10.1973 0.34375 8.78125C0.34375 7.36523 0.701823 6.05501 1.41797 4.85059C2.10156 3.66243 3.03743 2.72656 4.22559 2.04297C5.43001 1.32682 6.74023 0.96875 8.15625 0.96875ZM8.15625 2.53125C7.01693 2.53125 5.97526 2.81608 5.03125 3.38574C4.07096 3.93913 3.31413 4.69596 2.76074 5.65625C2.19108 6.60026 1.90625 7.64193 1.90625 8.78125C1.90625 9.92057 2.19108 10.9704 2.76074 11.9307C3.31413 12.8747 4.07096 13.6315 5.03125 14.2012C5.97526 14.7546 7.01693 15.0312 8.15625 15.0312C9.29557 15.0312 10.3454 14.7546 11.3057 14.2012C12.2497 13.6315 13.0065 12.8747 13.5762 11.9307C14.1296 10.9704 14.4062 9.92057 14.4062 8.78125C14.4062 7.64193 14.1296 6.60026 13.5762 5.65625C13.0065 4.69596 12.2497 3.93913 11.3057 3.38574C10.3454 2.81608 9.29557 2.53125 8.15625 2.53125Z"
                  fill="#131313"
                />
              </svg>
            </div> */}
            <a href={Newslater?.newsletter_request_quote_button.url} className="btn">
             {Newslater?.newsletter_request_quote_button.title}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.01886 1.32592L5.03969 1.30837L5.06692 1.30828L11.7091 1.28484C15.3579 1.27079 18.4795 1.26603 18.6374 1.27559L18.6386 1.27568C18.823 1.28987 18.9839 1.32817 19.0781 1.40436C19.1481 1.45957 19.9028 2.09247 20.7578 2.81667L20.7579 2.81674L22.3142 4.13861L22.3407 4.16111L22.3406 4.19586L22.3313 12.7037V12.7037L22.3172 21.2115L22.3172 21.2284L22.3099 21.2437L22.1602 21.5571C22.1601 21.5572 22.1601 21.5573 22.16 21.5574C21.9604 21.9857 21.6103 22.3358 21.1821 22.5355C21.1819 22.5355 21.1818 22.5356 21.1817 22.5356L20.8683 22.6853L20.853 22.6926L20.8361 22.6926L12.0704 22.7067L12.0704 22.7067C7.79801 22.7114 5.6049 22.7137 4.44721 22.7038C3.29605 22.6939 3.15897 22.6724 3.0135 22.6231C2.47677 22.4425 2.07747 22.071 1.82118 21.5199L1.69006 21.2436L1.68284 21.2284L1.68281 21.2115L1.66875 12.7037L1.66875 12.7037L1.65938 4.19586L1.65934 4.161L1.68597 4.13849L3.35003 2.73224L3.35011 2.73217L5.01886 1.32592ZM2.40016 21.3254L2.40017 21.3254L2.40085 21.3267C2.55763 21.6268 2.75242 21.8171 3.04291 21.9646L3.31276 22.0973H12H20.6872L20.9563 21.965C20.9565 21.9649 20.9567 21.9648 20.9569 21.9647C21.2617 21.8077 21.4693 21.5992 21.6069 21.3018L21.6985 21.1013L21.7125 12.8301V12.83L21.7218 4.62234H12H2.27821L2.2875 12.8535L2.2875 12.8535L2.30153 21.1453L2.40016 21.3254ZM2.83301 3.98076L7.31264 3.99421C9.89067 3.9989 14.1093 3.9989 16.6921 3.99421L21.18 3.98076L20.0141 2.99686L20.0141 2.99684L18.7179 1.90359H12H5.28678L3.99076 2.99667L3.99054 2.99686L2.83301 3.98076Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.15"
                />
                <path
                  d="M17.7087 13.5031L17.7084 13.5035C17.6365 13.6062 17.447 13.7897 17.2849 13.9137C17.1523 14.016 16.345 14.655 15.3512 15.4416C15.1168 15.6271 14.872 15.8209 14.6232 16.0177C13.3262 17.0441 12.191 17.9402 12.0933 18.0077M17.7087 13.5031L12.0501 17.9464M17.7087 13.5031C17.8599 13.2842 17.8767 13.0344 17.7606 12.8076L17.7605 12.8073C17.7547 12.7961 17.7467 12.787 17.7429 12.7827C17.7378 12.7768 17.7316 12.7705 17.7249 12.7638C17.7115 12.7505 17.6934 12.7336 17.6715 12.7139C17.6275 12.6742 17.5655 12.6204 17.4884 12.5549C17.3341 12.4238 17.1175 12.244 16.8591 12.0319C16.342 11.6077 15.6564 11.0533 14.964 10.4986C14.2716 9.94392 13.5721 9.3887 13.0276 8.96271C12.7553 8.74974 12.5216 8.5689 12.3466 8.43651C12.2592 8.37035 12.1862 8.31605 12.1302 8.27581C12.0767 8.23733 12.0343 8.20828 12.0101 8.19569C11.9006 8.13711 11.769 8.11174 11.6452 8.11559C11.5223 8.11942 11.3982 8.15241 11.3073 8.22034M17.7087 13.5031L11.3073 8.22034M12.0933 18.0077C12.093 18.0079 12.0927 18.0081 12.0924 18.0083L12.0501 17.9464M12.0933 18.0077C12.0935 18.0076 12.0937 18.0074 12.094 18.0073L12.0501 17.9464M12.0933 18.0077C11.9788 18.09 11.8351 18.1324 11.6959 18.1362C11.557 18.1401 11.4153 18.1058 11.3074 18.0257M12.0501 17.9464C11.8485 18.0917 11.5345 18.1011 11.3517 17.9652M11.3074 18.0257C11.3076 18.0258 11.3077 18.0259 11.3079 18.0261L11.3517 17.9652M11.3074 18.0257C11.3072 18.0256 11.3071 18.0255 11.3069 18.0254L11.3517 17.9652M11.3074 18.0257L11.3517 17.9652M6.2628 11.2227C6.23736 11.263 6.21662 11.3037 6.20143 11.3682C6.18686 11.4301 6.17769 11.5127 6.17148 11.6368C6.15906 11.8853 6.15791 12.3178 6.15791 13.123C6.15791 13.9281 6.15906 14.3607 6.17148 14.6091C6.17769 14.7333 6.18686 14.8158 6.20143 14.8778C6.21662 14.9423 6.23736 14.983 6.2628 15.0233L8.82979 10.9292C10.4563 10.9199 10.9954 10.9011 11.0235 10.8589M6.2628 11.2227C6.26296 11.2224 6.26313 11.2222 6.2633 11.2219L6.32666 11.262L6.26235 11.2235C6.2625 11.2232 6.26265 11.223 6.2628 11.2227ZM6.2628 11.2227C6.26849 11.2132 6.2741 11.2037 6.2797 11.1942C6.31843 11.1284 6.35648 11.0638 6.41793 11.0149C6.49111 10.9567 6.59014 10.9243 6.74563 10.9035C7.0369 10.8646 7.57354 10.8615 8.63521 10.8554C8.69806 10.855 8.76276 10.8546 8.82934 10.8542H8.82935C9.64267 10.8495 10.1832 10.8425 10.5236 10.8314C10.6941 10.8259 10.813 10.8193 10.8903 10.8117C10.9196 10.8089 10.9416 10.806 10.9577 10.8032M10.9577 10.8032C10.9571 10.8079 10.9566 10.8121 10.9561 10.816C10.9551 10.824 10.9542 10.8292 10.9536 10.8321C10.9533 10.8337 10.9531 10.8344 10.9531 10.8343C10.9531 10.8339 10.9545 10.8285 10.9584 10.8217L11.0235 10.8589M10.9577 10.8032C10.9592 10.7886 10.9609 10.7702 10.9625 10.7478C10.9668 10.6888 10.9709 10.6066 10.9744 10.5065C10.9814 10.3065 10.986 10.0379 10.986 9.74798C10.986 9.17465 10.9915 8.84707 11.0326 8.63949C11.0536 8.53319 11.0847 8.45322 11.1322 8.38577C11.1791 8.31917 11.2386 8.26976 11.3073 8.22034M10.9577 10.8032C10.963 10.8023 10.9676 10.8013 10.9717 10.8004C10.9756 10.7996 10.9785 10.7988 10.9805 10.7982C10.9827 10.7976 10.9835 10.7973 10.9833 10.7973C10.9832 10.7973 10.9809 10.7983 10.9776 10.8006C10.9744 10.8026 10.9675 10.8078 10.9611 10.8173L11.0235 10.8589M11.0235 10.8589L11.3073 8.22034M10.9577 15.4428C10.963 15.4437 10.9676 15.4446 10.9717 15.4455C10.9756 15.4464 10.9785 15.4471 10.9805 15.4477C10.9811 15.4479 10.9816 15.4481 10.982 15.4482C10.983 15.4485 10.9834 15.4487 10.9833 15.4486C10.9832 15.4486 10.9809 15.4477 10.9776 15.4454C10.9744 15.4433 10.9675 15.4381 10.9611 15.4286L11.0235 15.387L10.9584 15.4243C10.9544 15.4173 10.9531 15.4117 10.9531 15.4117C10.9531 15.4117 10.9533 15.4124 10.9536 15.4139C10.9542 15.4168 10.9551 15.422 10.9561 15.43C10.9566 15.4338 10.9572 15.4381 10.9577 15.4428ZM11.2775 11.3593L11.2775 11.3593L11.2784 11.3588C11.3479 11.3161 11.4092 11.2714 11.4576 11.206C11.5062 11.1403 11.5374 11.0598 11.5583 10.9517C11.5993 10.7402 11.6048 10.3986 11.6048 9.79954C11.6048 9.29637 11.606 9.0293 11.6169 8.88222C11.6224 8.80765 11.63 8.77245 11.637 8.75494C11.6399 8.74776 11.6418 8.7457 11.6421 8.74547L11.6421 8.74546L11.6421 8.74545C11.6424 8.74516 11.6435 8.74391 11.6485 8.74121C11.6719 8.72966 11.6858 8.72796 11.6983 8.72958C11.7132 8.73152 11.7357 8.73955 11.7735 8.76465C11.8376 8.8096 13.0926 9.79861 14.5675 10.9692C15.4651 11.6817 16.135 12.2204 16.5803 12.5879C16.8031 12.7717 16.9691 12.9122 17.0791 13.01C17.1343 13.059 17.1744 13.0965 17.2004 13.1228C17.2008 13.1233 17.2013 13.1237 17.2017 13.1241C17.1783 13.1486 17.1423 13.1829 17.093 13.2275C16.9927 13.318 16.8413 13.4471 16.6382 13.6154C16.2322 13.9518 15.6222 14.4424 14.8066 15.0892L14.8066 15.0892C14.6657 15.201 14.5312 15.3078 14.4028 15.4098C13.0387 16.4925 12.3576 17.0332 12.0062 17.297C11.8112 17.4434 11.7251 17.4987 11.6826 17.5164C11.6782 17.5183 11.6749 17.5194 11.6726 17.5201C11.6725 17.5201 11.6725 17.5201 11.6724 17.52C11.6687 17.5179 11.6609 17.5134 11.6541 17.5099C11.6433 17.5038 11.6417 17.5018 11.6381 17.4936C11.6312 17.4776 11.6232 17.4446 11.6174 17.371C11.606 17.2259 11.6048 16.9591 11.6048 16.4464C11.6048 15.8474 11.5993 15.5058 11.5583 15.2943C11.5374 15.1862 11.5062 15.1056 11.4576 15.0399C11.4092 14.9746 11.3479 14.9299 11.2784 14.8872L11.2784 14.8872L11.2775 14.8866C11.2353 14.8616 11.1945 14.8407 11.1234 14.8255C11.0561 14.8112 10.9622 14.8021 10.8134 14.7959C10.5149 14.7835 9.97728 14.7824 8.94697 14.7824C8.15005 14.7824 7.61422 14.7788 7.27253 14.7701C7.10147 14.7657 6.98047 14.76 6.90018 14.753C6.86349 14.7498 6.83688 14.7464 6.81856 14.7431C6.81838 14.7419 6.81819 14.7408 6.818 14.7395C6.81409 14.7146 6.81022 14.6783 6.80653 14.6314C6.7992 14.5379 6.79302 14.4076 6.78805 14.2519C6.77812 13.9408 6.77314 13.5321 6.77314 13.123C6.77314 12.7139 6.77812 12.3052 6.78805 11.9941C6.79302 11.8384 6.7992 11.708 6.80653 11.6145C6.81022 11.5676 6.81409 11.5314 6.818 11.5064C6.81819 11.5052 6.81838 11.504 6.81856 11.5029C6.83688 11.4996 6.86349 11.4962 6.90018 11.493C6.98047 11.4859 7.10147 11.4803 7.27253 11.4759C7.61422 11.4671 8.15005 11.4636 8.94697 11.4636C9.97728 11.4636 10.5149 11.4624 10.8134 11.4501C10.9622 11.4439 11.0561 11.4348 11.1234 11.4204C11.1945 11.4053 11.2353 11.3844 11.2775 11.3593Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.15"
                />
              </svg>
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
