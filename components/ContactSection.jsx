const ContactSection = ({ contactRef }) => {
    return (
        <section ref={contactRef} className="lg:pt-0 lg:pb-0 lg:px-[15%]">
            <div className="relative max-w-[600px] min-h-[100vh] h-full w-full lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <div>
                    <p className="text-center text-primaryColor text-[2rem] font-semibold mb-6">
                        {"Let's work together!"}
                    </p>
                    <p className="text-[#acd7ff] text-center mb-6">
                        I am always opening to get new opportunities to challenge and upgrade my skills.
                        Fascinated with how intricate programming and problems can be, I am highly adaptable and willing to learn.
                    </p>
                    <div className="flex items-center justify-center">
                        <a href="mailto:dev.mma2021@gmail.com">
                            <button className="btn">
                                <p>
                                    Get In Touch
                                </p>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-4">
                    <p className="text-[0.9rem] text-[#acd7ff]">
                        Designed & Developed by Myat Min Aung
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;