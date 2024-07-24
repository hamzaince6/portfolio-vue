/*
==================================================
Project:      [VueJS]
Author:       [https://github.com/hamzaince6/]
Version:      1.0.0
Last Update:  [20.07.2024]
==================================================
*/

// GSAP animation for icons
import { gsap } from 'gsap';

// GSAP animation for Stacks Section
export const animateIcons = () => {
    const icons = document.querySelectorAll('.stacks-icon div');

    const iconColors = {
        'fa-vuejs': '#41B883',   // VueJS green
        'fa-figma': '#F24E1E',   // Figma red
        'fa-react': '#61DAFB',   // React blue
        'fa-x': '#FF61F6'        // Adobe XD pink
    };

    gsap.from(icons, {
        opacity: 0,
        y: -30, // Change this value to adjust the top-to-bottom animation
        scale: 0.8,
        duration: 1.5,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        onStart: () => {
            icons.forEach(icon => {
                const iconClass = icon.querySelector('i').classList[1];
                const color = iconColors[iconClass] || 'rgba(255, 255, 255, 0.6)';
                gsap.set(icon, {
                    filter: `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 5px ${color})`
                });
            });
        },
        onComplete: () => {
            // Remove glow effect after animation
            gsap.to(icons, {
                filter: 'none',
                duration: 0.5
            });
        }
    });

    gsap.to('.stacks-icon div', {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'power1.inOut',
        paused: true
    });

    document.querySelectorAll('.stacks-icon div').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const iconClass = icon.querySelector('i').classList[1];
            const color = iconColors[iconClass] || '#FFFFFF';  // default white if not found
            gsap.to(icon.querySelector('i'), { color: color, duration: 0.4 });
            gsap.to(icon, { scale: 1.2, duration: 0.4 });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon.querySelector('i'), { color: '#FFFFFF', duration: 0.4 });
            gsap.to(icon, { scale: 1, duration: 0.4 });
        });
    });
};

// GSAP animation for Project Section
export const animateProjects = () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        const numberElement = project.querySelector('.project-number h1');
        const titleElement = project.querySelector('.project-title');

        // Animate project and project title from top to bottom
        gsap.fromTo(project,
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power1.out',
                delay: 0.3
            }
        );

        gsap.fromTo(titleElement,
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power1.out',
                delay: 0.5
            }
        );

        // Ensure numberElement is not null and contains text
        if (numberElement && numberElement.textContent.trim()) {
            const finalValue = parseInt(numberElement.textContent.trim(), 10);

            // Animate the number count-up
            gsap.fromTo(numberElement,
                { innerText: 0 },
                {
                    innerText: finalValue,
                    duration: 2,
                    ease: 'power1.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        numberElement.innerHTML = Math.ceil(numberElement.innerText) + '<i class="fas fa-plus project-icon"></i>';
                    }
                }
            );
        }
    });
};

// GSAP animation for about card content
export const animateAboutContent = () => {
    const aboutCards = document.querySelectorAll('.about-card');

    // Initial animation for about cards
    gsap.from(aboutCards, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
        ease: 'power1.out'
    });

    aboutCards.forEach((card) => {
        const paragraphs = card.querySelectorAll('.about-card-content p');
        gsap.from(paragraphs, {
            opacity: 0,
            y: 20,
            rotation: 10,
            duration: 1.5,
            stagger: 0.3,
            ease: 'power1.out',
            delay: 0.5
        });

        // Add hover effects for each card
        card.addEventListener('mouseover', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.4)',
                duration: 0.3,
                ease: 'power1.out'
            });

            gsap.to(card.querySelectorAll('.about-card-content p'), {
                color: '#916CE7',
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                duration: 0.3,
                ease: 'power1.out'
            });

            gsap.to(card.querySelectorAll('.about-card-content p'), {
                color: 'white',
                duration: 0.3,
                ease: 'power1.out'
            });
        });
    });
};

// GSAP animation for Me Section
export const animateMeSection = () => {
    const meSection = document.querySelector('.me-section');

    if (meSection) {
        // Başlık resmi animasyonu
        const headerImg = meSection.querySelector('.me-header img');
        if (headerImg) {
            gsap.from(headerImg, {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: 'power1.out',
                delay: 0.2
            });
        }

        // Başlık metinlerinin animasyonu
        const headerTexts = meSection.querySelectorAll('.me-header-text h2, .me-header-text h4');
        gsap.from(headerTexts, {
            opacity: 0,
            y: -20,
            duration: 1,
            stagger: 0.3,
            ease: 'power1.out',
            delay: 0.5
        });

        // Çevrimiçi işler kısmının animasyonu
        const onlineWorks = meSection.querySelector('.online-works');
        if (onlineWorks) {
            gsap.from(onlineWorks, {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: 'back.out(1.7)',
                delay: 0.8
            });
        }

        // Özgeçmiş linkinin animasyonu
        const resumeLink = meSection.querySelector('.resume');
        if (resumeLink) {
            gsap.from(resumeLink, {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: 'power1.out',
                delay: 1.1
            });
        }

        // İçerik öğelerinin animasyonu
        const meContentItems = meSection.querySelectorAll('.me-content .item');
        gsap.from(meContentItems, {
            opacity: 0,
            y: -20,
            duration: 1,
            stagger: 0.3,
            ease: 'power1.out',
            delay: 1.4
        });

        // Footer bağlantılarının animasyonu
        const footerLinks = meSection.querySelectorAll('.me-footer .url-instagram, .me-footer .url-whatsapp');
        gsap.from(footerLinks, {
            opacity: 0,
            y: -20,
            duration: 1,
            stagger: 0.3,
            ease: 'back.out(1.7)',
            delay: 2
        });

        // GitHub ve beceriler kısmının animasyonu
        const githubSkills = meSection.querySelector('.me-github-skilss');
        if (githubSkills) {
            gsap.from(githubSkills, {
                opacity: 0,
                y: -30,
                duration: 1,
                ease: 'power2.out',
                delay: 2.3
            });
        }

        // Tüm bölümün yukarıdan aşağıya animasyonu
        gsap.from(meSection, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power2.out',
            delay: 0
        });
    }
};

// GSAP hover effects for Me Section
export const hoverEffectsMeSection = () => {
    const meSection = document.querySelector('.me-section');

    if (meSection) {
        const headerImg = meSection.querySelector('.me-header img');
        const headerTexts = meSection.querySelectorAll('.me-header-text h2, .me-header-text h4');
        const onlineWorks = meSection.querySelector('.online-works');
        const resumeLink = meSection.querySelector('.resume');
        const meContentItems = meSection.querySelectorAll('.me-content .item');
        const footerLinks = meSection.querySelectorAll('.me-footer .url-instagram, .me-footer .url-whatsapp');

        // Hover effects for header image
        gsap.to(headerImg, {
            scale: 1.1,
            duration: 0.5,
            ease: 'power1.out',
            paused: true,
            overwrite: 'auto'
        });

        headerImg.addEventListener('mouseenter', () => gsap.to(headerImg, { scale: 1.1 }));
        headerImg.addEventListener('mouseleave', () => gsap.to(headerImg, { scale: 1 }));

        // Hover effects for header texts
        headerTexts.forEach(text => {
            gsap.to(text, {
                color: '#ff007a',
                duration: 0.5,
                ease: 'power1.out',
                paused: true,
                overwrite: 'auto'
            });

            text.addEventListener('mouseenter', () => gsap.to(text, { color: '#ff007a', scale: 1.1 }));
            text.addEventListener('mouseleave', () => gsap.to(text, { color: '#ffffff', scale: 1 }));
        });

        // Hover effects for online works section
        gsap.to(onlineWorks, {
            scale: 1.1,
            duration: 0.5,
            ease: 'power1.out',
            paused: true,
            overwrite: 'auto'
        });

        onlineWorks.addEventListener('mouseenter', () => gsap.to(onlineWorks, { scale: 1.1 }));
        onlineWorks.addEventListener('mouseleave', () => gsap.to(onlineWorks, { scale: 1 }));

        // Hover effects for resume link
        gsap.to(resumeLink, {
            backgroundColor: '#63e6be',
            color: '#fff',
            duration: 0.5,
            ease: 'power1.out',
            paused: true,
            overwrite: 'auto'
        });

        resumeLink.addEventListener('mouseenter', () => gsap.to(resumeLink, { color: '#ff007a', scale: 1.1 }));
        resumeLink.addEventListener('mouseleave', () => gsap.to(resumeLink, { color: '#ff007a', scale: 1 }));

        // Hover effects for me content items
        meContentItems.forEach(item => {
            gsap.to(item, {
                scale: 1.1,
                rotation: 5,
                duration: 0.5,
                ease: 'power1.out',
                paused: true,
                overwrite: 'auto'
            });

            item.addEventListener('mouseenter', () => gsap.to(item, { scale: 1.1, rotation: 5 }));
            item.addEventListener('mouseleave', () => gsap.to(item, { scale: 1, rotation: 0 }));
        });

        // Hover effects for footer links
        footerLinks.forEach(link => {
            gsap.to(link, {
                scale: 1.1,
                color: '#ff007a',
                duration: 0.5,
                ease: 'power1.out',
                paused: true,
                overwrite: 'auto'
            });

            link.addEventListener('mouseenter', () => gsap.to(link, { scale: 1.1, color: '#ff007a' }));
            link.addEventListener('mouseleave', () => gsap.to(link, { scale: 1, color: '#ffffff' }));
        });
    }
};

// GSAP animation for social media
export const animateFollowMeSection = () => {
    const followMeSection = document.querySelector('.follow-me');

    if (followMeSection) {
        // Tüm bölümün yukarıdan aşağıya animasyonu
        gsap.from(followMeSection, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power2.out',
            delay: 0
        });

        // Başlık ve alt başlığı animasyonla yukarıdan aşağıya
        const followMeTitle = followMeSection.querySelector('.follow-me-title h2');
        gsap.from(followMeTitle, {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2
        });

        const followMeSubtitle = followMeSection.querySelector('.follow-me-subtitle h4');
        gsap.from(followMeSubtitle, {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: 'power2.out',
            delay: 0.5
        });

        // Sosyal medya öğelerini yukarıdan aşağıya dizme animasyonu
        const socialItems = followMeSection.querySelectorAll('.socials .socaial-item');
        gsap.from(socialItems, {
            opacity: 0,
            y: -30,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out',
            delay: 0.8
        });

        // GitHub diller kısmının animasyonu
        const githubLanguage = followMeSection.querySelector('.github-language');
        if (githubLanguage) {
            gsap.from(githubLanguage, {
                opacity: 0,
                y: -30,
                duration: 1,
                ease: 'power2.out',
                delay: 1.2
            });
        }

        // Sosyal medya öğeleri için box-shadow ekleme ve hover efektleri
        socialItems.forEach((item, index) => {
            const icon = item.querySelector('i');
            const boxShadowColor = getComputedStyle(icon).color;

            // Box-shadow animasyonu
            gsap.fromTo(item, {
                boxShadow: `0 0 0 ${boxShadowColor}`
            }, {
                boxShadow: `0 0 10px ${boxShadowColor}`,
                duration: 1.2,
                ease: 'power2.out',
                delay: 1.5 + index * 0.3
            });

            // Hover efektleri
            gsap.to(item, {
                scale: 1.2,
                duration: 0.4,
                ease: 'power2.out',
                paused: true,
                overwrite: 'auto'
            });

            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.2,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });

        // Sosyal medya ikonları için hover efektleri
        const socialIcons = followMeSection.querySelectorAll('.social-item i');
        socialIcons.forEach(icon => {
            gsap.to(icon, {
                rotation: 360,
                duration: 1,
                ease: 'power2.inOut',
                paused: true,
                overwrite: 'auto'
            });

            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    rotation: 360,
                    duration: 1,
                    ease: 'power2.inOut'
                });
            });
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    rotation: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                });
            });
        });
    }
};

// GSAP animation for Project Section
export const animateProjectSection = () => {
    const projectCard = document.querySelector('.project-card');

    if (projectCard) {
        // Animate project card
        gsap.from(projectCard, {
            opacity: 0,
            x: -50,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5
        });

        const projectIframe = projectCard.querySelector('iframe');
        gsap.from(projectIframe, {
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: 'power2.out',
            delay: 1
        });

        gsap.to(projectIframe, {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'sine.inOut'
        });
    }
};

// GSAP hover effects for Project Section
export const hoverEffectsProjectSection = () => {
    const projectCard = document.querySelector('.project-card');

    if (projectCard) {
        const projectIframe = projectCard.querySelector('iframe');

        // Hover effect for project card
        gsap.to(projectCard, {
            scale: 1.05,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power1.out',
            paused: true,
            overwrite: 'auto'
        });

        projectCard.addEventListener('mouseenter', () => {
            gsap.to(projectCard, { scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' });
        });
        projectCard.addEventListener('mouseleave', () => {
            gsap.to(projectCard, { scale: 1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' });
        });

        // Hover effect for project iframe
        gsap.to(projectIframe, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power1.out',
            paused: true,
            overwrite: 'auto'
        });

        projectIframe.addEventListener('mouseenter', () => {
            gsap.to(projectIframe, { scale: 1.05 });
        });
        projectIframe.addEventListener('mouseleave', () => {
            gsap.to(projectIframe, { scale: 1 });
        });
    }
};

// GSAP animation for Gallery Section
export const animateGallerySection = () => {
    const gallerySection = document.querySelector('.gallery');

    if (gallerySection) {
        // Animate gallery section
        gsap.from(gallerySection, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5
        });

        const swiperSlides = gallerySection.querySelectorAll('.swiper-slide');
        gsap.from(swiperSlides, {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            delay: 1
        });

        const galleryImages = gallerySection.querySelectorAll('.gallery-img');
        gsap.to(galleryImages, {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'sine.inOut'
        });
    }
};

