const profile = require('../images/profile.JPG');

export default function About() {
    return (
        <section id="about" className="h-screen bg-base px-7">
            <div className="flex items-center h-full max-w-4xl mx-auto gap-5">
                <div className="flex">
                    <div className="img-col flex-initial basis-64 pt-14">
                        <div className="screen-layer screen-layer--i rounded-md relative">
                            <div className="img-wrapper mix-blend-multiply hover:mix-blend-normal filter-accent hover:filter-none transition-custom">
                                <img className="rounded-md" src={profile} alt="me" />
                            </div>
                        </div>
                    </div>
                    <div className="text-col flex-1">
                        <div className="inner-wrapper max-w-lg mx-auto">
                            <h2 className="text-accent mb-4">About Me</h2>
                            <p className="text-slate">
                            Hi, I'm Michael, a Wordpress developer with over six years of experience in the field. 
                            My mission is to translate user-centric designs into pixel-perfect websites that run blazingly fast. 
                            I am also passionate about expanding my knowledge and expertise in building websites that are 
                            intuitive, flawless, and adaptable, using efficient, well-organized, and flexible code.
                            <br /><br />
                            To me, work is a continuous learning process, and I am constantly seeking collaborations 
                            with those who are eager to share their expertise and insights, as much as I am driven to learn. 
                            Ultimately, my main objective is to create visually stunning and functional websites, 
                            in the company of individuals who inspire me to achieve my best.
                            <br /><br />
                            When I'm away from my keyboard, I enjoy motorcycling, playing video games, and going to the gym.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}