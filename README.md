# S5. ACUDITS

## Descripció

Com ja hauràs après, existeixen nombroses plataformes que proporcionen una API perquè puguis consumir les seves dades.  
Aquestes APIs poden ser gratuïtes o de pagament, obertes o requerir una clau de API.  

Crearem una web d'acudits, consumint dades d'una API gratuïta que no requereix clau. Veuràs que és molt divertit i interessant poder obtenir dades d'una API, imagina la quantitat de webs que pots fer!  

En l'àmbit professional, quan treballis en un projecte, l'empresa normalment té un backend amb una documentació per a poder obtenir les dades. A més, en moltes ocasions, una web o app no sols té una font de dades, també és comuna utilitzar APIs de tercers. Resumint, saber consumir dades d'una API és un dels skills més importants d'un programador frontend!  

Abans de començar, aquí tens la informació de la API que utilitzarem en aquest exercici:

-    URL de la API:  

https://icanhazdadjoke.com/  

-    Header per a obtenir les dades en el format que ens interessa:  

'Accept': 'application/json'

### Nivell 1

#### Exercici 1

Crear la web d'acudits, el funcionament dels quals és:  

- En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit“

- En prémer el botó de “Següent acudit” es farà fetch a la API d'acudits i es mostrarà per consola l'acudit en qüestió.

Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.  

Tip 1: usar promises o async/await per a esperar la resposta de la API

Tip 2: abans d'usar una API en el codi, és recomanable usar Postman o eines online per a provar la API, per exemple https://apitester.com/. A més de garantir que funciona, veuràs l'objecte que retorna, per a saber utilitzar-lo.

#### Exercici 2

Modificar la web anterior perquè l'acudit aparegui en la web, en lloc de per consola.

### Nivell 2

#### Exercici 3

Ben fet! Ja tens una web d'acudits operativa. Ja que està web està pensada per a mostrar acudits als usuaris a primera hora del matí perquè comencin bé el dia, afegirem informació meteorològica ja que els pot ser d'utilitat. 

Consumir una API d'informació meteorològica i mostrar-ho en la web. Aquesta API ha de dir-se en l'obertura, no mitjançant un botó.

Nota: Encara no és necessari maquetar la web, amb mostrar una paraula que indiqui el temps és suficient.

### Nivell 3

#### Exercici 4

Maquetar la web d'acudits i temps meteorològic conforme a la següent pantalla:

![exemple.png](J:\laragon\www\s5-acudits\img\exemple.png)

#### Exercici 5

Atès que els nostres usuaris s'han avorrit de veure sempre els mateixos acudits, buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).

## Recordatoris

- Els sprints duren dues setmanes i comencen en dilluns.

- **És obligatori pujar tots els lliuraments almenys amb el nivell 1** al final del sprint per a poder passar al següent.

- Els **lliuraments es faran a ser posible el dimecres o dijous de la segona setmana del sprint.** Si ho fas i avises al mentor perquè te de feedback, tindràs una oportunitat per a corregir errors i poder pujar nota!

- Com a més tard el lliurament es farà el dilluns següent, dia que comença el nou sprint.

- **És recomanable intentar aconseguir les màximes estrelles possibles** en els exercicis. Si no et dóna temps, no et preocupis. És una manera de millorar el teu perfil de cara al procés d'ocupabilitat, però també es té en compte el feedback dels mentors).
