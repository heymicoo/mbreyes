import { useState, useEffect } from 'react';
import { getAllProjectsFromServer } from '../lib/utils';
import Project from './Project';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const projectsFromServer = await getAllProjectsFromServer();
            setProjects(projectsFromServer);
        }
        if(mounted) {
            fetchData();
        }
        return () => (mounted = false);
    }, []);

    return (
        <section id="portfolio" className="px-7 py-9 bg-base h-screen">
            <div className="inner-wrapper">
                <h2 className="text-accent text-center mb-20">Featured Projects</h2>
                {projects && (
                    <ul className="projects grid gap-6 grid-cols-3">
                        {projects.map((project, id) => {
                            return (
                                <Project key={id} project={project} />
                            );
                        })}
                    </ul>
                )}
            </div>
        </section>
    )
}

// const projects = [
//     {
//         id: 0,
//         title: 'Test 1',
//         img: 'ministry-desktop-1.jpg'
//     },
//     {
//         id: 1,
//         title: 'Test 2',
//         img: 'ministry-desktop-1.jpg'
//     },
//     {
//         id: 2,
//         title: 'Test 3',
//         img: 'ministry-desktop-1.jpg'
//     },
// ];