import React from 'react';
import Link from 'next/link';

import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

const SocialMedia = () => {
    return (
        <div className="hidden lg:block lg:fixed lg:z-50 lg:bottom-0 lg:left-12">
            <div className="flex flex-col items-center gap-y-6">
                <div className="flex flex-col gap-y-6">
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
                <div className="w-[0.5px] h-[100px] bg-[#acd7ff]" />
            </div>
        </div>
    )
}

export default SocialMedia