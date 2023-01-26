import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; 
import { MdEmail } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { BiRightArrow } from "react-icons/bi";

import profilePic from "@/assets/myProfile.jpeg"; 
import frontend from "@/assets/icon1.svg";
import backend from "@/assets/icon4.svg";
import code from "@/assets/icon5.svg";
import Headliner from "@/components/headliner";

const About = () => {
    return (
        <section id="about" className="w-full px-3 pt-[25%] lg:pb-0 lg:pt-[12%] lg:px-[15%]">
            <div className="max-w-[1240px] w-full h-full lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <Headliner name={"About Me"} />
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="mb-5">
                            <Image 
                                src={profilePic}
                                alt="profile-pic" 
                                className="w-[250px] rounded-md mb-6"
                            />
                            <p className="text-xl text-white mb-5">
                                Personal Info
                            </p>
                            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2">
                                <div className="flex items-center gap-x-2">
                                    <div className="bg-[#1d1d1d] p-3 rounded-md">
                                        <FaPhoneAlt size={20} color="white" />
                                    </div>
                                    <div className="">
                                        <p className="text-gray text-xs mb-1">
                                            Phone
                                        </p>
                                        <p className="text-white">
                                            +959427274346
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="bg-[#1d1d1d] p-3 rounded-md">
                                        <IoLocationSharp size={20} color="white" />
                                    </div>
                                    <div className="">
                                        <p className="text-gray text-xs mb-1">
                                            Location
                                        </p>
                                        <p className="text-white">
                                            Yangon, Myanmar
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="bg-[#1b1919] p-3 rounded-md">
                                        <MdEmail size={20} color="white" />
                                    </div>
                                    <div className="">
                                        <p className="text-gray text-xs mb-1">
                                            Email
                                        </p>
                                        <p className="text-white">
                                            dev.mma2021@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <div className="bg-[#1b1919] p-3 rounded-md">
                                        <VscCalendar size={20} color="white" />
                                    </div>
                                    <div className="">
                                        <p className="text-gray text-xs mb-1">
                                            Birthday
                                        </p>
                                        <p className="text-white">
                                            Nov 1, 2001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-xl text-white mb-5">
                                Who Am I?
                            </p>
                            <p className="mb-5 text-gray">
                                I am a full-stack web developer from Yangon, Myanmar. I began to interest in web development with scratch when
                                I first learned about programming at CS50. After studying over a year. I am capable of using reactjs & nextjs 
                                for user interfaces and nodejs & expressjs for web servers.
                            </p>
                            <p className="mb-5 text-gray">
                                In my some spare time, I tend to explore
                                and try to understand some design patterns and architecture of my related subjects.  
                            </p>
                            <p className="text-xl text-white mt-5 mb-5">
                                Tech stacks that I am currently working with...
                            </p>
                            <div className="flex items-start gap-x-6">
                                <ul className="flex flex-col gap-y-3">
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            JavaScript(ES6+)
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            TypeScript
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            Reactjs
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            React Native
                                        </p>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-y-3">
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            Nextjs
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            Nodejs
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            Expressjs
                                        </p>
                                    </li>
                                    <li className="text-gray flex items-center gap-x-3">
                                        <BiRightArrow size={13} color="white" />
                                        <p>
                                            Mongodb
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>           
                    </div>
                    <p className="text-xl text-white mt-5 mb-5">
                        What I guarantee?
                    </p>
                    <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-3 lg:gap-x-6">
                        <div className="flex items-start gap-x-3 px-6 py-6 border border-[#212425] rounded-lg">
                            <Image src={frontend} alt="icon-4" />
                            <div>
                                <p className="text-white text-lg mb-2">
                                    Frontend Development
                                </p>
                                <p className="text-gray">
                                    Develop the graphical UI of websites and web applications
                                    that render responsively well on a variety of devices.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-3 px-6 py-6 border border-[#212425] rounded-lg">
                            <Image src={backend} alt="icon-4" />
                            <div>
                                <p className="text-white text-lg mb-2">
                                    Backend Development
                                </p>
                                <p className="text-gray">
                                    Maintain or provide the server-side scripts process in building
                                    robust back-end across multiple devices and platforms.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-3 px-6 py-6 border border-[#212425] rounded-lg">
                            <Image src={code} alt="icon-4" />
                            <div>
                                <p className="text-white text-lg mb-2">
                                    Clean Code 
                                </p>
                                <p className="text-gray">
                                    Write modern, performant, manageable and maintainable code to clearly communicate with
                                    other developers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;