// ============================================
// PORTFOLIO - SCRIPT GENERAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // DETECTAR SI ESTAMOS EN LA LANDING PAGE
    // ============================================
    const isLandingPage = document.body.classList.contains('landing-page');
    
    if (isLandingPage) {
        // Script específico de landing page (minimalista)
        console.log('✨ Landing page cargada correctamente');
        return;
    }
    
    // ============================================
    // ELEMENTOS DEL DOM - PORTFOLIO COMPLETO
    // ============================================
    const markers = document.querySelectorAll('.marker');
    const modal = document.getElementById('location-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    
    // Avatar upload functionality
    const avatarWrap = document.querySelector('.avatar-wrap');
    const avatarImg = document.getElementById('avatar');
    const avatarInput = document.getElementById('avatar-input');

    // ============================================
    // MANEJO DEL MENÚ - ABRIR VENTANA CON TODAS LAS SECCIONES
    // ============================================
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const navTarget = link.getAttribute('data-nav');
            
            // Si clica en Mapa y el modal está abierto, ciérralo
            if (navTarget === 'mapa' && modal.classList.contains('active')) {
                closeModal();
            } else if (navTarget === 'mapa') {
                // Si está en el mapa, no hacer nada
                return;
            } else {
                // Todos los demás botones abren la ventana completa
                openCVWindow(navTarget);
            }
        });
    });

    // ============================================
    // FUNCIONES PARA EL MODAL
    // ============================================
    
    // Abrir ventana grande con todas las secciones
    window.openCVWindow = function(section) {
        // Armar HTML con todas las secciones
        let allContent = '';
        const sections = ['mapa', 'inicio', 'sobre-mi', 'formacion', 'proyectos', 'habilidades', 'contacto'];
        
        sections.forEach(sec => {
            const content = document.getElementById(`content-${sec}`);
            if (content) {
                allContent += `<div id="section-${sec}" class="cv-window-section">${content.innerHTML}</div>`;
            }
        });
        
        // Inyectar contenido
        modalBody.innerHTML = allContent;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll a la sección seleccionada
        setTimeout(() => {
            const sectionElement = document.getElementById(`section-${section}`);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
        
        // Reinicializar funcionalidades
        initAvatarUpload();
        animateSkillBars();
    };
    
    // Cerrar modal
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Limpiar contenido
        modalBody.innerHTML = '';
    };

    // Event listeners para cerrar el modal
    if (modalClose) {
        modalClose.addEventListener('click', window.closeModal);
    }

    // Cerrar modal al hacer clic fuera del contenido (en el fondo)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            window.closeModal();
        }
    });

    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            window.closeModal();
        }
    });

    // ============================================
    // MARCADORES INTERACTIVOS
    // ============================================
    
    markers.forEach((marker, index) => {
        // Añadir efecto de clic
        marker.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            
            // Mapeo de data-location a sections
            const locationMap = {
                'start': 'inicio',
                'about': 'sobre-mi',
                'projects': 'proyectos',
                'skills': 'habilidades',
                'contact': 'contacto',
                'treasure': 'inicio'
            };
            
            const section = locationMap[location] || location;
            
            // Efecto visual al hacer clic
            this.style.transform = 'translate(-50%, -50%) scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Abrir CV window con esa sección
            setTimeout(() => {
                openCVWindow(section);
            }, 200);
        });

        // Efecto de sonido hover (opcional - comentado por defecto)
        // marker.addEventListener('mouseenter', () => {
        //     // Aquí podrías añadir un sonido de hover
        //     // const hoverSound = new Audio('hover-sound.mp3');
        //     // hoverSound.play();
        // });
    });

    // ============================================
    // AVATAR UPLOAD
    // ============================================
    
    function initAvatarUpload() {
        const modalAvatarWrap = document.querySelector('.modal-body .avatar-wrap');
        const modalAvatarImg = document.querySelector('.modal-body #avatar');
        const modalAvatarInput = document.querySelector('.modal-body #avatar-input');
        
        if (modalAvatarWrap && modalAvatarImg && modalAvatarInput) {
            // Cargar avatar guardado
            try {
                const saved = localStorage.getItem('avatarData');
                if (saved) {
                    modalAvatarImg.src = saved;
                }
            } catch (e) {
                console.warn('No se pudo cargar el avatar desde localStorage');
            }
            
            // Click para seleccionar archivo
            modalAvatarWrap.addEventListener('click', () => {
                modalAvatarInput.click();
            });
            
            // Procesar imagen seleccionada
            modalAvatarInput.addEventListener('change', (ev) => {
                const file = ev.target.files && ev.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    const data = e.target.result;
                    modalAvatarImg.src = data;
                    
                    // Guardar en localStorage
                    try {
                        localStorage.setItem('avatarData', data);
                        // Actualizar también el avatar del CV
                        const cvAvatar = document.getElementById('cv-avatar');
                        if (cvAvatar) {
                            cvAvatar.src = data;
                        }
                    } catch (err) {
                        console.warn('No se pudo guardar el avatar en localStorage', err);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    }

    // ============================================
    // ANIMACIÓN DE BARRAS DE HABILIDADES
    // ============================================
    
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.modal-body .skill-bar');
        
        skillBars.forEach((bar, index) => {
            // Obtener el ancho objetivo (desde style o data-width)
            let targetWidth = bar.getAttribute('data-width') || bar.style.width;
            
            // Guardar el valor objetivo
            if (!bar.getAttribute('data-width') && bar.style.width) {
                bar.setAttribute('data-width', bar.style.width);
            }
            
            // Resetear a 0
            bar.style.width = '0%';
            
            // Animar cada barra con un pequeño delay progresivo
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 150 + (index * 100)); // Delay progresivo para efecto cascada
        });
    }

    // ============================================
    // ANIMACIÓN DE CAMINOS DEL MAPA
    // ============================================
    
    const paths = document.querySelectorAll('.path');
    
    // Observer para detectar cuando el mapa está visible
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar animación de los caminos
                paths.forEach((path, index) => {
                    setTimeout(() => {
                        path.style.strokeDashoffset = '0';
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.3 });

    const treasureMap = document.querySelector('.treasure-map');
    if (treasureMap) {
        mapObserver.observe(treasureMap);
    }

    // ============================================
    // FORMULARIO DE CONTACTO (Formspree)
    // ============================================

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const statusEl = contactForm.querySelector('.form-status');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const replyToInput = contactForm.querySelector('input[name="_replyto"]');
        
        // Actualizar _replyto cada vez que cambie el email
        if (emailInput && replyToInput) {
            emailInput.addEventListener('change', () => {
                replyToInput.value = emailInput.value;
            });
        }
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (statusEl) {
                statusEl.textContent = 'Enviando...';
                statusEl.className = 'form-status';
            }
            try {
                const res = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(contactForm)
                });
                if (!res.ok) throw new Error('request-failed');
                if (statusEl) {
                    statusEl.textContent = 'Mensaje enviado. ¡Gracias por escribir!';
                    statusEl.classList.add('success');
                }
                contactForm.reset();
            } catch (err) {
                if (statusEl) {
                    statusEl.textContent = 'No se pudo enviar. Inténtalo de nuevo o escribe a scarmona700@gmail.com';
                    statusEl.classList.add('error');
                }
            }
        });
    }

    // ============================================
    // EFECTOS DE PARALLAX EN DECORACIONES
    // ============================================
    
    const decorations = document.querySelectorAll('.map-decoration');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        decorations.forEach((decoration, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            decoration.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // ============================================
    // MENSAJE DE BIENVENIDA AUTOMÁTICO
    // ============================================
    
    // Mostrar automáticamente el Puerto de Inicio al cargar la página
    setTimeout(() => {
        // Solo mostrar si no se ha visitado antes (opcional)
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            if (typeof openLocation === 'function') {
                openLocation('start');
            } else if (typeof openCVWindow === 'function') {
                openCVWindow('inicio');
            }
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, 1500);

    // ============================================
    // EASTER EGG: COMBO DE TECLAS SECRETO
    // ============================================
    
    let secretCode = [];
    const secretSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    
    document.addEventListener('keydown', (e) => {
        secretCode.push(e.key);
        secretCode = secretCode.slice(-secretSequence.length);
        
        if (secretCode.join(',') === secretSequence.join(',')) {
            activateEasterEgg();
        }
    });

    function activateEasterEgg() {
        // Efecto especial cuando se activa el easter egg
        const map = document.querySelector('.treasure-map');
        map.style.animation = 'none';
        setTimeout(() => {
            map.style.animation = 'treasure-shine 1s ease-in-out 3';
        }, 10);
        
        // Mostrar mensaje especial
        alert('🎉 ¡Has desbloqueado el código secreto del desarrollador! 🎉');
        
        // Activar efecto dorado en todos los marcadores
        markers.forEach(marker => {
            marker.querySelector('.marker-glow').style.opacity = '1';
            setTimeout(() => {
                marker.querySelector('.marker-glow').style.opacity = '';
            }, 3000);
        });
    }

    // ============================================
    // ANIMACIÓN SUAVE DE SCROLL (si se añaden secciones)
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ============================================
    // CONTADOR DE VISITAS A UBICACIONES
    // ============================================
    
    function trackLocationVisit(location) {
        let visits = JSON.parse(localStorage.getItem('locationVisits') || '{}');
        visits[location] = (visits[location] || 0) + 1;
        localStorage.setItem('locationVisits', JSON.stringify(visits));
        
        // Desbloquear el tesoro cuando se visiten todas las ubicaciones
        const requiredLocations = ['start', 'about', 'projects', 'skills', 'contact'];
        const allVisited = requiredLocations.every(loc => visits[loc] > 0);
        
        if (allVisited) {
            unlockTreasure();
        }
    }

    function unlockTreasure() {
        const treasureMarker = document.querySelector('.marker-treasure');
        if (treasureMarker) {
            treasureMarker.classList.add('unlocked');
            treasureMarker.querySelector('.marker-glow').style.opacity = '1';
            
            // Efecto visual de desbloqueo
            treasureMarker.style.animation = 'treasure-shine 1s ease-in-out 5';
        }
    }

    // Modificar openLocation para trackear visitas
    const originalOpenLocation = window.openLocation;
    window.openLocation = function(location) {
        trackLocationVisit(location);
        originalOpenLocation(location);
    };

    // ============================================
    // RESPONSIVE: AJUSTAR TAMAÑO EN MÓVILES
    // ============================================
    
    function adjustForMobile() {
        if (window.innerWidth < 768) {
            // Ajustes específicos para móviles
            markers.forEach(marker => {
                const label = marker.querySelector('.marker-label');
                if (label) {
                    // Mostrar labels siempre en móvil
                    label.style.opacity = '0.8';
                }
            });
        }
    }

    adjustForMobile();
    window.addEventListener('resize', adjustForMobile);

    // ============================================
    // PRELOAD DE CONTENIDO
    // ============================================
    
    // Cargar todas las fuentes y recursos
    if (document.fonts) {
        document.fonts.ready.then(() => {
            console.log('✨ Todas las fuentes cargadas - Mapa listo para la aventura');
        });
    }

    console.log('🗺️ Mapa del Tesoro inicializado correctamente');
    console.log('💡 Tip: Prueba el código Konami (↑↑↓↓←→←→) para descubrir un secreto...');

});
