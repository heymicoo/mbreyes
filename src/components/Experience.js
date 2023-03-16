export default function Experience() {
    return (
        <section id="experience" className="bg-base px-7 py-9">
            <div className="inner-wrapper">
                <h2 className="text-accent text-center mb-14">Experience</h2>
                <div className="timeline relative">
                    <div className="timeline-block grid relative grid-cols-[1fr_50px_1fr] gap-5">
                        <div className="content bg-slate p-6">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        <div className="icon"></div>
                        <div className="date">2017 - 2023</div>
                    </div>
                    <div className="timeline-block grid relative grid-cols-[1fr_50px_1fr] gap-5">
                        <div className="content bg-slate p-6 order-3">2 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        <div className="icon order-2"></div>
                        <div className="date order-1">2017 - 2023</div>
                    </div>
                </div>
            </div>
        </section>
    )
}