export default function Skills() {
    return (
        <section id="skills" className="bg-base px-7 pt-14 pb-36">
            <div className="inner-wrapper">
                <h2 className="text-accent text-center mb-14">My Skillset</h2>
                <div className="skills-wrapper grid grid-cols-2 max-w-3xl mx-auto">
                    <div>
                        <h3 className="text-center text-lightest-slate mb-7">General Web</h3>
                        <ul className="columns-2 text-slate font-mono">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Sass</li>
                            <li>Tailwind</li>
                            <li>AJAX</li>
                            <li>REST API</li>
                            <li>React</li>
                            <li>Shopify</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-center text-lightest-slate mb-7">Wordpress</h3>
                        <ul className="columns-2 text-slate font-mono">
                            <li>WooCoommerce</li>
                            <li>Elementor</li>
                            <li>Beaver</li>
                            <li>Oxygen</li>
                            <li>Divi</li>
                            <li>WPBakery</li>
                            <li>Plugin Development</li>
                            <li>Theme Development</li>
                            <li>Gutenberg Blocks</li>
                            <li>WP Troubleshooting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}