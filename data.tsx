import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Code, Database, Palette, Shield, Phone, Cloud, Speech, Github, Mail, MessageCircle  } from "lucide-react";

export const socialNetworks = [
   
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carlos-alvarez-dev/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />, // Icono de GitHub
        src: "https://github.com/walner-prog", // Enlace a tu perfil de GitHub
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />, // Icono de Email
        src: "mailto:tuemail@gmail.com", // Enlace para enviar un correo
    },
    {
        id: 4,
        logo: <MessageCircle size={30} strokeWidth={1} />, // Icono de WhatsApp
        src: "https://wa.me/50585429144?text=Hola%20si%20quieres%20consultar%20sobre%20mis%20servicios%20escríbeme", // Enlace de WhatsApp
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Sistema de Gestión Crediticia",
        subtitle: "Panel administrativo con Filament PHP",
        description: "Plataforma para gestionar créditos, abonos y saldos pendientes, con validación de información y filtros avanzados.",
        date: "Mar 2025",
    },
    {
        id: 2,
        title: "Trabajo Local - Marketplace de Servicios",
        subtitle: "Plataforma para conectar profesionales con clientes",
        description: "Desarrollé un marketplace donde técnicos y profesionales pueden promocionar sus servicios, recibir solicitudes y gestionar pagos en línea o en persona.",
        date: "Ene 2025",
    },

    {
        id: 3,
        title: "API de Catálogo de Libros Médicos",
         subtitle: "Desarrollada con Express.js, MySQL y seguridad integrada",
         description: "API para gestionar un catálogo de libros relacionados con la salud, nutrición y medicina. Incluye funcionalidades de búsqueda, filtrado, gestión de categorías y seguridad mediante autenticación con JWT.",
         date: "Nov 2024",
    },

    {
        id: 4,
        title: "Tiempo 360 - Aplicación Web de Clima",
        subtitle: "Desarrollada con JavaScript y API de Clima",
        description: "Aplicación web que proporciona información sobre el clima en tiempo real, pronósticos extendidos y detalles adicionales. Incluye funciones de búsqueda de ubicaciones, pronósticos a largo plazo y una interfaz amigable para el usuario.",
        date: "Ene 2024",
    },
    
    
    {
        id: 5,
        title: "Waterwise",
        subtitle: "Panel de Administración para Gestión de CAPS",
        description: "Sistema de gestión de agua potable diseñado para administrar las operaciones de empresas de agua. Este sistema incluye módulos clave como clientes, medidores, lecturas, tarifas, facturas, ingresos, egresos, empleados, reportes financieros, y gestión de usuarios y roles.",
        date: "Dic  2023",
    },
    {
        id: 6,
        title: "Colaboracion en proyecto APROVE",

        subtitle: "Hackathon Nicaragua 2023.",
        description: "Aprove : sitio web para el aprendizaje educativo en linea. ",
        date: "Oct 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 25,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    /*{
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },*/
];

export const serviceData = [
    {
      icon: <Code />,
      title: "Desarrollo Web",
      description: "Creación de aplicaciones escalables con Laravel, React, Vue.js y Node.js, optimizando la experiencia de usuario.",
    },
    {
      icon: <Database />,
      title: "Gestión de Bases de Datos",
      description: "Administración de bases de datos como MySQL, PostgreSQL y MongoDB, asegurando eficiencia y rendimiento.",
    },
    {
      icon: <Palette />,
      title: "Diseño de Interfaces",
      description: "Diseño responsivo y atractivo con Tailwind CSS, Materialize, centrado en el usuario.",
    },
    {
      icon: <Shield />,
      title: "Seguridad en Aplicaciones",
      description: "Implementación de seguridad con JWT, encriptación y protección contra vulnerabilidades comunes.",
    },
    {
      icon: <Phone />,
      title: "Desarrollo de Aplicaciones Móviles",
      description: "Creación de apps móviles nativas y multiplataforma con Kotlin, React Native y Jetpack Compose.",
    },
    {
      icon: <Cloud />,
      title: "Servicios en la Nube",
      description: "Despliegue en plataformas como DigitalOcean, AWS y Firebase, garantizando escalabilidad y disponibilidad.",
    },
  ];
  

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema de Gestión Crediticia",
        image: "/ultracredit.png",
        urlGithub: "https://github.com/walner-prog/ultracreditFilament",
        urlDemo: "https://codelatam.top/admin/login",
    },
    {
        id: 2,
        title: " Sistema de  Gestión de CAPS",
        image: "/landin-waterwise.png",
        urlGithub: "https://github.com/walner-prog/waterwise-prueba",
        urlDemo: "https://landing-waterwise.vercel.app/",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];