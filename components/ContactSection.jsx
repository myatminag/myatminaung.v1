import Link from "next/link";

import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const ContactSection = ({ contactRef }) => {
    return (
        <section ref={contactRef} className="pt-[5rem] lg:pt-0 lg:pb-0 lg:px-[15%]">
            <div className="relative max-w-[600px] min-h-[80vh] lg:min-h-[100vh] h-full w-full lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <p className="text-center text-primaryColor text-[1.6rem] font-semibold mb-6">
                        {"Let's work together!"}
                    </p>
                    <p className="text-[#acd7ff] font-light text-center mb-6">
                        I am always opening to get new opportunities to challenge and upgrade my skills.
                        Fascinated with how intricate programming and problems can be, I am highly adaptable and willing to learn.
                    </p>
                    <div className="flex items-center justify-center">
                        <Link href="mailto:myatminaung.dev@gmail.com">
                            <button className="btn">
                                <p>
                                    Get In Touch
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] bottom-6">
                    <div className="flex items-center justify-center gap-x-5 mb-3">
                        <Link aria-label="Github" target='__blank' href="https://github.com/MyatminAung2001">
                            <GithubIcon />
                        </Link>
                        <Link aria-label="LinkedIn" target='__blank' href="https://www.linkedin.com/in/myat-min-aung-830039245">
                            <LinkedInIcon />
                        </Link>
                        <Link aria-label="Facebook" target='__blank' href="https://www.facebook.com/profile.php?id=100008542208276">
                            <FacebookIcon />
                        </Link>
                        <Link aria-label="Instagram" target='__blank' href="https://www.instagram.com/iri_diam">
                            <InstagramIcon />
                        </Link>
                    </div>
                    <p className="w-[100%] text-sm text-center font-light text-[#acd7ff]">
                        Designed & Developed by Myat Min Aung
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;