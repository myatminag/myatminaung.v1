const Contact = () => {
    return (
        <section id="contact" className="w-full px-3 py-[10%] h-screen lg:pb-0 lg:pt-[5%] lg:px-[15%]">
            <div className="max-w-[600px] w-full h-full mx-auto flex justify-center items-center">
                <div>
                    <p className="text-center text-white text-2xl mb-5">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's work together!
                    </p>
                    <p className="text-gray text-center mb-5">
                        I am always opening to get new opportunities to challenge and upgrade my skills.
                        Fascinated with how intricate programming and problems can be, I am highly adaptable and willing to learn.
                    </p>
                    <a href="mailto:dev.mma2021@gmail.com">
                        <div className="flex items-center justify-center">
                            <p className="bg-[#1d1d1d] text-center text-white w-[200px] px-4 py-3 rounded-md">
                                Get In Touch
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;