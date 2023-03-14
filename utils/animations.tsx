export const riseWithFade = {
    first: { 
        y: 100,
        opacity: 0,
    },
    second: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.7,
        },
    },
};

export const videoAnimation = {
    first: {
        y: 100,
        opacity: 0,
        scale: 0.8, 
    },
    second: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        },
    },
};

export const staggerChildren = {
    first: {
        transition: {
            delayChildren: 0.6, 
            staggerChildren: 0.2,
        },
    },

};

export const wordAnimation = {
    first: {
        y: 100,
    },
    second: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        },
    },
};