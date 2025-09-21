import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtCard from '../components/ArtCard';
import { ArtPiece } from '../types';

interface DashboardProps {
  onViewArt: (art: ArtPiece) => void;
  onViewProfile: () => void;
}

const mockArtPieces: ArtPiece[] = [
    { id: '1', imageUrl: 'https://miro.medium.com/max/2038/0*cGhUgE2A8sr9iX6i', title: 'We Bare Bears', artistName: 'Sexy_Launda69', artistAvatar: 'url_to_avatar', description: 'A bear Painting go brrrr', longDescription: "This artwork brings to life the charming trio from We Bare Bears—Grizz, Panda, and Ice Bear—in a playful yet heartwarming composition. The piece captures their distinct personalities: Grizz's boundless energy radiates at the center, Panda's gentle and relatable nature adds softness, while Ice Bear's calm stoicism grounds the scene.", category: 'Digital Art', price: 69.69, likes: 2000, saves: 2200, rowSpan: 2 },
    { id: '2', imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.nwS4CnNCpDFM7cAMRHx6hQHaDe?rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Forest Path', artistName: 'NatureLover', artistAvatar: 'url_to_avatar', description: 'A serene walk in the woods.', longDescription: 'A long description about the serene walk in the woods.', category: 'Photography', price: 120.00, likes: 1500, saves: 800 },
    { id: '3', imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.9KytVwC-kLecX_sc4mSoVAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Golden Pups', artistName: 'DoggoArt', artistAvatar: 'url_to_avatar', description: 'Cute golden retriever puppies.', longDescription: 'A detailed piece about two adorable golden retriever puppies playing.', category: 'Collage', price: 95.50, likes: 5300, saves: 4100, rowSpan: 2 },
    { id: '4', imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.Weks7GOuv9W3DIiL6RGP6QHaLT?rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Autumn Drive', artistName: 'CarFanatic', artistAvatar: 'url_to_avatar', description: 'A muscle car in autumn.', longDescription: 'An evocative shot of a modern muscle car against a backdrop of fall colors.', category: 'Photography', price: 250.00, likes: 3200, saves: 1800 },
    { id: '5', imageUrl: 'https://i.etsystatic.com/12991856/r/il/b59228/4992653314/il_1080xN.4992653314_192a.jpg', title: 'Knight in Poppies', artistName: 'Medievalist', artistAvatar: 'url_to_avatar', description: 'A knight resting in a field.', longDescription: 'A renaissance-style painting of a knight in full armor lying in a vibrant field of red poppies.', category: 'Painting', price: 800.00, likes: 7800, saves: 6500, rowSpan: 2 },
    { id: '6', imageUrl: 'https://i.etsystatic.com/5436778/r/il/d8e616/225975945/il_680x540.225975945.jpg', title: 'Porsche 911', artistName: 'AutoArt', artistAvatar: 'url_to_avatar', description: 'Sleek lines of a legend.', longDescription: 'A minimalist digital render of the iconic Porsche 911.', category: 'Digital Art', price: 450.00, likes: 4100, saves: 2300 },
    { id: '7', imageUrl: 'https://wallpapers.com/images/hd/art-pictures-sc3c7upgq63wmbp6.jpg', title: 'Vintage Kiss', artistName: 'RetroWave', artistAvatar: 'url_to_avatar', description: 'Lipstick kisses on a napkin.', longDescription: 'A pop-art inspired piece showcasing multiple lipstick kisses.', category: 'Mixed Media', price: 75.00, likes: 950, saves: 400 },
    { id: '8', imageUrl: 'https://th.bing.com/th/id/OIP.3nH0plcEGZHbaTnVIhnHfwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Peaky Blinder', artistName: 'Cinephile', artistAvatar: 'url_to_avatar', description: 'Portrait of a gangster.', longDescription: 'A dramatic, high-contrast portrait capturing the essence of a well-known character.', category: 'Digital Painting', price: 300.00, likes: 8900, saves: 7100, rowSpan: 2 },
    { id: '9', imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/023/778/852/small_2x/ai-generative-ai-generated-white-ink-oil-paint-flower-on-canvas-artist-calm-peace-romantic-love-vibe-graphic-art-photo.jpg', title: 'Spider-Man Pop', artistName: 'ComicGeek', artistAvatar: 'url_to_avatar', description: 'Classic comic book hero.', longDescription: 'A vibrant pop-art rendition of the friendly neighborhood Spider-Man.', category: 'Illustration', price: 150.00, likes: 6200, saves: 5300 },
    { id: '10', imageUrl: 'https://t4.ftcdn.net/jpg/01/17/52/65/360_F_117526556_8hx5uV66tTJ41lHvSYotLwYuN6BQRSQQ.jpg', title: 'Cosmic Dreamer', artistName: 'StarGazer', artistAvatar: 'url_to_avatar', description: 'A child looks to the sky.', longDescription: 'A surreal painting of a person with an afro made of cosmic clouds.', category: 'Surrealism', price: 550.00, likes: 4800, saves: 3200 },
];

const Dashboard: React.FC<DashboardProps> = ({ onViewArt , onViewProfile }) => {
    const [items, setItems] = useState<ArtPiece[]>(mockArtPieces);
    const [isLoading, setIsLoading] = useState(false);
    const loaderRef = useRef(null);

    const fetchMoreData = useCallback(() => {
        if (isLoading) return;
        setIsLoading(true);

        setTimeout(() => {
            const moreItems = mockArtPieces.map(item => ({ ...item, id: `${item.id}-${Date.now()}` }));
            setItems(prev => [...prev, ...moreItems]);
            setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    fetchMoreData();
                }
            },
            { threshold: 1.0 }
        );

        const currentLoaderRef = loaderRef.current;
        if (currentLoaderRef) {
            observer.observe(currentLoaderRef);
        }

        return () => {
            if (currentLoaderRef) {
                observer.unobserve(currentLoaderRef);
            }
        };
    }, [fetchMoreData]);

    return (
        <main className="pt-24 min-h-screen bg-dotted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-auto gap-4 md:gap-6">
                     <AnimatePresence>
                        {items.map(piece => (
                            <ArtCard 
                                key={piece.id} 
                                piece={piece} 
                                onClick={() => onViewArt(piece)}
                                className={piece.rowSpan === 2 ? 'sm:row-span-2' : ''}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            <div ref={loaderRef} className="h-20 w-full flex justify-center items-center">
                {isLoading && (
                    <div className="flex space-x-2">
                        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }} className="w-3 h-3 bg-cyan-400 rounded-full"></motion.div>
                        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} className="w-3 h-3 bg-pink-500 rounded-full"></motion.div>
                        <motion.div animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} className="w-3 h-3 bg-cyan-400 rounded-full"></motion.div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Dashboard;
