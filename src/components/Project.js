import { useState, useEffect } from 'react';
import { getFeaturedImage } from '../lib/utils';

export default function Project({ project }) {
    const [featImgUrl, setFeatImgUrl] = useState('');

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            const featuredImg = getFeaturedImage(project.featured_media);
      
            featuredImg.then((res) => {
                setFeatImgUrl(res);
            });
        }
    });

    return (
        <li className="project-item h-48 relative screen-layer">
            <div 
                className="bg-cover bg-center bg-no-repeat cursor-pointer absolute inset-0 hover:mix-blend-multiply hover:filter-accent transition-custom"
                style={{ backgroundImage: `url(${featImgUrl})` }}
            ></div>
        </li>
    );
}