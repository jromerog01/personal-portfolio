FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY proyectos/ /usr/share/nginx/html/proyectos/
COPY assets/ /usr/share/nginx/html/assets/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

EXPOSE 80
