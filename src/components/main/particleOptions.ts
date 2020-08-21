export const particleOptions = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#922020",
            animation: {
                enable: true,
                speed: 20,
                sync: true
            }
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },

    }

}
