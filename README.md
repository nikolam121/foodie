# FOODIE

Online trgovina namirnicama: pregled proizvoda po kategorijama, dodavanje u košaricu i pregled ukupnog iznosa za plaćanje. Radi bez prijave, korpa se čuva po sesiji preglednika.

## Tehnologije

| Sloj | Tehnologija |
| --- | --- |
| Server | Node.js, Express 5 |
| Predlošci | EJS |
| Sesija | express-session |

## Pokretanje

```bash
npm install
npm start
```

Aplikacija se diže na `http://localhost:3000`.

## Struktura

```
server.js              Ulazna točka, postavlja EJS, statiku i sesiju
routes/home.routes.js   Dohvat kategorija i proizvoda
routes/cart.routes.js   Dodavanje, uklanjanje i pregled košarice
data/mydata.js          Katalog proizvoda (10 kategorija, 50 proizvoda, cijene u EUR)
views/                  EJS predlošci (naslovnica, košarica, header/footer djelići)
public/                 Statički resursi: stilovi, klijentski JS, slike proizvoda
```

## API

| Metoda | Putanja | Opis |
| --- | --- | --- |
| `GET` | `/home/getCategories` | sve kategorije |
| `GET` | `/home/getProducts/:id` | proizvodi za kategoriju, uklj. cijenu |
| `POST` | `/cart/add/:id` | dodaje proizvod u košaricu |
| `POST` | `/cart/remove/:id` | smanjuje količinu za jedan |
| `GET` | `/cart/getAll` | stavke u košarici, cijena po retku i ukupan iznos |

Akcije koje mijenjaju stanje košarice idu preko `POST`, ne `GET`, tako da se ne mogu slučajno pokrenuti prefetchom u pregledniku.

Ako sesija referencira proizvod koji više ne postoji u katalogu, `/cart/getAll` ga tiho ukloni iz košarice umjesto da vrati grešku.
