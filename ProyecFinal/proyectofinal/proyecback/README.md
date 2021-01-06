CABAÑAS PORTALES DEL UBAJAY

Esta aplicación esta relacionada a un proyecto inicial de la Diplomatura en Programacion Web de la UTN. Se trata de un complejo de cabañas ubicado en santa fe destinado a uso vacacional. En el cual las personas interesadas en las mismas podrán registrarse en primer lugar, y luego ingresar al sistema para realizar una reserva.

INSTRUCCIONES PARA SU FUNCIONAMIENTO

Para poner en funcionamiento la aplicacion, se debe descargar el respositorio de Git, y ejecutar el código npm i start en consola para la descarga de los node_modules. Luego se debe crear el archivo .env que contenga las siguientes variables:

Para el funcionamiento de la base de datos
DB_HOST = "localhost"
DB_USER = "root"
DB_PASSWORD = ""
DB_NAME = "cabañas"
DB_PORT = "3306"

Para el funcionamiento del registro:
MAIL_SERVICE = "smtp.gmail.com"
MAIL_USER = "florenciaprueba.re@gmail.com"
MAIL_PASSWORD = "prueba+1"

CONSTRUIDO CON:
Node
Expres
Mysql

AUTORES
Florencia Re y Monzon Sofia
