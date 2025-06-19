# Mini zarządzanie strzelnicą - informator

Dzięki aplikacji, osoby pracujące na strzelnicy mają pełny wgląd kto przychodzi na strzelnicę 
oraz minimalizują liczbę formalności np. organizacja wejść czy zmudne rejestrowanie 
sportowców na zawody.

## Uruchomienie
Po pobraniu projektu należy projekt zbudować tj. dociągnąć odpowiednie zależności
```npm install```
Oraz uruchomić
```npm run dev```
i w przeglądarce przejść na stronę internetową https://localhost:49324/

## Opis funkcji

### Strona główna
* Najważniejsze informacje o strzelnicy i wydarzeniach (tzw. niusy)

### Rezerwacja
* Podstorna rezerwacji toru (Reserve Track) - tutaj zarezerwujesz tor na określoną godzine danego dnia
* Podstrona moich rezerwacij (My Reservations) - zobaczysz wszystkie swoje rezerwacje
* Podstrona wszstkich rezerwacji (All Reservations) - to widok dla adminów / właścicieli strzelnic żeby podejrzeć wszystkie rezerwacje, ewentualnie odfiltrować odpowiednie

### Zawody (Competitions)
* Strona prezentuje wszystkie aktualne oraz przeszłe zawody
* Do każdych zawodów można przejść bezpośrednio i zobaczyć szczegóły wydarzenia (jest możliwość rejestracji ale póki co tylko przycisk który wyświetla prosty modal)

### Strzelcy (Strona przeznaczona dla administratorów)
* Lista osób przychodzących na strzelnicę (strzelnice prowadzą taki rejestr)
* Możliwość dodawania i edytowania danych strzelca.

## Co dalej?
-[x] Jeszcze bardziej połączyć ze sobą w/w funkcjonalności w taki sposób aby między wieloma stronami była silna interakcja np. dodanie walidacji na rezerwację tj. tylko jedna osoba może zarezerwować tor w tym samym czasie.
-[x] Przywrócenie internacjonalizacji z pierwszego zadania.
-[ ] Zrobić stronę logowania i rejestracji użytkownika (preferowany OAuth2)
-[ ] Podpiąć bazę danych.
-[x] Popracować nad stylami

## Podsumowanie Całego projektu
Na OAuth2 oraz Bazę danych zabrakło mi czasu chociaż aplikacja jest przygotowana do podpięcia backendu przez zastosowanie mocków dla list.

Fajnie byłoby dodać jakieś ciekawsze zarządzanie zdjęciami - w moim rozwiązaniu wykorzystałem serwis z losowymi zdjęciami.

Podstawowe założenie biznesowe zostały spełnione. Przy niewielkim nakłądzie pracy aplikacja byłaby gotowa do wdrożenia produkcyjnego.

### Dodatkowe funkcje w ramach ostatniego zadania
* mapa
* przełącznik pomiędzy trybem ciemnym i jasnym
* dynamiczna zmiana języka ang-pl - internacjonalizacja
* walidacje formularzy (2 różne sposoby)
* zdecydowanie poprawione style i zaimplementowane komponenty bardziej po mojemu, wykorzystanie kompentów takich jak Card czy Accordiony w których sekcje są bardziej wyróżnione i odseparowane od siebie.

