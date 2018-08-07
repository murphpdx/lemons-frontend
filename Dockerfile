FROM nginx

COPY dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf

COPY entry.sh /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]