import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../assets/images/service-img-1.png';
import image2 from '../../assets/images/service-img-1.png';
import image3 from '../../assets/images/service-img-1.png';
import image4 from '../../assets/images/service-img-1.png';
import image5 from '../../assets/images/service-img-1.png';
import image6 from '../../assets/images/service-img-1.png';
import image7 from '../../assets/images/service-img-1.png';
import image8 from '../../assets/images/service-img-1.png';
import image9 from '../../assets/images/service-img-1.png';
import image10 from '../../assets/images/service-img-1.png';

const EventListing = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [openAccordion, setOpenAccordion] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filters = [
        { name: 'Wedding Events', value: 'Wedding', subOptions: ['Ceremony', 'Reception'] },
        { name: 'Birthday Events', value: 'Birthday', subOptions: ['Kids', 'Adults'] },
        { name: 'Holy Communion/Baptism', value: 'Holy', subOptions: ['Communion', 'Baptism'] },
        { name: 'Parties', value: 'Parties', subOptions: ['Cocktail', 'Dance'] },
        { name: 'Annual Events', value: 'Annual', subOptions: ['Gala', 'Award'] },
        { name: 'Corporate Events', value: 'Corporate', subOptions: ['Conference', 'Team Building'] },
        { name: 'Music Festivals', value: 'Music', subOptions: ['Rock', 'Jazz'] },
        { name: 'Other Events', value: 'Other', subOptions: ['Charity', 'Private'] },
    ];

    const EventListingItems = [
        { id: 1, image: image1, title: 'Unforgettable Live Music', description: 'We specialize in creating magical wedding moments with exceptional live music.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 2, image: image2, title: 'Romantic String Quartet', description: 'Elegant string quartet performances for your wedding ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 3, image: image3, title: 'Classical Piano Serenade', description: 'Soothing piano melodies to elevate your wedding ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 4, image: image4, title: 'Vocal Harmony Ensemble', description: 'Harmonious vocal performances for a heartfelt ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 5, image: image5, title: 'Acoustic Guitar Bliss', description: 'Intimate acoustic guitar music for your wedding vows.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 6, image: image6, title: 'Harpist Elegance', description: 'Graceful harp music to set a serene tone for your ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 7, image: image7, title: 'Traditional Organ Music', description: 'Classic organ performances for a timeless wedding ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 8, image: image8, title: 'Choral Wedding Hymns', description: 'Inspiring choral music for a spiritual ceremony experience.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 9, image: image9, title: 'Flute and Violin Duo', description: 'Delicate flute and violin melodies for your wedding.', filter: 'Wedding', subFilter: 'Ceremony' },
        { id: 10, image: image10, title: 'Modern Ceremony Mix', description: 'Contemporary music arrangements for a unique ceremony.', filter: 'Wedding', subFilter: 'Ceremony' },
    ];

    const filteredItems = selectedFilter === 'All'
        ? EventListingItems
        : EventListingItems.filter(item => {
            const filterObj = filters.find(f => f.value === item.filter);
            if (!filterObj) return false;
            return item.filter === selectedFilter ||
                (filterObj.subOptions.includes(selectedFilter) && item.subFilter === selectedFilter);
        });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Animation variants for filter buttons
    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 },
    };

    // Animation variants for accordion
    const accordionVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
    };

    // Animation variants for event cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
    };

    // Animation variants for pagination buttons
    const paginationVariants = {
        hover: { scale: 1.1, transition: { duration: 0.2 } },
        disabled: { opacity: 0.5, cursor: 'not-allowed' },
    };

    // Animation variants for no events message
    const noEventsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <div className="text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 bg-[#0D000F] p-6">
                    <h2 className="text-2xl font-bold mb-6">Filter By</h2>
                    <div className="space-y-4">
                        {filters.map((filter) => (
                            <div key={filter.value}>
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => {
                                        setOpenAccordion(openAccordion === filter.value ? null : filter.value);
                                        setCurrentPage(1);
                                    }}
                                    className="flex items-center justify-between w-full text-left pt-4 pb-8 border-b border-gray-700 transition-colors"
                                >
                                    <span>{filter.name}</span>
                                    <motion.span
                                        animate={{ rotate: openAccordion === filter.value ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {openAccordion === filter.value ? '-' : '+'}
                                    </motion.span>
                                </motion.button>
                                <AnimatePresence>
                                    {openAccordion === filter.value && (
                                        <motion.div
                                            variants={accordionVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="mt-2 space-y-2"
                                        >
                                            {filter.subOptions.map((subOption) => (
                                                <motion.button
                                                    key={subOption}
                                                    variants={buttonVariants}
                                                    whileHover="hover"
                                                    whileTap="tap"
                                                    onClick={() => {
                                                        setSelectedFilter(subOption);
                                                        setCurrentPage(1);
                                                    }}
                                                    className={`w-full text-left py-2 px-4 text-xs rounded-lg transition-colors ${selectedFilter === subOption ? 'bg-[#F96141] text-textGray' : 'bg-textGray text-black'
                                                        }`}
                                                >
                                                    {subOption}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredItems.length === 0 ? (
                            <motion.div
                                variants={noEventsVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="col-span-3 flex justify-center items-center h-64"
                                role="alert"
                                aria-live="polite"
                            >
                                <p className="text-xl font-semibold text-gray-400">No Events Available</p>
                            </motion.div>
                        ) : (
                            paginatedItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="relative"
                                >
                                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                    <div className="w-full bg-black bg-opacity-70 rounded-b-lg">
                                        <h3 className="text-lg font-semibold py-4">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                    {filteredItems.length > 0 && (
                        <div className="col-span-1 sm:col-span-3 flex justify-center items-center mt-4">
                            <motion.button
                                variants={paginationVariants}
                                whileHover={currentPage !== 1 ? 'hover' : 'disabled'}
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 mx-1 rounded-lg ${currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#F96141] hover:bg-[#E55030]'
                                    }`}
                            >
                                Previous
                            </motion.button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <motion.button
                                    key={index + 1}
                                    variants={paginationVariants}
                                    whileHover="hover"
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-[#F96141] text-white' : 'bg-textGray text-black hover:bg-gray-300'
                                        }`}
                                >
                                    {index + 1}
                                </motion.button>
                            ))}
                            <motion.button
                                variants={paginationVariants}
                                whileHover={currentPage !== totalPages ? 'hover' : 'disabled'}
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 mx-1 rounded-lg ${currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#F96141] hover:bg-[#E55030]'
                                    }`}
                            >
                                Next
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventListing;