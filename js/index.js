    class Human{
        constructor(name, gender) {
            this.name = name;
            this.gender = gender;
        }
    }

    class Apartment {
        constructor() {
            this.residents = [];
        }
        addResident(human){
            this.residents.push(human);
        }
    }

    class House {
        constructor(maxNumberOfApartments) {
            this.apartments = [];
            this.maxNumberOfApartments = maxNumberOfApartments;
        }

        addApartment(apartment){
            if(this.apartments.length < this.maxNumberOfApartments){
                this.apartments.push(apartment);
            }else {
                console.log('Exceeds the maximum number of apartments')
            }
        }
    }

    const human = new Human('Julia', 'woman');
    const human2 = new Human('Dan', 'man');

    console.log(human);
    console.log(human2);

    const apartment = new Apartment();
    const apartment2 = new Apartment();

    console.log(apartment);
    console.log(apartment2);

    apartment.addResident(human);
    apartment2.addResident(human2);

    const house = new House(2);
    console.log(house)

    house.addApartment(apartment);
    house.addApartment(apartment2);
    house.addApartment(apartment2);
