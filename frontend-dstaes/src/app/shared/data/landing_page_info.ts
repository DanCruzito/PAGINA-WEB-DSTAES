import { LandingPageInfoInterface } from "../interfaces/composite/landing_page_info.interface";

export const landing_page_info: LandingPageInfoInterface =
{
  "company": {
    "id": 1,
    "name": "DSTAES",
    "legal_name": "DSTAES Soluciones Tecnológicas S.R.L.",
    "slogan": "Transformamos ideas en experiencias digitales",
    "description": "Somos una empresa boliviana especializada en desarrollo de software, aplicaciones web y móviles, y sistemas a medida para negocios que quieren crecer en la era digital.",
    "mission": "Impulsar el crecimiento de nuestros clientes a través de soluciones tecnológicas innovadoras, confiables y adaptadas a sus necesidades reales.",
    "vision": "Ser la empresa de desarrollo de software líder en Bolivia, reconocida por la calidad de nuestros productos y el impacto en el crecimiento de nuestros clientes.",
    "email": "hola@dstaes.com",
    "phone": "+591 700 12345",
    "address": "Av. Arce N°2450, Edificio Torre Empresarial, Piso 8, La Paz, Bolivia",
    "logo": "/uploads/company/logo.svg",
    "favicon": "/uploads/company/favicon.ico",
    "created_at": new Date("2025-11-02T09:00:00Z"),
    "updated_at": new Date("2026-08-20T14:30:00Z"),
    "deleted_at": undefined
  },

  "site_settings": {
    "id": 1,
    "company_id": 1,
    "primary_color": "#2F6BFF",
    "secondary_color": "#111827",
    "title": "DSTAES — Desarrollo de Software a Medida",
    "subtitle": "Transformamos ideas en experiencias digitales",
    "image": "/uploads/site/og-image.jpg",
    "seo_tittle": "DSTAES | Desarrollo Web, Apps y Sistemas a Medida en Bolivia",
    "seo_description": "En DSTAES desarrollamos sitios web, aplicaciones móviles y sistemas empresariales a medida. Más de 150 proyectos completados y 7 años de experiencia.",
    "created_at": new Date("2025-11-02T09:00:00Z"),
    "updated_at": new Date("2026-08-20T14:30:00Z"),
    "deleted_at": undefined
  },

  "social_links": [
    {
      "id": 1,
      "company_id": 1,
      "platform": "Facebook",
      "url": "https://facebook.com/dstaes",
      "icon": "facebook",
      "display_order": 1,
      "is_active": true,
      "created_at": new Date("2025-11-02T09:05:00Z"),
      "updated_at": new Date("2025-11-02T09:05:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 2,
      "company_id": 1,
      "platform": "Instagram",
      "url": "https://instagram.com/dstaes",
      "icon": "instagram",
      "display_order": 2,
      "is_active": true,
      "created_at": new Date("2025-11-02T09:05:00Z"),
      "updated_at": new Date("2025-11-02T09:05:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 3,
      "company_id": 1,
      "platform": "LinkedIn",
      "url": "https://linkedin.com/company/dstaes",
      "icon": "linkedin",
      "display_order": 3,
      "is_active": true,
      "created_at": new Date("2025-11-02T09:05:00Z"),
      "updated_at": new Date("2025-11-02T09:05:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 4,
      "company_id": 1,
      "platform": "YouTube",
      "url": "https://youtube.com/@dstaes",
      "icon": "youtube",
      "display_order": 4,
      "is_active": false,
      "created_at": new Date("2025-11-02T09:05:00Z"),
      "updated_at": new Date("2026-03-11T10:00:00Z"),
      "deleted_at": undefined
    }
  ],

  "services": [
    {
      "id": 1,
      "slug": "desarrollo-web",
      "title": "Desarrollo Web",
      "short_description": "Sitios y aplicaciones web a medida, rápidos y escalables.",
      "description": "Construimos sitios corporativos, plataformas y aplicaciones web sobre arquitecturas modernas, priorizando el rendimiento, la seguridad y la escalabilidad del producto.",
      "icon": "code",
      "image": "/uploads/services/desarrollo-web.jpg",
      "is_featured": true,
      "is_active": true,
      "display_order": 1,
      "view_count": 1284,
      "created_at": new Date("2025-11-05T10:00:00Z"),
      "updated_at": new Date("2026-07-01T08:00:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 2,
      "slug": "apps-moviles",
      "title": "Apps Móviles",
      "short_description": "Aplicaciones nativas e híbridas para iOS y Android.",
      "description": "Desarrollamos aplicaciones móviles multiplataforma con Flutter y nativas cuando el proyecto lo requiere, integradas a tus sistemas existentes.",
      "icon": "smartphone",
      "image": "/uploads/services/apps-moviles.jpg",
      "is_featured": true,
      "is_active": true,
      "display_order": 2,
      "view_count": 967,
      "created_at": new Date("2025-11-05T10:05:00Z"),
      "updated_at": new Date("2026-06-15T08:00:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 3,
      "slug": "diseno-ui-ux",
      "title": "Diseño UI/UX",
      "short_description": "Interfaces claras y atractivas basadas en investigación real.",
      "description": "Diseñamos experiencias centradas en el usuario: research, wireframes, prototipos interactivos y sistemas de diseño listos para desarrollo.",
      "icon": "layout",
      "image": "/uploads/services/diseno-ui-ux.jpg",
      "is_featured": false,
      "is_active": true,
      "display_order": 3,
      "view_count": 542,
      "created_at": new Date("2025-11-05T10:10:00Z"),
      "updated_at": new Date("2026-04-22T08:00:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 4,
      "slug": "cloud-devops",
      "title": "Cloud & DevOps",
      "short_description": "Infraestructura en la nube, CI/CD y monitoreo continuo.",
      "description": "Migramos, optimizamos y administramos infraestructura en AWS y GCP, con pipelines de integración y despliegue continuo para tu equipo.",
      "icon": "cloud",
      "image": "/uploads/services/cloud-devops.jpg",
      "is_featured": false,
      "is_active": true,
      "display_order": 4,
      "view_count": 388,
      "created_at": new Date("2025-11-05T10:15:00Z"),
      "updated_at": new Date("2026-02-10T08:00:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 5,
      "slug": "consultoria-ti",
      "title": "Consultoría TI",
      "short_description": "Acompañamiento estratégico para decisiones tecnológicas.",
      "description": "Analizamos tus procesos y tecnología actual para recomendar la arquitectura, herramientas y hoja de ruta más adecuadas para tu negocio.",
      "icon": "briefcase",
      "image": "/uploads/services/consultoria-ti.jpg",
      "is_featured": false,
      "is_active": true,
      "display_order": 5,
      "view_count": 201,
      "created_at": new Date("2025-11-05T10:20:00Z"),
      "updated_at": new Date("2026-01-30T08:00:00Z"),
      "deleted_at": undefined
    }
  ],

  "packages": [
    {
      "id": 1,
      "slug": "landing-page",
      "name": "Landing Page",
      "short_description": "Ideal para validar una idea o presentar tu marca.",
      "description": "Paquete de entrada pensado para negocios y emprendimientos que necesitan una presencia web profesional en poco tiempo.",
      "price": 2500.00,
      "currency": "BOB",
      "Is_featured": false,
      "is_active": true,
      "display_order": 1,
      "view_count": 640,
      "created_at": new Date("2025-11-10T09:00:00Z"),
      "updated_at": new Date("2026-05-01T09:00:00Z"),
      "deleted_at": undefined,
      "features": [
        { "id": 1, "package_id": 1, "title": "1 página a medida", "description": "Diseño y desarrollo de una landing page única.", "is_included": true, "display_order": 1, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 2, "package_id": 1, "title": "Diseño responsive", "description": "Adaptado a móvil, tablet y escritorio.", "is_included": true, "display_order": 2, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 3, "package_id": 1, "title": "Formulario de contacto", "description": "Formulario con envío de notificaciones por correo.", "is_included": true, "display_order": 3, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 4, "package_id": 1, "title": "SEO básico", "description": "Metadatos y estructura optimizada para buscadores.", "is_included": true, "display_order": 4, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 5, "package_id": 1, "title": "Panel de administración", "description": "Edición de contenido sin tocar código.", "is_included": false, "display_order": 5, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 6, "package_id": 1, "title": "Blog integrado", "description": "Sección de artículos y noticias.", "is_included": false, "display_order": 6, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 7, "package_id": 1, "title": "Integraciones a medida", "description": "Conexión con CRMs, pasarelas de pago u otros sistemas.", "is_included": false, "display_order": 7, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined },
        { "id": 8, "package_id": 1, "title": "Soporte prioritario", "description": "Atención con tiempo de respuesta garantizado.", "is_included": false, "display_order": 8, "created_at": new Date("2025-11-10T09:00:00Z"), "updated_at": new Date("2025-11-10T09:00:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 2,
      "slug": "profesional",
      "name": "Profesional",
      "short_description": "Para negocios que necesitan un sitio web completo.",
      "description": "Paquete completo con panel administrable, blog y optimización SEO, pensado para pymes en crecimiento.",
      "price": 6800.00,
      "currency": "BOB",
      "Is_featured": true,
      "is_active": true,
      "display_order": 2,
      "view_count": 1120,
      "created_at": new Date("2025-11-10T09:10:00Z"),
      "updated_at": new Date("2026-08-01T09:00:00Z"),
      "deleted_at": undefined,
      "features": [
        { "id": 9, "package_id": 2, "title": "Hasta 8 páginas", "description": "Estructura completa de sitio corporativo.", "is_included": true, "display_order": 1, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 10, "package_id": 2, "title": "Diseño responsive", "description": "Adaptado a móvil, tablet y escritorio.", "is_included": true, "display_order": 2, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 11, "package_id": 2, "title": "Panel de administración", "description": "Edición de contenido sin tocar código.", "is_included": true, "display_order": 3, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 12, "package_id": 2, "title": "Blog integrado", "description": "Sección de artículos y noticias.", "is_included": true, "display_order": 4, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 13, "package_id": 2, "title": "SEO on-page", "description": "Optimización avanzada de contenido y metadatos.", "is_included": true, "display_order": 5, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 14, "package_id": 2, "title": "Formulario de contacto", "description": "Formulario con envío de notificaciones por correo.", "is_included": true, "display_order": 6, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 15, "package_id": 2, "title": "Integraciones a medida", "description": "Conexión con CRMs, pasarelas de pago u otros sistemas.", "is_included": false, "display_order": 7, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined },
        { "id": 16, "package_id": 2, "title": "Soporte prioritario", "description": "Atención con tiempo de respuesta garantizado.", "is_included": false, "display_order": 8, "created_at": new Date("2025-11-10T09:10:00Z"), "updated_at": new Date("2025-11-10T09:10:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 3,
      "slug": "ecommerce",
      "name": "E-commerce",
      "short_description": "Tienda en línea lista para vender.",
      "description": "Catálogo de productos, carrito, checkout y pasarela de pagos integrada para empezar a vender en línea.",
      "price": 9200.00,
      "currency": "BOB",
      "Is_featured": false,
      "is_active": true,
      "display_order": 3,
      "view_count": 754,
      "created_at": new Date("2025-11-10T09:20:00Z"),
      "updated_at": new Date("2026-06-18T09:00:00Z"),
      "deleted_at": undefined,
      "features": [
        { "id": 17, "package_id": 3, "title": "Catálogo de productos", "description": "Gestión ilimitada de productos y categorías.", "is_included": true, "display_order": 1, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 18, "package_id": 3, "title": "Carrito y checkout", "description": "Proceso de compra optimizado para conversión.", "is_included": true, "display_order": 2, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 19, "package_id": 3, "title": "Pasarela de pagos", "description": "Integración con tarjeta y pagos locales.", "is_included": true, "display_order": 3, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 20, "package_id": 3, "title": "Panel de administración", "description": "Edición de contenido sin tocar código.", "is_included": true, "display_order": 4, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 21, "package_id": 3, "title": "SEO on-page", "description": "Optimización avanzada de contenido y metadatos.", "is_included": true, "display_order": 5, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 22, "package_id": 3, "title": "Blog integrado", "description": "Sección de artículos y noticias.", "is_included": false, "display_order": 6, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 23, "package_id": 3, "title": "Integraciones a medida", "description": "Conexión con ERPs o sistemas de inventario.", "is_included": false, "display_order": 7, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined },
        { "id": 24, "package_id": 3, "title": "Soporte prioritario", "description": "Atención con tiempo de respuesta garantizado.", "is_included": false, "display_order": 8, "created_at": new Date("2025-11-10T09:20:00Z"), "updated_at": new Date("2025-11-10T09:20:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 4,
      "slug": "enterprise",
      "name": "Enterprise",
      "short_description": "Sistemas y plataformas complejas hechas a medida.",
      "description": "Solución completamente a medida para empresas con procesos complejos, múltiples integraciones y necesidades de infraestructura dedicada.",
      "price": 0.00,
      "currency": "BOB",
      "Is_featured": false,
      "is_active": true,
      "display_order": 4,
      "view_count": 312,
      "created_at": new Date("2025-11-10T09:30:00Z"),
      "updated_at": new Date("2026-03-05T09:00:00Z"),
      "deleted_at": undefined,
      "features": [
        { "id": 25, "package_id": 4, "title": "Páginas y módulos ilimitados", "description": "Arquitectura escalable según la necesidad del cliente.", "is_included": true, "display_order": 1, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 26, "package_id": 4, "title": "Integraciones a medida", "description": "Conexión con cualquier sistema externo.", "is_included": true, "display_order": 2, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 27, "package_id": 4, "title": "Infraestructura dedicada", "description": "Servidores y arquitectura exclusiva para el cliente.", "is_included": true, "display_order": 3, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 28, "package_id": 4, "title": "Soporte prioritario 24/7", "description": "Atención garantizada en cualquier horario.", "is_included": true, "display_order": 4, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 29, "package_id": 4, "title": "Panel de administración", "description": "Edición de contenido sin tocar código.", "is_included": true, "display_order": 5, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 30, "package_id": 4, "title": "SEO on-page", "description": "Optimización avanzada de contenido y metadatos.", "is_included": true, "display_order": 6, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 31, "package_id": 4, "title": "Gerente de proyecto dedicado", "description": "Punto de contacto único durante todo el desarrollo.", "is_included": true, "display_order": 7, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined },
        { "id": 32, "package_id": 4, "title": "SLA contractual", "description": "Acuerdo de nivel de servicio formal.", "is_included": true, "display_order": 8, "created_at": new Date("2025-11-10T09:30:00Z"), "updated_at": new Date("2025-11-10T09:30:00Z"), "deleted_at": undefined }
      ]
    }
  ],

  "home_images": [
    { "id": 1, "title": "Oficinas DSTAES", "image": "/uploads/home/slide-1.jpg", "description": "Nuestro equipo trabajando en un nuevo proyecto.", "highlight": false, "created_at": new Date("2025-11-12T08:00:00Z"), "updated_at": new Date("2025-11-12T08:00:00Z"), "deleted_at": undefined },
    { "id": 2, "title": "Desarrollo colaborativo", "image": "/uploads/home/slide-2.jpg", "description": "Programador trabajando en una laptop.", "highlight": true, "created_at": new Date("2025-11-12T08:05:00Z"), "updated_at": new Date("2025-11-12T08:05:00Z"), "deleted_at": undefined },
    { "id": 3, "title": "Innovación digital", "image": "/uploads/home/slide-3.jpg", "description": "Mano interactuando con una interfaz digital.", "highlight": true, "created_at": new Date("2025-11-12T08:10:00Z"), "updated_at": new Date("2025-11-12T08:10:00Z"), "deleted_at": undefined },
    { "id": 4, "title": "Trabajo en equipo", "image": "/uploads/home/slide-4.jpg", "description": "Equipo de diseño revisando un prototipo.", "highlight": false, "created_at": new Date("2025-11-12T08:15:00Z"), "updated_at": new Date("2025-11-12T08:15:00Z"), "deleted_at": undefined },
    { "id": 5, "title": "Sala de desarrollo", "image": "/uploads/home/slide-5.jpg", "description": "Estación de trabajo con múltiples monitores.", "highlight": false, "created_at": new Date("2025-11-12T08:20:00Z"), "updated_at": new Date("2025-11-12T08:20:00Z"), "deleted_at": undefined },
    { "id": 6, "title": "Reunión con clientes", "image": "/uploads/home/slide-6.jpg", "description": "Presentación de resultados a un cliente.", "highlight": false, "created_at": new Date("2025-11-12T08:25:00Z"), "updated_at": new Date("2025-11-12T08:25:00Z"), "deleted_at": undefined }
  ],

  "systems": [
    {
      "id": 1,
      "slug": "sistema-facturacion",
      "name": "Sistema de Facturación",
      "short_description": "Emisión, control y reportes de facturación electrónica.",
      "description": "Plataforma para emitir facturas electrónicas, controlar tus ventas y generar reportes fiscales en tiempo real, cumpliendo con la normativa vigente.",
      "image": "/uploads/systems/facturacion.jpg",
      "status": "published",
      "is_active": true,
      "view_count": 890,
      "created_at": new Date("2025-12-01T09:00:00Z"),
      "updated_at": new Date("2026-07-20T09:00:00Z"),
      "deleted_at": undefined
    },
    {
      "id": 2,
      "slug": "crm-empresarial",
      "name": "CRM Empresarial",
      "short_description": "Gestión de clientes, ventas y seguimiento comercial.",
      "description": "Administra tu cartera de clientes, oportunidades de venta y comunicaciones desde un único panel, con reportes de desempeño comercial.",
      "image": "/uploads/systems/crm.jpg",
      "status": "published",
      "is_active": true,
      "view_count": 615,
      "created_at": new Date("2025-12-05T09:00:00Z"),
      "updated_at": new Date("2026-06-10T09:00:00Z"),
      "deleted_at": undefined
    }
  ],

  "system_plans": [
    {
      "id": 1,
      "system_id": 1,
      "slug": "facturacion-basico",
      "name": "Básico",
      "description": "Ideal para pequeños negocios que emiten pocas facturas al mes.",
      "price": 150.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 210,
      "created_at": new Date("2025-12-01T09:10:00Z"),
      "updated_at": new Date("2025-12-01T09:10:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": []
    },
    {
      "id": 2,
      "system_id": 1,
      "slug": "facturacion-profesional",
      "name": "Profesional",
      "description": "Para negocios en crecimiento con volumen medio de facturación.",
      "price": 350.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 480,
      "created_at": new Date("2025-12-01T09:15:00Z"),
      "updated_at": new Date("2025-12-01T09:15:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": [
        {
          "id": 1,
          "system_plan_id": 2,
          "promotion_id": 1,
          "created_at": new Date("2026-08-01T00:00:00Z"),
          "updated_at": new Date("2026-08-01T00:00:00Z"),
          "deleted_at": undefined,
          "promotion": {
            "id": 1,
            "name": "Lanzamiento Facturación Profesional",
            "description": "20% de descuento por tiempo limitado en el plan Profesional.",
            "discount_type": "percentage",
            "discount_value": 20.00,
            "start_date": new Date("2026-08-01"),
            "end_date": new Date("2026-09-30"),
            "required_duration_months": undefined,
            "is_active": true,
            "created_at": new Date("2026-07-25T00:00:00Z"),
            "updated_at": new Date("2026-07-25T00:00:00Z")
          }
        }
      ]
    },
    {
      "id": 3,
      "system_id": 1,
      "slug": "facturacion-empresarial",
      "name": "Empresarial",
      "description": "Facturación ilimitada con soporte prioritario para empresas.",
      "price": 590.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 140,
      "created_at": new Date("2025-12-01T09:20:00Z"),
      "updated_at": new Date("2025-12-01T09:20:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": []
    },
    {
      "id": 4,
      "system_id": 2,
      "slug": "crm-starter",
      "name": "Starter",
      "description": "Gestión básica de contactos y oportunidades de venta.",
      "price": 120.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 175,
      "created_at": new Date("2025-12-05T09:10:00Z"),
      "updated_at": new Date("2025-12-05T09:10:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": []
    },
    {
      "id": 5,
      "system_id": 2,
      "slug": "crm-business",
      "name": "Business",
      "description": "Automatización de seguimiento comercial y reportes avanzados.",
      "price": 260.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 302,
      "created_at": new Date("2025-12-05T09:15:00Z"),
      "updated_at": new Date("2025-12-05T09:15:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": [
        {
          "id": 2,
          "system_plan_id": 5,
          "promotion_id": 2,
          "created_at": new Date("2026-08-15T00:00:00Z"),
          "updated_at": new Date("2026-08-15T00:00:00Z"),
          "deleted_at": undefined,
          "promotion": {
            "id": 2,
            "name": "CRM Business Anual",
            "description": "2 meses gratis al contratar el plan Business con facturación anual.",
            "discount_type": "fixed",
            "discount_value": 520.00,
            "start_date": new Date("2026-08-15"),
            "end_date": new Date("2026-10-15"),
            "required_duration_months": 12,
            "is_active": true,
            "created_at": new Date("2026-08-10T00:00:00Z"),
            "updated_at": new Date("2026-08-10T00:00:00Z")
          }
        }
      ]
    },
    {
      "id": 6,
      "system_id": 2,
      "slug": "crm-scale",
      "name": "Scale",
      "description": "Para equipos comerciales grandes con múltiples usuarios.",
      "price": 490.00,
      "currency": "BOB",
      "billing_period": "monthly",
      "is_active": true,
      "view_count": 96,
      "created_at": new Date("2025-12-05T09:20:00Z"),
      "updated_at": new Date("2025-12-05T09:20:00Z"),
      "deleted_at": undefined,
      "system_plans_promotions": []
    }
  ],

  "technologies": [
    { "id": 1, "name": "React", "icon": "react", "website_url": "https://react.dev", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 2, "name": "Node.js", "icon": "nodejs", "website_url": "https://nodejs.org", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 3, "name": "Laravel", "icon": "laravel", "website_url": "https://laravel.com", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 4, "name": "Vue.js", "icon": "vuejs", "website_url": "https://vuejs.org", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 5, "name": "Flutter", "icon": "flutter", "website_url": "https://flutter.dev", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 6, "name": "PostgreSQL", "icon": "postgresql", "website_url": "https://postgresql.org", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 7, "name": "MySQL", "icon": "mysql", "website_url": "https://mysql.com", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 8, "name": "AWS", "icon": "aws", "website_url": "https://aws.amazon.com", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 9, "name": "Docker", "icon": "docker", "website_url": "https://docker.com", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined },
    { "id": 10, "name": "Figma", "icon": "figma", "website_url": "https://figma.com", "is_active": true, "created_at": new Date("2025-11-01T08:00:00Z"), "updated_at": new Date("2025-11-01T08:00:00Z"), "deleted_at": undefined }
  ],

  "projects": [
    {
      "id": 1,
      "title": "Plataforma de Facturación Andina Retail",
      "slug": "plataforma-facturacion-andina-retail",
      "short_description": "Sistema de facturación electrónica para una cadena de retail con reportes en tiempo real.",
      "client_Id": 1,
      "project_url": "https://andinaretail.com",
      "repository_url": "https://github.com/dstaes/andina-retail",
      "cover_image_url": "/uploads/projects/andina-retail/cover.jpg",
      "status": "in_production",
      "is_featured": true,
      "is_active": true,
      "display_order": 1,
      "view_count": 430,
      "created_at": new Date("2026-01-15T10:00:00Z"),
      "updated_at": new Date("2026-08-10T10:00:00Z"),
      "deleted_at": undefined,
      "images": [
        { "id": 1, "project_id": 1, "image": "/uploads/projects/andina-retail/img-1.jpg", "alt_text": "Panel de reportes de ventas", "display_order": 1, "created_at": new Date("2026-01-15T10:05:00Z"), "updated_at": new Date("2026-01-15T10:05:00Z"), "deleted_at": undefined },
        { "id": 2, "project_id": 1, "image": "/uploads/projects/andina-retail/img-2.jpg", "alt_text": "Módulo de emisión de facturas", "display_order": 2, "created_at": new Date("2026-01-15T10:06:00Z"), "updated_at": new Date("2026-01-15T10:06:00Z"), "deleted_at": undefined },
        { "id": 3, "project_id": 1, "image": "/uploads/projects/andina-retail/img-3.jpg", "alt_text": "Vista móvil del sistema", "display_order": 3, "created_at": new Date("2026-01-15T10:07:00Z"), "updated_at": new Date("2026-01-15T10:07:00Z"), "deleted_at": undefined }
      ],
      "project_technologies": [
        { "project_id": 1, "technology_id": 1, "created_at": new Date("2026-01-15T10:10:00Z"), "updated_at": new Date("2026-01-15T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 1, "technology_id": 2, "created_at": new Date("2026-01-15T10:10:00Z"), "updated_at": new Date("2026-01-15T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 1, "technology_id": 6, "created_at": new Date("2026-01-15T10:10:00Z"), "updated_at": new Date("2026-01-15T10:10:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 2,
      "title": "App de Delivery Nortec",
      "slug": "app-delivery-nortec",
      "short_description": "Aplicación móvil de pedidos con seguimiento en vivo y pagos integrados.",
      "client_Id": 2,
      "project_url": "https://nortecdelivery.com",
      "repository_url": "https://github.com/dstaes/nortec-delivery",
      "cover_image_url": "/uploads/projects/nortec-delivery/cover.jpg",
      "status": "completed",
      "is_featured": true,
      "is_active": true,
      "display_order": 2,
      "view_count": 588,
      "created_at": new Date("2025-12-20T10:00:00Z"),
      "updated_at": new Date("2026-05-02T10:00:00Z"),
      "deleted_at": undefined,
      "images": [
        { "id": 4, "project_id": 2, "image": "/uploads/projects/nortec-delivery/img-1.jpg", "alt_text": "Pantalla de seguimiento de pedido", "display_order": 1, "created_at": new Date("2025-12-20T10:05:00Z"), "updated_at": new Date("2025-12-20T10:05:00Z"), "deleted_at": undefined },
        { "id": 5, "project_id": 2, "image": "/uploads/projects/nortec-delivery/img-2.jpg", "alt_text": "Catálogo de restaurantes", "display_order": 2, "created_at": new Date("2025-12-20T10:06:00Z"), "updated_at": new Date("2025-12-20T10:06:00Z"), "deleted_at": undefined }
      ],
      "project_technologies": [
        { "project_id": 2, "technology_id": 5, "created_at": new Date("2025-12-20T10:10:00Z"), "updated_at": new Date("2025-12-20T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 2, "technology_id": 2, "created_at": new Date("2025-12-20T10:10:00Z"), "updated_at": new Date("2025-12-20T10:10:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 3,
      "title": "Tienda E-commerce Bloom Studio",
      "slug": "ecommerce-bloom-studio",
      "short_description": "Tienda en línea con catálogo dinámico, checkout y panel administrativo.",
      "client_Id": 3,
      "project_url": "https://bloomstudio.bo",
      "repository_url": undefined,
      "cover_image_url": "/uploads/projects/bloom-studio/cover.jpg",
      "status": "completed",
      "is_featured": false,
      "is_active": true,
      "display_order": 3,
      "view_count": 275,
      "created_at": new Date("2025-10-05T10:00:00Z"),
      "updated_at": new Date("2026-01-18T10:00:00Z"),
      "deleted_at": undefined,
      "images": [
        { "id": 6, "project_id": 3, "image": "/uploads/projects/bloom-studio/img-1.jpg", "alt_text": "Catálogo de productos", "display_order": 1, "created_at": new Date("2025-10-05T10:05:00Z"), "updated_at": new Date("2025-10-05T10:05:00Z"), "deleted_at": undefined },
        { "id": 7, "project_id": 3, "image": "/uploads/projects/bloom-studio/img-2.jpg", "alt_text": "Proceso de checkout", "display_order": 2, "created_at": new Date("2025-10-05T10:06:00Z"), "updated_at": new Date("2025-10-05T10:06:00Z"), "deleted_at": undefined },
        { "id": 8, "project_id": 3, "image": "/uploads/projects/bloom-studio/img-3.jpg", "alt_text": "Panel administrativo", "display_order": 3, "created_at": new Date("2025-10-05T10:07:00Z"), "updated_at": new Date("2025-10-05T10:07:00Z"), "deleted_at": undefined }
      ],
      "project_technologies": [
        { "project_id": 3, "technology_id": 3, "created_at": new Date("2025-10-05T10:10:00Z"), "updated_at": new Date("2025-10-05T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 3, "technology_id": 4, "created_at": new Date("2025-10-05T10:10:00Z"), "updated_at": new Date("2025-10-05T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 3, "technology_id": 7, "created_at": new Date("2025-10-05T10:10:00Z"), "updated_at": new Date("2025-10-05T10:10:00Z"), "deleted_at": undefined }
      ]
    },
    {
      "id": 4,
      "title": "CRM interno Grupo Paredes",
      "slug": "crm-grupo-paredes",
      "short_description": "Sistema de gestión de clientes y seguimiento comercial a medida.",
      "client_Id": 4,
      "project_url": undefined,
      "repository_url": "https://github.com/dstaes/grupo-paredes-crm",
      "cover_image_url": "/uploads/projects/grupo-paredes/cover.jpg",
      "status": "in_production",
      "is_featured": false,
      "is_active": true,
      "display_order": 4,
      "view_count": 132,
      "created_at": new Date("2026-03-01T10:00:00Z"),
      "updated_at": new Date("2026-08-15T10:00:00Z"),
      "deleted_at": undefined,
      "images": [
        { "id": 9, "project_id": 4, "image": "/uploads/projects/grupo-paredes/img-1.jpg", "alt_text": "Panel de oportunidades de venta", "display_order": 1, "created_at": new Date("2026-03-01T10:05:00Z"), "updated_at": new Date("2026-03-01T10:05:00Z"), "deleted_at": undefined }
      ],
      "project_technologies": [
        { "project_id": 4, "technology_id": 1, "created_at": new Date("2026-03-01T10:10:00Z"), "updated_at": new Date("2026-03-01T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 4, "technology_id": 8, "created_at": new Date("2026-03-01T10:10:00Z"), "updated_at": new Date("2026-03-01T10:10:00Z"), "deleted_at": undefined },
        { "project_id": 4, "technology_id": 9, "created_at": new Date("2026-03-01T10:10:00Z"), "updated_at": new Date("2026-03-01T10:10:00Z"), "deleted_at": undefined }
      ]
    }
  ],

  "testimonials": [
    {
      "id": 1,
      "client_id": 1,
      "content": "El equipo entendió exactamente lo que necesitábamos y entregó antes del plazo. La comunicación fue impecable durante todo el proyecto.",
      "rating": 5,
      "Is_featured": true,
      "is_active": true,
      "display_order": 1,
      "created_at": new Date("2026-08-12T09:00:00Z"),
      "updated_at": new Date("2026-08-12T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 1,
        "first_name": "María",
        "last_name": "Fernández",
        "email": "maria.fernandez@andinaretail.com",
        "phone": "+591 700 11122",
        "company_name": "Andina Retail",
        "address": "Zona Sur, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2026-01-10T09:00:00Z"),
        "updated_at": new Date("2026-01-10T09:00:00Z"),
        "deleted_at": undefined
      }
    },
    {
      "id": 2,
      "client_id": 2,
      "content": "Migramos todo nuestro sistema con ellos y el soporte post-lanzamiento fue excelente. Totalmente recomendados.",
      "rating": 5,
      "Is_featured": true,
      "is_active": true,
      "display_order": 2,
      "created_at": new Date("2026-05-20T09:00:00Z"),
      "updated_at": new Date("2026-05-20T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 2,
        "first_name": "Carlos",
        "last_name": "Rojas",
        "email": "carlos.rojas@nortecsoluciones.com",
        "phone": "+591 700 22233",
        "company_name": "Nortec Soluciones",
        "address": "Av. Ballivián, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2025-12-15T09:00:00Z"),
        "updated_at": new Date("2025-12-15T09:00:00Z"),
        "deleted_at": undefined
      }
    },
    {
      "id": 3,
      "client_id": 3,
      "content": "Buena relación calidad-precio y mucha flexibilidad para adaptarse a los cambios que fuimos pidiendo sobre la marcha.",
      "rating": 4,
      "Is_featured": true,
      "is_active": true,
      "display_order": 3,
      "created_at": new Date("2026-02-02T09:00:00Z"),
      "updated_at": new Date("2026-02-02T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 3,
        "first_name": "Lucía",
        "last_name": "Paredes",
        "email": "lucia@bloomstudio.bo",
        "phone": "+591 700 33344",
        "company_name": "Bloom Studio",
        "address": "Calacoto, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2025-10-01T09:00:00Z"),
        "updated_at": new Date("2025-10-01T09:00:00Z"),
        "deleted_at": undefined
      }
    },
    {
      "id": 4,
      "client_id": 4,
      "content": "El CRM que desarrollaron nos ordenó por completo el proceso de ventas. Ya no perdemos seguimiento de ningún cliente.",
      "rating": 5,
      "Is_featured": false,
      "is_active": true,
      "display_order": 4,
      "created_at": new Date("2026-08-20T09:00:00Z"),
      "updated_at": new Date("2026-08-20T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 4,
        "first_name": "Jorge",
        "last_name": "Paredes",
        "email": "jorge.paredes@grupoparedes.com",
        "phone": "+591 700 44455",
        "company_name": "Grupo Paredes",
        "address": "Sopocachi, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2026-02-20T09:00:00Z"),
        "updated_at": new Date("2026-02-20T09:00:00Z"),
        "deleted_at": undefined
      }
    },
    {
      "id": 5,
      "client_id": 5,
      "content": "Contratamos el plan Profesional del sistema de facturación y desde el primer mes notamos el ahorro de tiempo en nuestros reportes.",
      "rating": 5,
      "Is_featured": false,
      "is_active": true,
      "display_order": 5,
      "created_at": new Date("2026-08-25T09:00:00Z"),
      "updated_at": new Date("2026-08-25T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 5,
        "first_name": "Valeria",
        "last_name": "Mamani",
        "email": "valeria.mamani@comercialsur.com",
        "phone": "+591 700 55566",
        "company_name": "Comercial Sur",
        "address": "El Alto, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2026-07-01T09:00:00Z"),
        "updated_at": new Date("2026-07-01T09:00:00Z"),
        "deleted_at": undefined
      }
    },
    {
      "id": 6,
      "client_id": 6,
      "content": "Profesionales, puntuales y con muy buena capacidad de resolver imprevistos. Nuestra tienda en línea quedó exactamente como la imaginamos.",
      "rating": 4,
      "Is_featured": false,
      "is_active": true,
      "display_order": 6,
      "created_at": new Date("2026-03-14T09:00:00Z"),
      "updated_at": new Date("2026-03-14T09:00:00Z"),
      "deleted_at": undefined,
      "client": {
        "id": 6,
        "first_name": "Diego",
        "last_name": "Vargas",
        "email": "diego.vargas@modaurbana.bo",
        "phone": "+591 700 66677",
        "company_name": "Moda Urbana",
        "address": "Miraflores, La Paz, Bolivia",
        "is_active": true,
        "created_at": new Date("2026-01-05T09:00:00Z"),
        "updated_at": new Date("2026-01-05T09:00:00Z"),
        "deleted_at": undefined
      }
    }
  ]

}
