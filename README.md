# Portfolio de Martxel Aranzadi

Portfolio estático y responsive construido con **Astro, TypeScript y Tailwind CSS**. Incluye una portada con resúmenes, páginas individuales para cinco proyectos y tres experiencias (Arfima, Innguma y Mondragon Unibertsitatea), y las redirecciones de las antiguas páginas de `templates/`.

## Verlo en local

Con Node.js 22.23.4 o superior:

```sh
npm ci
npm run dev
```

Abre http://127.0.0.1:4321. `npm start` también inicia el servidor de desarrollo. Los cambios en los componentes y el JSON se actualizan automáticamente en el navegador.

```sh
npm run check   # Comprueba Astro y TypeScript
npm run build   # Genera la web estática en dist/
npm run preview # Sirve la compilación de producción en local
```

Las dependencias se utilizan durante el desarrollo y la compilación. El hosting solo necesita servir el contenido de `dist/`.

## Editar el contenido

1. Edita **`data/portfolio.json`**: presentación, edad, formación, enlaces, conocimientos y experiencias.
2. El servidor de desarrollo refleja los cambios automáticamente.
3. Para publicar, ejecuta **`npm run build`** y utiliza el contenido de `dist/`.

Cada experiencia contiene `company`, `role`, `dates`, `summary`, `sections` y `stack`. Publica solo datos confirmados: las preguntas y detalles pendientes se conservan en `_editorial.pending`, fuera de la interfaz. Una lista `stack` vacía oculta la sección de tecnologías y su enlace en la página de detalle. El campo opcional `document` añade un enlace a una memoria guardada en `public/`.

La portada también incluye `location`, `languages` y `projects` (TFM, TFG y una selección de GitHub). Cada proyecto contiene un `slug` único, `name` y `summary` para la lista de inicio. Su página individual muestra el título, la institución o contexto, y según los recursos disponibles, capturas o diagramas con texto alternativo y pie de foto, además del problema, la aportación, las tecnologías, la documentación y el flujo funcional. `images` es opcional; utiliza rutas dentro de `public/` y campos `src`, `alt` y `caption`. Las capturas del TFM proceden de la memoria aportada por su autor; los diagramas SVG resumen los flujos de otros proyectos. Todos estos textos se editan desde el mismo JSON. `technologyGroups` conserva el mismo orden de categorías cuando corresponden al proyecto: Interfaz, API y autenticación, Datos, Integración y automatización, Despliegue y Pruebas y herramientas. No hacen falta grupos vacíos para tecnologías que no se utilizan.

Para enlazar documentación utiliza `url` con una dirección externa o `document` con el nombre de un PDF de `public/`; `demoUrl` añade un enlace a una web comprobada y `experienceSlug` enlaza una experiencia existente. Las páginas se generan en `proyectos/<slug>.html`, respetan `BASE_PATH` y mantienen los enlaces locales a documentos con espacios en el nombre.

## Criterios de presentación

La portada presenta nombre y especialidad, proyectos, experiencia, formación, conocimientos y contacto, en ese orden. Proyectos utiliza resúmenes y enlaces «Ver proyecto», siguiendo la misma idea que Experiencia. El detalle completo queda en las páginas individuales, con una estructura común para el TFM, el TFG y los proyectos de GitHub. La referencia de estructura es la claridad de [Brittany Chiang](https://brittanychiang.com/), conservando la identidad visual de editor solicitada para este portfolio.

Los cuerpos principales usan 14–18 px, los enlaces principales tienen una altura mínima de 44 px y los acentos de texto se han ajustado para mejorar el contraste en ambas paletas. Se han consultado los criterios de [contraste de WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Las comprobaciones realizadas incluyen 48 vistas de las páginas entre 320 y 1440 px, menú móvil, teclado, temas, contenido sin JavaScript, enlaces y publicación bajo `/portfolio/`; no constituyen una auditoría completa de conformidad WCAG.

## Contenido y fuentes

El contenido se ha completado con la vista pública indexada de [LinkedIn](https://es.linkedin.com/in/martxel-aranzadi-olazabal), la ficha del equipo de [Alpha-Klima](https://alpha-klima.com/about/), el resumen público del [TFM en la UPM](https://oa.upm.es/90280/) y las memorias del TFG y TFM aportadas por el usuario, además de la información del portfolio original.

El campo `_editorial` en `data/portfolio.json` registra qué respalda cada fuente y qué queda por confirmar; no se muestra en la web. LinkedIn bloquea la consulta directa y oculta buena parte de las experiencias: no se han inventado el cargo contractual, la fecha de incorporación, las responsabilidades ni el stack de Arfima, ni la cuarta experiencia sin identificar. El periodo 2019–2024 se ha asociado al grado por el orden de los estudios en la vista indexada y por la titulación corroborada en Alpha-Klima; esta asociación es una inferencia pendiente de confirmar.

Los idiomas conservan los niveles publicados en LinkedIn. Las tecnologías de los proyectos académicos se documentan en sus respectivos casos de estudio. La experiencia en Mondragon conserva la descripción basada en el portfolio original.

La memoria del TFM se ha leído desde `public/MiW.TFM.Memoria.Plantilla Martxel.docx`, aportada por su autor; no se ha descargado el PDF restringido al campus. Los apartados 2.1–2.5 y 5.2–5.6 respaldan React, MUI, react-toastify, Python, FastAPI, Pydantic, OpenAPI/Swagger, GitLab OAuth2, PostgreSQL, pandas, Apache Airflow, MinIO, Docker y Docker Compose. Vitest y Pytest constan en 5.4 y Postman en 1.7.1. Las tecnologías se dividen en las mismas categorías y con el mismo diseño que en el TFG. Vite, ESLint y TypeScript se mencionan como posibilidades del ecosistema, sin confirmar su uso; MinIO no se presenta como un despliegue en AWS. Las herramientas generales de edición y consulta (Visual Studio Code y DataGrip) están registradas en `_editorial`.

El TFG **«Iturrien kudeaketarako panel eta datu basearen sorrera»** (curso 2023/2024) se resume en castellano a partir de la memoria original en euskera. La memoria no se publica desde este sitio. Los apartados 2.3–2.6 y 3 respaldan el panel Next.js/React, API Python/Flask, MySQL, integración PHP/Joomla y catálogo multilingüe. La clasificación automática con IA figura como una propuesta de trabajo futuro en el apartado 6.2; no se presenta como una función implementada en el TFG. La fecha laboral exacta de finalización en Innguma sigue pendiente de confirmar.

Para añadir otra experiencia, añade un objeto a `experiences` con un `slug` único (letras minúsculas, números y guiones). La portada y las páginas de detalle se generan automáticamente. La lista está ordenada de la experiencia más reciente a la más antigua; el enlace «Siguiente experiencia» avanza en el tiempo y solo aparece cuando existe una etapa posterior.

## Selección de GitHub

La revisión del 12 de noviembre de 2026 abarca los nueve repositorios públicos de [MartxelAran](https://github.com/MartxelAran). La selección prioriza utilidad, recorrido funcional, integración técnica, un resultado que pueda enseñarse y variedad respecto al TFM y TFG. Se han leído árboles, README y archivos relevantes; no se ha ejecutado el código de estos proyectos ni sus pruebas. Las estrellas no se han utilizado como puntuación de calidad.

| Repositorio | Selección | Motivo y límite observado |
| --- | --- | --- |
| [PizzaPerTutti](https://github.com/MartxelAran/PizzaPerTutti) | Incluido | Web pública con carta, precios, alérgenos, horarios y contacto; también incluye el rediseño del logotipo y la paleta de colores. La [web](https://pizzapertutti.net/) y la [carta](https://pizzapertutti.net/carta/) respondían correctamente. El README sigue siendo el inicial de Astro; no se presenta como sistema de pedidos o pagos online. |
| [SoundBeats](https://github.com/MartxelAran/SoundBeats) | Incluido | Prototipo de equipo con Spring Boot, consultas, audios y RabbitMQ. Incluye pruebas JUnit/Mockito, JaCoCo y un flujo Maven/Sonar; las pruebas revisadas son básicas y no se ha comprobado su resultado actual. El README es mínimo. No se atribuyen modelos de IA propios ni validación clínica. |
| [TiendaPeliculasNet](https://github.com/MartxelAran/TiendaPeliculasNet) | Incluido | Catálogo, carrito, pedidos, stock y roles en C#, ASP.NET MVC y SQL Server. No se detectaron README, pruebas o CI en el árbol revisado. No incluye pasarela de pago ni una demo pública verificada; se muestra como aplicación de proyecto, sin atribuir robustez de producción. |
| [Tenis](https://github.com/MartxelAran/Tenis) | Excluido | Proyecto de equipo con diagramas y diseño orientado a objetos; su alcance y presentación por consola aportan menos variedad que los casos elegidos. |
| [iwvg-devops-aranzadi-martxel](https://github.com/MartxelAran/iwvg-devops-aranzadi-martxel) | Excluido | Ejercicio sobre plantilla docente con pruebas y CI; menos representativo como producto completo. |
| [devops1](https://github.com/MartxelAran/devops1) | Excluido | Plantilla docente y ejercicios iniciales de DevOps, de alcance reducido. |
| [portfolio](https://github.com/MartxelAran/portfolio) | Excluido | Versión publicada anterior del portfolio; no representa estos cambios locales ni añade un caso diferente. |
| [soundbeatsartifact](https://github.com/MartxelAran/soundbeatsartifact) | Excluido | Esqueleto reducido; la implementación seleccionada de SoundBeats es más completa. |
| [repo](https://github.com/MartxelAran/repo) | Excluido | Ejercicios Pacman y Sudoku sobre material docente, sin README ni un caso de producto propio presentado. |

`_editorial.githubReview` conserva fecha, URLs, ramas, hashes de los árboles de los seleccionados, criterios y limitaciones. SoundBeats se identifica como trabajo colaborativo; no se atribuye al propietario de la cuenta la autoría exclusiva de todos sus componentes.

## Editar el diseño

- `src/components/`: secciones y componentes `.astro`, con los estilos expresados como utilidades de Tailwind.
- `src/components/Projects.astro`: lista breve de proyectos tras la presentación, generada desde `projects` y enlazada a sus páginas individuales.
- `src/layouts/Layout.astro`: estructura común, metadatos, navegación y pie.
- `src/pages/index.astro`: composición de la portada.
- `src/pages/experiencia/[slug].astro`: páginas de experiencia generadas desde el JSON mediante `getStaticPaths`.
- `src/pages/proyectos/[slug].astro`: páginas de proyecto con contexto, aportación, tecnologías por categorías, flujo funcional y enlaces a documentación, código o demo.
- `src/pages/templates/[legacy].astro`: redirecciones de las direcciones antiguas.
- `src/lib/ui.ts`: grupos de utilidades Tailwind compartidas para botones, títulos y contenedores.
- `src/styles/editor-palette.css`: fuente única de las paletas inspiradas en Eclipse claro y oscuro. Los valores de ambas paletas se definen juntos y los modos solo seleccionan sus referencias.
- `src/styles/global.css`: importación de Tailwind y de la paleta, correspondencia de colores semánticos, tipografía, breakpoints y reglas base mínimas.
- `src/lib/portfolio.ts`: tipos del contenido y construcción de URLs.
- `src/scripts/navigation.ts`: menú móvil, navegación activa y barra de lectura.
- `src/components/ThemeSwitcher.astro`: selector de modo claro, oscuro y sistema, integrado en la sección «Apariencia» del pie de página.
- `src/scripts/theme-init.js`: aplicación de la preferencia desde `<head>`, antes de mostrar el contenido.
- `src/scripts/theme.ts`: cambios de modo, seguimiento del sistema y sincronización entre pestañas.
- `public/images/`: imágenes originales servidas como recursos estáticos.

Tailwind se integra con el plugin oficial `@tailwindcss/vite`; no se carga por CDN. No se utiliza un framework de interfaz en el navegador. El contenido y los enlaces están disponibles sin JavaScript; el menú móvil muestra la navegación completa si JavaScript está desactivado.

Astro genera los archivos HTML dentro de `dist/`. No edites los archivos compilados: se sustituyen en cada build.

## Apariencia de editor

El diseño se inspira en **Eclipse JDT**: el modo claro combina blanco, palabras clave burdeos, cadenas azules y comentarios verdes; el oscuro combina gris carbón, palabras clave naranjas, cadenas verde turquesa y tipos azules. Las referencias originales son los [colores clásicos de Java](https://github.com/eclipse-jdt/eclipse.jdt.ui/blob/master/org.eclipse.jdt.ui/ui/org/eclipse/jdt/internal/ui/JavaUIPreferenceInitializer.java) y la [sintaxis del tema oscuro](https://github.com/eclipse-jdt/eclipse.jdt.ui/blob/master/org.eclipse.jdt.ui/css/e4-dark_jdt_syntaxhighlighting.css). Es una adaptación para la web: se ajustan algunos tonos, especialmente comentarios, tipos y palabras clave oscuras, para conservar el contraste del texto pequeño.

La paleta separa fondo de editor, panel, superficie elevada, borde decorativo, borde de control, hover, selección, enlace, foco y acción principal. La barra inferior usa una superficie neutra; los botones activos usan burdeos en claro y naranja tostado en oscuro. Los números de los flujos se muestran sobre el fondo base para conservar el contraste de la sintaxis en modo claro.

Para cambiar los colores, edita las parejas `--palette-…-light` y `--palette-…-dark` en `src/styles/editor-palette.css`. Las utilidades Tailwind (`bg-paper`, `bg-soft`, `bg-elevated`, `bg-hover`, `text-ink`, `text-code-number`, etc.) se conectan a esas variables desde `global.css`. El color de la barra del navegador también se obtiene de la paleta CSS, sin duplicar valores hexadecimales en los scripts de tema.

La tipografía utiliza **Consolas**, con alternativas monoespaciadas locales (Cascadia Code, Menlo, Monaco y Liberation Mono) según el dispositivo. No se descargan fuentes externas. Consolas también es la primera fuente de la [configuración predeterminada del editor en Windows](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/config/fontInfo.ts).

El selector del pie de página, bajo el título **Apariencia**, ofrece:

- **Claro:** fija la paleta inspirada en Eclipse clásico.
- **Oscuro:** fija la paleta inspirada en Eclipse oscuro.
- **Sistema:** sigue `prefers-color-scheme` y sus cambios en tiempo real. Es la opción inicial.

La elección se guarda en `localStorage` con la clave `portfolio-theme`, se conserva al navegar y se sincroniza entre pestañas. Si se bloquea el almacenamiento, los botones siguen cambiando el aspecto de la página. Sin JavaScript, la web sigue automáticamente la apariencia del sistema y muestra la navegación completa.

La ubicación toma como referencia las opciones de apariencia del pie de [Vercel](https://vercel.com/) y [Next.js](https://nextjs.org/). Las tres etiquetas se muestran también en móvil. Los botones tienen objetivos táctiles de al menos 44 × 44 píxeles CSS, foco visible y un estado seleccionado comunicado mediante `aria-pressed`. La sección forma parte del flujo normal de la página: no se superpone al contenido ni requiere abrir un menú. La ubicación es una decisión de diseño, no una posición impuesta por WCAG; se ha consultado la guía de [tamaño mínimo de objetivos de WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

## Publicación

Publica únicamente **`dist/`** en tu hosting estático. Se conservan `index.html`, `experiencia/arfima.html`, `experiencia/innguma.html`, `experiencia/mondragon.html` y las URLs antiguas de `templates/`.

Si lo publicas bajo un subdirectorio (por ejemplo, GitHub Pages en `/portfolio/`), configura `BASE_PATH` al compilar. En PowerShell:

```powershell
$env:BASE_PATH = '/portfolio/'
npm run build
npm run preview
```

Para volver a la raíz, elimina esa variable (`Remove-Item Env:BASE_PATH`) y vuelve a compilar. `astro.config.mjs` utiliza esta base para los recursos y los enlaces; no hacen falta cambios manuales en los componentes. No se requieren servicios externos, variables secretas ni un servidor Node.js en producción.

La tipografía utiliza fuentes del sistema. La web no necesita Google Fonts, cookies, analítica ni conexiones externas para mostrarse. Los enlaces externos son GitHub, LinkedIn y la ficha pública del TFM en la UPM.
